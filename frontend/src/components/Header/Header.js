import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, Divider, TextField, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import { Avatar, Link } from '@material-ui/core';

import { useStyles } from './styles'

function Header(props) {
    const classes = useStyles();
    const { isLoggedin, user, logout, open, toggleSideMenu } = props;
    
    function handleLogoutClick() {
        logout();
    }
    function renderUser() {
        let avatar = null;
        const avatarSrc = user.avatarSrc;
        if(avatarSrc === "" || avatarSrc === null) {
            avatar = (
                <Avatar
                    onClick={handleLogoutClick}
                >T</Avatar>
            );
        } else {
            avatar = (
                <Avatar
                    alt="T"
                    src={user.avatarSrc}
                    onClick={handleLogoutClick}
                ></Avatar>
            );
        }
        return avatar;
    }
    
    function renderGuest() {
        return (
            <Link color="inherit" component={RouterLink} to="/login">
                <InputIcon/>
            </Link>
        );
    }
    
    let userBox = null;
    if(user && isLoggedin) {
        userBox = renderUser();
    } else {
        userBox = renderGuest();
    }
    
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar className={clsx(classes.toolbar)}>
                <IconButton
                    aria-label="menu"
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    onClick={toggleSideMenu}
                >
                    <MenuIcon />
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
