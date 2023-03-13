import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const EventCardsContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        columnGap: '8px',
    },
    [theme.breakpoints.up('md')]: {
        columnGap: '12px',
    },
    [theme.breakpoints.up('lg')]: {
        columnGap: '24px',
    }
}));

export const EventCardContainer = styled(Grid)(({ theme }) => ({
    maxWidth: '318px',
    minWidth: '318px',
    margin: '0 auto',
    background: theme.palette.white,
    boxShadow: theme.palette.boxShadowCard,
    marginBottom: '24px',
}));

export const EventCardImage = styled(Box)(({ image }) => ({
    height: '148px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}));

export const EventCardData = styled(Box)({
    padding: '16px',
    height: '124px',
});

export const EventCardCategory = styled(Typography)({
    textTransform: 'uppercase',
});

export const EventCardTitle = styled(Typography)({
    marginTop: '4px',
    marginBottom: '12px',
    height: '48px',
});

export const EventCardDate = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    '& p, & svg': {
        color: theme.palette.neutralGrey,
    },
    '& svg': {
        fontSize: '12px',
        width: '14px',
        paddingRight: '8px',
    }
}));

export const EventCardLocation = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.neutralGrey,
    '& p, & svg': {
        color: theme.palette.neutralGrey,
    },
    '& svg': {
        fontSize: '14px',
        paddingRight: '8px',
    }
}));

export const EventCardUserActions = styled(Box)(({ theme }) => ({
    height: '52px',
    paddingLeft: '8px',
    display: 'flex',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.darkGrey}`,
    borderBottom: `1px solid ${theme.palette.darkGrey}`,
    '& > button:nth-of-type(2)': {
        marginLeft: '33px',
    },
    '& svg': {
        fontSize: '18px',
        color: theme.palette.darkBlue,
        marginRight: '5px',    }
}));

export const EventCardBuyTickets = styled(Box)(({ theme }) => ({
    height: '55px',
    padding: '0px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button > span': {
        color: theme.palette.white,
        textTransform: 'initial',
        lineHeight: '20px',
    }
}));

export const EventCardBTicketsRange = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
        fontSize: '16px',
        marginRight: '10px',
    },
});
