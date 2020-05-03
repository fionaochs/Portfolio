import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        common: {
            teal: {
                // main: '#289694', //teal original
                // main: '#0aa09e', //medium light blue
                main: '#229c9a', //medium light teal
                // main: 'linear-gradient(90deg, #0B463E 50%, #2CA5A3 50%)', //soft sea foam
            },
            blue: {
                main: '#0f3568' // dark blue
            },
            white: {
                main: '#f0f8ff',
            }
        },
        primary: {
            main: '#0f3568' //dark blue
        },
        secondary: {
            main: '#F0F8FF', //white
        },
    },
    typography: {
        fontFamily: 'Volkkorn',
    },
    overrides: {
        MuiCssBaseline: {
        '@global': {
            '@font-face': ['Volkkorn'],
        },
        },
    }
});