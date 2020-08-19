import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import { useStyles } from './globalStyles'

function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <main>
                <Container maxWidth="lg">
                    testtwaetasetase
                </Container>
            </main>
        </div>
    );
}

export default Main;
