import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';

import GlobalThemeProvider from 'components/GlobalTheme/GlobalTheme';
import { useStyles } from 'pages/globalStyles'
import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import { Main, Login } from 'pages';
import AuthRoute from './AuthRoute';
import * as User from 'system/User/User';
import { useConstructor } from 'utils';

function App(props) {
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const isLoggedin = user != null;
    
    useConstructor(() => {
        //최초실행
        const rememberUser = User.getLoginInfo();
        if(rememberUser) {
            setUser(rememberUser);
        }
    });
    
    const login = ({uid, password, remember}) => {
        User.login({uid, password, remember})
        .then( newUser => {
            setUser(newUser);
        },
        errMsg => {
            alert(errMsg);
        });
    };
    
    const logout = () => {
        User.logout();
        setUser(null);
    };
    
    const toggleSideMenu = () => {
        setOpen(!open);
    }
    
    const classes = useStyles();
    
    return (
        <GlobalThemeProvider>
            <div className={classes.root}>
                <CssBaseline />
                <Header
                    isLoggedin={isLoggedin}
                    user={user}
                    logout={logout}
                    open={open}
                    toggleSideMenu={toggleSideMenu}
                />
                <SideMenu open={open} toggleSideMenu={toggleSideMenu} />
                <main className={classes.content}>
                    <div className={classes.headerSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Route exact path="/" render={
                            props => (
                                <Main isLoggedin={isLoggedin} logout={logout} {...props} />
                            )
                        }/>
                        <Route path="/login" render={
                            props => (
                                <Login isLoggedin={isLoggedin} login={login} {...props} />
                            )
                        }/>
                    </Container>
                </main>
            </div>
        </GlobalThemeProvider>
    );
}

export default App;
