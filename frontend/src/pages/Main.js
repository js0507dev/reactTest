import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import { useStyles } from './globalStyles'
import Header from 'components/Header/Header';

class Main extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="root">
                <Header />
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
