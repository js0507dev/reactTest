import React from 'react';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const GlobalTheme = createMuiTheme({
    palette: {
        primary: {
            light: "#9FA8DA",
            main: "#3949AB",
            dark: "#283593",
            contrastText: "#FFFFFF",
        },
        secondary: {
            light: '#FF8A33',
            main: '#FF6D00',
            dark: '#FA6700',
            contrastText: '#000000',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#000000',
        },
    },
});

const GlobalThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={GlobalTheme}>{children}</MuiThemeProvider>
);

export default GlobalThemeProvider;