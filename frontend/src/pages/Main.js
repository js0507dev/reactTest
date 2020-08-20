import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

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
