import { createTheme } from '@mui/material/styles';

export const themeBreakpoints = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export const themePalette = createTheme({
  palette: {
    white: '#FFFFFF',
    lightBlue: '#178AF5',
    darkBlue: '#050E26',
    lightGrey: '#878B99',
    neutralGrey: '#595D6B',
    neutralGrey2: '#F8F9FC',
    darkGrey: '#ECEEF3',
    lightGreen: '#37C93D',
    boxShadow: '0px 4px 13px 0px rgba(0,0,0,0.04);',
    boxShadowCard: '0px 4px 26px 0px rgba(0,0,0,0.02);',
    boxShadowPanel: '0px 4px 26px 0px rgba(0,0,0,0.04);',
  }
});

export const theme = createTheme({
  palette: {
    white: themePalette.palette.white,
    lightBlue: themePalette.palette.lightBlue,
    darkBlue: themePalette.palette.darkBlue,
    lightGrey: themePalette.palette.lightGrey,
    neutralGrey: themePalette.palette.neutralGrey,
    neutralGrey2: themePalette.palette.neutralGrey2,
    darkGrey: themePalette.palette.darkGrey,
    lightGreen: themePalette.palette.lightGreen,
    boxShadow: themePalette.palette.boxShadow,
  },
  typography: {
    fontFamily: [
      'Gilroy',
    ].join(','),
    subtitle1: {
      fontFamily: 'Gilroy',
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: '600',
      color: themePalette.palette.darkBlue,
      [themeBreakpoints.breakpoints.up('md')]: {
        fontSize: '24px',
      },
    },
    subtitle2: {
      fontFamily: 'Gilroy',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: '600',
      color: themePalette.palette.darkBlue,
      [themeBreakpoints.breakpoints.up('md')]: {
        fontSize: '16px',
      }
    },
    h2: {
      fontFamily: 'Gilroy',
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: '600',
      color: themePalette.palette.darkBlue,
      [themeBreakpoints.breakpoints.up('md')]: {
        fontSize: '20px',
      }
    },
    h3: {
      fontFamily: 'Gilroy',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
      color: themePalette.palette.darkBlue,
      [themeBreakpoints.breakpoints.up('md')]: {
        fontSize: '18px',
      }
    },
    body1: {
      fontFamily: 'Gilroy',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '600',
      color: themePalette.palette.darkBlue,
      [themeBreakpoints.breakpoints.up('md')]: {
        fontSize: '14px',
      }
    },
    body2: {
      fontFamily: 'Gilroy',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '600',
      color: themePalette.palette.lightBlue,
    },
    button: {
      fontFamily: 'Gilroy',
      color: themePalette.palette.darkBlue,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
    }
  },
});
