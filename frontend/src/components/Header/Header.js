import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';

import { useStyles } from './styles';
import UserAvatar from 'components/UserAvatar/UserAvatar';

function Header(props) {
    const classes = useStyles();
    const { isLoggedin, logout, open, toggleSideMenu } = props;
    
    function handleLogoutClick() {
        logout();
    }
    function renderUser() {
        return (
            <UserAvatar
                logout={handleLogoutClick}
            />
        );
    }
    
    function renderGuest() {
        return (
            <Link color="inherit" component={RouterLink} to="/login">
                <InputIcon/>
            </Link>
        );
    }
    
    let userBox = null;
    if(isLoggedin) {
        userBox = renderUser();
    } else {
        userBox = renderGuest();
    }
    
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar className={clsx(classes.toolbar)} >
                <IconButton
                    aria-label="menu"
                    edge="start"
                    onClick={toggleSideMenu}
                >
                    <MenuIcon
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    noWrap
                    className={classes.title}
                >
                    <Link color="inherit" component={RouterLink} to="/">
                        TEST
                    </Link>
                </Typography>
                {userBox}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
