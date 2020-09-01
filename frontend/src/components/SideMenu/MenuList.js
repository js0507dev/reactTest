import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Link,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import BookIcon from '@material-ui/icons/Book';

import { useStyles } from './styles'
import { ParentMenuItem, ChildMenuItem } from './'

export default function MenuList(props) {
    const classes = useStyles();
    
    return (
        <List>
            <ParentMenuItem
                parentInfo={{id:0,itemText:'베스트',icon:'star'}}
                childList={[{itemText:'하위1',icon:'book',url:'http://naver.com'}]}
            />
            <ParentMenuItem
                parentInfo={{id:1,itemText:'전체게시글',icon:'book'}}
                childList={[]}
            />
        </List>
    );
}