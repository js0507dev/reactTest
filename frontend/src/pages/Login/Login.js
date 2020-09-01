import React, { useState } from 'react'
import { Link as RouterLink, Redirect } from 'react-router-dom';
import {
    Container,
    Avatar,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Button,
    Checkbox,
    Link,
    Grid
    } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useStyles } from './styles'
import * as Constants from './Constants';

function Login(props) {
    const [uidState, setUidState] = useState({
        isError: false,
        errorMsg: '',
    });
    const [pwdState, setPwdState] = useState({
        isError: false,
        errorMsg: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    //const login = props.login;
    
    function handleLoginClick() {
        const validUid = validationUid();
        const validPwd = validationPassword();
        if(validUid !== '' || validPwd !== '') {
            setUidState({
                isError: (validUid !== ''),
                errorMsg: validUid,
            });
            setPwdState({
                isError: (validPwd !== ''),
                errorMsg: validPwd,
            });
            return false;
        }
        
        const uid = document.getElementById('uid').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        props.login({uid, password, remember});
    }
    function handleTextBlur(e) {
        if(e.target.id === "uid") {
            const validUid = validationUid();
            setUidState({
                isError: (validUid !== ''),
                errorMsg: validUid,
            });
        }
        if(e.target.id === "password") {
            const validPwd = validationPassword();
            setPwdState({
                isError: (validPwd !== ''),
                errorMsg: validPwd,
            });
        }
    }
    function validationUid() {
        const uid = document.getElementById('uid').value;
        const uidRequireChk = (uid !== '');
        if(!uidRequireChk) {
            return Constants.ERROR_MSG.uidRequire;
        }
        const uidRuleChk = uid.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
        if(!uidRuleChk) {
            return Constants.ERROR_MSG.uidRule;
        }
        return '';
    }
    function validationPassword() {
        const password = document.getElementById('password').value;
        const pwdRequireChk = (password !== '');
        if(!pwdRequireChk) {
            return Constants.ERROR_MSG.passwordRequire;
        }
        return '';
    }
    function toggleVisibility() {
        const show = !showPassword;
        setShowPassword(show)
    }
    
    const classes = useStyles();
    
    const { from } = props.location.state || { from: { pathname: "/" } };
    if (props.isLoggedin) return (
        <Redirect to={from} />
    );
    
    return (
        <Container component="main" maxWidth="xs">
            <main className={classes.main}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <div>
                    <TextField
                        error={uidState.isError}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="uid"
                        label="아이디"
                        name="uid"
                        autoComplete="email"
                        helperText={uidState.isError ? uidState.errorMsg : ""}
                        onBlur={(e) => handleTextBlur(e)}
                        autoFocus
                        InputProps={{
                            className: classes.textField
                        }}
                    />
                    <TextField
                        error={pwdState.isError}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        helperText={pwdState.isError ? pwdState.errorMsg : ""}
                        onBlur={(e) => handleTextBlur(e)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            className: classes.textField
                        }}
                        className={classes.textField}
                    />
                    <FormControlLabel
                        control={<Checkbox name="remember" id="remember" value="remember" color="primary" fontSize="small" />}
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

export default Login;