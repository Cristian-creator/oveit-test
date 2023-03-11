import { AppBar, Box, List, ListItem, Select, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/system';

export const NavbarStyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  boxShadow: theme.palette.boxShadow,
}));

export const NavbarStyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const NavbarStyledLogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 24px',
  [theme.breakpoints.up('md')]: {
    padding: '20px 48px',
  }
}));

export const NavbarStyledLogoLetter = styled('img')(({ theme }) => ({
  paddingRight: '2px',
}));

export const NavbarStyledList = styled(List)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  padding: '16px 48px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const NavbarStyledListItem = styled(ListItem)(({ theme }) => ({
  '& a': {
    margin: '0 auto',
    color: theme.palette.darkBlue,
  },
  '& h6': {
    width: 'max-content',
  }
}));

export const NavbarStyledListItemText = styled(Typography)(({ theme }) => ({
  width: 'max-content',
}));

export const NavbarStyledSelect = styled(Select)(({ theme }) => ({
  width: '100px',
  textAlign: 'center',
  '#language-switcher': {
    backgroundColor: 'transparent',
  },
}));

export const NavbarStyledMenuIcon = styled(Menu)(({ theme }) => ({
  color: theme.palette.darkBlue,
  padding: '16px 24px',
  [theme.breakpoints.up('md')]: {
    padding: '20px 48px',
  }
}));
