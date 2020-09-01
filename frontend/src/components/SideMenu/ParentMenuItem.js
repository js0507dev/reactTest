import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Collapse
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { useStyles } from './styles'
import { ChildMenuItem, MenuIcon } from './'

export default function ParentMenuItem(props) {
    const {parentInfo, childList} = props;
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    
    function handleParentClick() {
        if(childList.length > 0) {
            setOpen(!open);
        } else {
            //link
        }
    }
    
    return (
        <div>
            <ListItem button key={parentInfo.id} onClick={handleParentClick}>
                <ListItemIcon>
                    <MenuIcon knd={parentInfo.icon} />
                </ListItemIcon>
                <ListItemText primary={parentInfo.itemText} className={classes.listItemText}/>
                {(childList.length > 0
                    ? (open ? <ExpandLess /> : <ExpandMore />)
                    : null
                )}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {childList.map((child, index) => {
                    return (
                        <ChildMenuItem
                            itemText={child.itemText}
                            icon={child.icon}
                            url={child.url}
                        />
                    );
                })}
                </List>
            </Collapse>
        </div>
    );
}