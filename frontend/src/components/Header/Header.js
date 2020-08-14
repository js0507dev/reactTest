import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';

import { useStyles } from './styles'
import UserBox from './UserBox'

function Header() {
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar)}
        >
            <Toolbar className={clsx(classes.toolbar)}>
                <IconButton
                    aria-label="menu"
                    edge="start"
                    className={clsx(classes.menuButton)}
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
                <UserBox />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
