import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { EventCardDate, EventCardLocation, EventCardUserActions } from './EventCard.styles';

export const EventDetailsContainer = styled(Box)(({ theme }) => ({
    padding: '12px',
    background: theme.palette.white,
    [theme.breakpoints.up('md')]: {
        padding: '24px',
    },
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
    },
}));

export const EventDetailsImage = styled(Box)(({ theme, image }) => ({
    width: '100%',
    height: '200px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
        height: '340px',
    },
    [theme.breakpoints.up('lg')]: {
        minWidth: '50%',
        height: '386px',
    },
}));

export const EventDetailsInfoContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '24px',
        minWidth: 'calc(50% - 24px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
}));

export const EventDetailsInfo = styled(Box)(({ theme }) => ({
    marginTop: '12px',
    '& > div > svg': {
        fontSize: '16px',
    }
}));

export const EventDetailsDate = styled(EventCardDate)(({ theme }) => ({
    margin: '12px 0px 0px 0px',
    '& svg, & h6': {
        color: theme.palette.neutralGrey,
    },
    [theme.breakpoints.up('md')]: {
        marginTop: '16px 0px 0px 0px',
    },
}));

export const EventDetailsLocation = styled(EventCardLocation)(({ theme }) => ({
    marginTop: '8px',
    '& svg, & h6': {
        color: theme.palette.neutralGrey,
    },
    [theme.breakpoints.up('md')]: {
        marginTop: '12px',
    },
}));

export const EventDetailsDescription = styled(Typography)(({ theme }) => ({
    marginTop: '16px',
    color: theme.palette.neutralGrey,
    [theme.breakpoints.up('md')]: {
        marginTop: '24px',
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '624px',
    },
}));

export const EventDetailsBottom = styled(Box)(({ theme }) => ({
    marginTop: '32px',
    paddingTop: '12px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.palette.darkGrey}`,
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
        paddingTop: '16px',
    },
}));

export const EventDetailsBuyTickets = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& button': {
        padding: '10px 16px',
    },
    '& button p': {
        color: theme.palette.white,
        textTransform: 'initial',
    },
    '& > div': {
        marginLeft: '18px',
    },
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
}));

export const EventDetailsUserActions = styled(EventCardUserActions)(({ theme }) => ({
    width: '100%',
    border: 'none',
    height: 'auto',
    marginTop: '8px',
    [theme.breakpoints.up('sm')]: {
        marginTop: '0px',
        width: 'auto',
    },
}));

