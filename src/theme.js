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
            red: {
                main: '#f44336' // darkred
            },
            white: {
                main: '#f0f8ff',
            },
            green: {
                main: 'rgb(20,146,124)',
            }
        },
        primary: {
            main: '#0f3568' //dark blue
        },
        secondary: {
            // main: '#F0F8FF', //white
            main: '#FFF', //white
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