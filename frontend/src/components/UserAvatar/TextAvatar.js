import React from 'react';
import clsx from 'clsx';

import { Avatar, Typography } from '@material-ui/core';

import { useStyles } from './styles';

export default function TextyAvatar(props) {
    const {firstText, nickname, size, clickEvent} = props;
    const classes = useStyles();
    
    return (
        <div className={classes.avatarWrap}>
            <Avatar
                onClick={clickEvent}
                className={clsx(
                    classes.avatar,
                    (size === 'small') && classes.smallAvatar,
                    (size === 'large') && classes.largeAvatar
                )}
            >
                {firstText}
            </Avatar>
            <Typography
                variant='body1'
                className={clsx(
                    classes.nickName,
                    (size === 'small') && classes.smallNickName,
                    (size === 'large') && classes.largeNickName
                )}
            >
                {nickname}
            </Typography>
        </div>
    );
}