import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Link,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import { useStyles } from './styles'
import { MenuIcon } from './';

export default function ChildMenuItem(props) {
    const {itemText, icon, url} = props;
    const classes = useStyles();
    
    function handleClick(url) {
    }
    
    return (
        <div>
            <ListItem button onClick={() => {handleClick(url)}}>
                <ListItemIcon>
                    <MenuIcon knd={icon} />
                </ListItemIcon>
                <ListItemText primary={itemText} className={classes.listItemText}/>
            </ListItem>
        </div>
    );
}