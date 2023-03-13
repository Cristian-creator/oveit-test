import { Box, Select, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const TicketSalePanelContainer = styled(Box)(({ theme }) => ({
    boxShadow: theme.palette.boxShadowPanel,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        width: '656px',
    }
}));

export const TSPHeader = styled(Box)(({ theme }) => ({
    background: theme.palette.neutralGrey2,
    padding: '16px 24px',
    borderBottom: `1px solid ${theme.palette.darkGrey}`,
}));

export const TSPHeaderInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& > div': {
        marginBottom: '0px',
        '&:nth-of-type(2)': {
            marginLeft: '31px',
        },
    },
}));

export const TSPTitle = styled(Typography)(({ theme }) => ({
    marginTop: '4px',
}));

export const TSPContent = styled(Box)(({ theme }) => ({
    background: theme.palette.white,
}));


export const TicketSaleRow = styled(Box)(({ theme }) => ({
    padding: '12px',
    borderBottom: `1px solid ${theme.palette.darkGrey}`,
}));

export const TicketSaleContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 12px',
}));

export const TicketSaleEndDate = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    background: theme.palette.white,
    color: theme.palette.neutralGrey,
    lineHeight: '20px',
    fontWeight: '500',
}));

export const TicketSalePriceContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    width: '96px',
}));


export const TicketSaleFee = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutralGrey,
    marginLeft: '4px',
    fontWeight: '400',
}));

export const TicketSaleSelect = styled(Select)(({ theme }) => ({
   fontSize: '14px',
   color: theme.palette.blueDark,
   padding: '8px 12px',
   '& > div': {
      width: '32px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
   }
}));

export const TicketSaleAddons = styled(Box)(({ theme }) => ({
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 12px 0px',
    background: theme.palette.neutralGrey2,
}));

export const TicketSaleAddonsHeader = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '16px'
}));

export const TicketSaleAddonsHeaderTitle = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& svg': {
        marginLeft: '4px',
        fontSize: '16px',
        // custom because figma shows the wrong color
        color: 'rgba(0, 0, 0, 0.4)',
    }
}));

export const TicketSaleAddonsIncluded = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.darkGrey,
    padding: '8px',
    borderRadius: '4px',
    '& > p': {
        marginRight: '2px',
    },
    '& > svg': {
        color: theme.palette.lightGreen,
        fontSize: '16px',
        marginRight: '6px',
    }
}));

export const TicketSaleAddonsIncludedLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.lightGrey,
}));

export const TicketSaleAddonsRows = styled(Box)(({ theme }) => ({
    width: '100%',
    '& > div': {
        borderTop: `1px solid ${theme.palette.darkGrey}`,
        padding: '12px 0px',
    }
}));

export const TicketSaleTotal = styled(Box)(({ theme }) => ({
    background: theme.palette.neutralGrey2,
    padding: '12px'
}));

export const TicketSaleTotalRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
    borderBottom: `1px solid ${theme.palette.darkGrey}`,
}));

export const TicketSaleTotalBottom = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
    borderBottom: `1px solid ${theme.palette.darkGrey}`,
}));