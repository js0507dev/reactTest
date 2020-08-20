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
import { green, red, blue, black } from '@material-ui/core/colors';

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
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon style={{ color: blue[400] }} />
                    </ListItemIcon>
                    <ListItemText primary="베스트" color="primary" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <BookIcon style={{ color: green[500] }} />
                    </ListItemIcon>
                    <ListItemText primary="전체게시글" color="primary" />
                </ListItem>
            </List>
            {open &&
                <TextField
                    id="searchField"
                    label="Search..."
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
