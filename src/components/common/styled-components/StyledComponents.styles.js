import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
