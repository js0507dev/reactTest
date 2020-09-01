import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import {
    Link,
    Drawer,
    Divider,
    TextField,
    InputAdornment,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';

import { useStyles } from './styles';
import MenuList from './MenuList';

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
            <Divider />
            <MenuList />
            {open &&
                <TextField
                    id="searchField"
                    label="Search..."
                    className={classes.searchTextField}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            }
        </Drawer>
    );
}

export default SideMenu;
