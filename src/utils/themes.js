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
            main: '#141414'
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000B2'
        }
    }
});

export const THEMES = {theme};
