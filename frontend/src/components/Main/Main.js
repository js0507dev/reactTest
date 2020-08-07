import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalThemeProvider from '../GlobalTheme/GlobalTheme';
import Header from '../Header/Header';

function Main() {
    return (
        <GlobalThemeProvider>
            <div className="root">
                <CssBaseline />
                <Header />
            </div>
        </GlobalThemeProvider>
    );
}

export default Main;
