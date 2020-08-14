import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
    Container,
    Avatar,
    Typography,
    TextField,
    FormControlLabel,
    Button,
    Checkbox,
    Link,
    Grid
    } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useStyles as GlobalStyles } from 'pages/globalStyles'
import { useStyles } from './styles'
import Header from 'components/Header/Header';
import * as User from 'system/User/User';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = {
            isUidError: false,
            uidErrorMsg: '',
            isPasswordError: false,
            passwordErrorMsg: '',
        };
    }
    handleLoginClick() {
        if(!this.validation()) {
            if(!this.validation('uid')) this.setUidError();
            if(!this.validation('password')) this.setPasswordError();
            return false;
        }
        let formData = {};
        formData.uid = document.getElementById('uid').value;
        formData.password = document.getElementById('password').value;
        
        User.loginAction(formData);
    }
    handleTextBlur(e) {
        const check = this.validation(e.target.id);
        if(!check && e.target.id === "uid") {
            this.setUidError();
        } else if(!check && e.target.id === "password") {
            this.setPasswordError();
        } else {
            this.initErrorCheck();
        }
    }
    setUidError() {
        this.setState({
            isUidError: true,
            uidErrorMsg: '아이디는 이메일형식(email@example.com) 입니다.',
        });
    }
    setPasswordError() {
        this.setState({
            isPasswordError: true,
            passwordErrorMsg: '필수값입니다.',
        });
    }
    initErrorCheck() {
        this.setState({
            isUidError: false,
            uidErrorMsg: '',
            isPasswordError: false,
            passwordErrorMsg: '',
        });
    }
    validation(gbn) {
        let res = false;
        if(gbn) {
            if(gbn === 'uid') {
                res = this.validationUid();
            }
            if(gbn === 'password') {
                res = this.validationPassword();
            }
        } else {
            res = (this.validationUid() && this.validationPassword())
        }
        return res;
    }
    validationUid() {
        const uid = document.getElementById('uid').value;
        return uid.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
    }
    validationPassword() {
        const password = document.getElementById('password').value;
        return !(password === '')
    }
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <Header />
                <main className={classes.main}>
                    <div className={classes.headerSpacer} />
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                    <div>
                        <TextField
                            error={this.state.isUidError}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="uid"
                            label="아이디"
                            name="uid"
                            autoComplete="email"
                            helperText={this.state.isUidError ? this.state.uidErrorMsg : "이메일형식(email@example.com)"}
                            onBlur={(e) => this.handleTextBlur(e)}
                            autoFocus
                        />
                        <TextField
                            error={this.state.isPasswordError}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            helperText={this.state.isPasswordError ? this.state.passwordErrorMsg : ""}
                            onBlur={(e) => this.handleTextBlur(e)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" fontSize="small" />}
                            label={<Typography variant="body2" color="primary">로그인 상태 유지</Typography>}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleLoginClick}
                        >
                            로그인
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link component={RouterLink} variant="body2" to="/login">
                                    비밀번호찾기
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} variant="body2" to="/login">
                                    회원가입
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </main>
            </Container>
        );
    }
}

export default withStyles(GlobalStyles)(withStyles(useStyles)(Login));