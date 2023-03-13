import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const SectionContainer = styled(Box)(({ theme }) => ({
    padding: '16px 24px',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        padding: '22px 48px',
        maxWidth: '1344px',
    }
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: '16px',
    [theme.breakpoints.up('md')]: {
        marginBottom: '22px',
    }
}));

export const SectionLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    '& svg': {
        color: theme.palette.darkBlue,
    },
    '& h6': {
        marginLeft: '18px',
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: '22px',
    },
}));
