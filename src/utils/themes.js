import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'TTSquares, EuclidCircularB'
    },
    palette: {
        mode: 'dark',
        background: {
            paper: '#212121',
            default: '#141414'
        },
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#1ac0ea'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(141,141,141,0.7)'
        },
        light: {
            secondary: 'rgba(26,192,234,0.15)'
        }
    },
    shape: {
        borderRadius: 0
    }
});

export const THEMES = {theme};
