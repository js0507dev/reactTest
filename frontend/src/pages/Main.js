import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import { useStyles } from './globalStyles'

class Main extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="root">
                <main>
                    <div className={classes.headerSpacer} />
                    <Container maxWidth="lg">
                        testtwaetasetase
                    </Container>
                </main>
            </div>
        );
    }
}

export default withStyles(useStyles)(Main);
