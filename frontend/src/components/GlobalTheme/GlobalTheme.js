import React from 'react';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const GlobalTheme = createMuiTheme({
    palette: {
        primary: {
            light: "#F25C05",
            main: "#023E73",
            dark: "#021859",
            text: "#F2F2F2",
        },
        secondary: {
            light: '#123',
            main: '#234',
            dark: '#345',
            tesxt: '#456',
        },
        grayScale: {
            100: "#1",
            200: "#2",
            300: "#3",
            400: "#4",
            500: "#5",
            600: "#6",
            700: "#7",
            800: "#8",
        },
    },
});

const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
);

export default GlobalThemeProvider;