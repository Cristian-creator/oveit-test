import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const AboutVendorBanner = styled(Box)(({ theme, image }) => ({
    background: theme.palette.white,
    boxShadow: theme.palette.boxShadowCard,
    height: '320px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
        height: '280px',
    },
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        height: 'fit-content',
        padding: '4px',
        textAlign: 'left',
        justifyContent: 'flex-start',
        borderTopLeftRadius: '100px',
        borderBottomLeftRadius: '100px',
    },
}));

export const AboutVendorImage = styled(Box)(({ theme, image }) => ({
    height: '108px',
    width: '108px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}));

export const AboutVendorData = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '550px',
        marginLeft: '16px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '643px',
    },
}));

export const AboutVendorDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutralGrey,
    [theme.breakpoints.up('md')]: {
        marginTop: '8px'
    },
}));

export const AboutVendorContact = styled(Button)(({ theme }) => ({
    textTransform: 'initial',
    padding: '6px 16px',
    fontSize: '14px',
    color: theme.palette.lightBlue,
    lineHeight: '20px',
    // in Figma it is used another blue color
    // is expected to have 3 different blue colors?  
    borderColor: theme.palette.lightBlue,
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: '16px',
        right: '16px',
    },
}));
