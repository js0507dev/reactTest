import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalThemeProvider from 'components/GlobalTheme/GlobalTheme';
import { Main, Login } from 'pages';

class App extends Component {
    render() {
        return (
            <GlobalThemeProvider>
                <CssBaseline />
                <Route exact path="/" component={Main}/>
                <Route path="/login" component={Login}/>
            </GlobalThemeProvider>
        );
    }
}

export default App;
