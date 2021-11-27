import {createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        common: {
            teal: {
                // main: '#289694', //teal original
                // main: '#0aa09e', //medium light blue
                main: '#229c9a', //medium light teal
            },
            blue: {
                // main: '#0f3568' // dark blue
                // main: '#0a192f' // dark blue
                main: '#233554'
            },
            white: {
                // main: '#f0f8ff',
                main: '#ccd6f6'
            },
            green: {
                // main: 'rgb(20,146,124)',
                // #0b7d82 green from tree gradient
                // #64ffda green
                main: '#64ffda'
            },
            slate: {
                main: '#ccd6f6'
            }
        },
        primary: {
            main: '#233554' //dark blue
            // #0a192f navy
        },
        secondary: {
            // main: '#F0F8FF', //white
            main: '#ccd6f6', //white
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