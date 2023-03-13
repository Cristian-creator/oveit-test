import { Drawer, FormControl, ListItem, MenuItem, Typography, useMediaQuery, useScrollTrigger } from '@mui/material';
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { NavbarStyledAppBar, NavbarStyledList, NavbarStyledListItem, NavbarStyledListItemText, NavbarStyledLogoContainer, NavbarStyledLogoLetter, NavbarStyledMenuIcon, NavbarStyledSelect, NavbarStyledToolbar } from './Navbar.styles';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';

import LetterL from '../../../images/navbar/logo/letter-l.svg';
import LetterO from '../../../images/navbar/logo/letter-o.svg';
import LetterV from '../../../images/navbar/logo/letter-v.svg';
import LetterE from '../../../images/navbar/logo/letter-e.svg';
import LetterI from '../../../images/navbar/logo/letter-i.svg';
import LetterT from '../../../images/navbar/logo/letter-t.svg';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      className: trigger ? 'scrolling' : '',
    });
};

const Navbar = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const logoLetters = [LetterO, LetterV, LetterE, LetterI, LetterT];

  const languages = ['English', 'Romanian', 'Mongolian'];
  const navItems = [
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Event ticketing',
        link: '/event-ticketing'
    },
    {
        name: 'Registration',
        link: '/registration'
    },
  ];

  const handleCurrentLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  const navItemsRenderer = (
    <NavbarStyledList>
        {navItems.map(({ name, link }) => (
            <NavbarStyledListItem key={name}>
                <Link href={link} key={name}>
                    <NavbarStyledListItemText variant='subtitle2' > { name } </NavbarStyledListItemText>
                </Link>
            </NavbarStyledListItem>
        ))}
        <ListItem>
        <FormControl fullWidth>
          <NavbarStyledSelect
            id="language-switcher"
            value={currentLanguage}
            onChange={handleCurrentLanguageChange}
            variant="standard"
            disableUnderline
            IconComponent={KeyboardArrowDown}
          >
            {languages.map((language) => (
              <MenuItem disableRipple key={language} value={language}>
                <Typography variant='subtitle2'>{language}</Typography>
              </MenuItem>
            ))}
          </NavbarStyledSelect>
        </FormControl>
        </ListItem>
    </NavbarStyledList>
  );
  
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  
  const mobileContent = (
    <>
        <NavbarStyledMenuIcon onClick={() => toggleDrawer(true)} />
        <Drawer
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
          anchor='right'
        >
            {navItemsRenderer}
        </Drawer>
    </>
  );

  return (
    <Box>
        <ElevationScroll {...props}>
            <NavbarStyledAppBar component="nav" position="sticky" >
                <NavbarStyledToolbar disableGutters>
                    <Link to='/'>
                        <NavbarStyledLogoContainer>
                            <NavbarStyledLogoLetter src={LetterL} alt='logo-letter'/>
                            <Box>
                              {logoLetters.map((letter) => (
                                <NavbarStyledLogoLetter key={letter} src={letter} alt='logo-letter'/>
                              ))}
                            </Box>
                        </NavbarStyledLogoContainer>
                    </Link>
                    { isDesktop ? navItemsRenderer : mobileContent }
                </NavbarStyledToolbar>
            </NavbarStyledAppBar>
        </ElevationScroll>
    </Box>
  )
}

export default Navbar