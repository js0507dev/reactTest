import React, { useState } from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import { Avatar, Link } from '@material-ui/core';

import { useStyles } from './styles';
import * as User from 'system/User/User';

function Header(props) {
    const classes = useStyles();
    const { isLoggedin, user, logout, open, toggleSideMenu } = props;
    const [userInfo,setUserInfo] = useState({
        avatarUrl: '',
        nickname: '',
        uid: '',
    });
    
    function handleLogoutClick() {
        logout();
    }
    function renderUser() {
        let avatar = null;
        let nickname = '';
        User.getUserInfo().then( myInfo => {
            setUserInfo({
                avatarUrl: myInfo.avatarUrl,
                nickname: myInfo.nickname,
                uid: myInfo.uid,
            });
        },
        errMsg => {
            alert(errMsg);
            return false;
        });
        
        return (
            <Avatar
                src={user.avatarUrl}
                onClick={handleLogoutClick}
            >{(userInfo.avatarUrl === '') && userInfo.nickname.substring(0,1)}</Avatar>
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
            <Toolbar className={clsx(classes.toolbar)} >
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
