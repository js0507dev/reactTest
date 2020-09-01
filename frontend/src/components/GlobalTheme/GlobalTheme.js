import React from 'react';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const GlobalTheme = createMuiTheme({
    palette: {
        primary: {
            light: "#9FA8DA",
            main: "#3949AB",
            dark: "#283593",
            contrastText: "#000000",
        },
        secondary: {
            light: '#FF8A33',
            main: '#FF6D00',
            dark: '#FA6700',
            contrastText: '#FFFFFF',
        },
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
        },
        grayScale: grey,
        indigoScale: indigo,
        redScale: red,
    },
});

const GlobalThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={GlobalTheme}>{children}</MuiThemeProvider>
);

export default GlobalThemeProvider;