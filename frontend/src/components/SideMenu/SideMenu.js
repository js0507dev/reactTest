import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import {
    Typography,
    Link,
    Drawer,
    Divider,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useStyles } from './styles'

function SideMenu(props) {
    const classes = useStyles();
    const { open, toggleSideMenu } = props;
    
    return (
        <Drawer
            variant="permanent"
            open={open}
            classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={toggleSideMenu}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            {open &&
                <TextField
                    variant="filled"
                    id="searchField"
                    label="Search..."
                    fullWidth
                />
            }
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideMenu;
