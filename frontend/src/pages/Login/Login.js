import React, { Component, useState } from 'react'
import { Link as RouterLink, Redirect } from 'react-router-dom';
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
import axios from 'axios';

import { useStyles as GlobalStyles } from 'pages/globalStyles'
import { useStyles } from './styles'
import {/*LocalStorage, */SessionStorage} from 'system/Storage/Storage'
import User from 'system/User/User';

function Login(props) {
    const [state, setState] = useState({
        isUidError: false,
        uidErrorMsg: '',
        isPasswordError: false,
        passwordErrorMsg: '',
    });
    //const login = props.login;
    
    function handleLoginClick() {
        if(!validation()) {
            if(!validation('uid')) setUidError();
            if(!validation('password')) setPasswordError();
            return false;
        }
        
        const uid = document.getElementById('uid').value;
        const password = document.getElementById('password').value;
        props.login({uid, password});
    }
    function handleTextBlur(e) {
        const check = validation(e.target.id);
        if(!check && e.target.id === "uid") {
            setUidError();
        } else if(!check && e.target.id === "password") {
            setPasswordError();
        } else {
            initErrorCheck();
        }
    }
    function setUidError() {
        setState({
            isUidError: true,
            uidErrorMsg: '아이디는 이메일형식(email@example.com) 입니다.',
        });
    }
    function setPasswordError() {
        setState({
            isPasswordError: true,
            passwordErrorMsg: '필수값입니다.',
        });
    }
    function initErrorCheck() {
        setState({
            isUidError: false,
            uidErrorMsg: '',
            isPasswordError: false,
            passwordErrorMsg: '',
        });
    }
    function validation(gbn) {
        let res = false;
        if(gbn) {
            if(gbn === 'uid') {
                res = validationUid();
            }
            if(gbn === 'password') {
                res = validationPassword();
            }
        } else {
            res = (validationUid() && validationPassword())
        }
        return res;
    }
    function validationUid() {
        const uid = document.getElementById('uid').value;
        return uid.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
    }
    function validationPassword() {
        const password = document.getElementById('password').value;
        return !(password === '')
    }
    
    const { classes } = props;
    
    const { from } = props.location.state || { from: { pathname: "/" } };
    if (props.isLoggedin) return (
        <Redirect to={from} />
    );
    
    return (
        <Container component="main" maxWidth="xs">
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
                        error={state.isUidError}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="uid"
                        label="아이디"
                        name="uid"
                        autoComplete="email"
                        helperText={state.isUidError ? state.uidErrorMsg : "이메일형식(email@example.com)"}
                        onBlur={(e) => handleTextBlur(e)}
                        autoFocus
                    />
                    <TextField
                        error={state.isPasswordError}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={state.isPasswordError ? state.passwordErrorMsg : ""}
                        onBlur={(e) => handleTextBlur(e)}
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
                        onClick={handleLoginClick}
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

export default withStyles(GlobalStyles)(withStyles(useStyles)(Login));