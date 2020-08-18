import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

import GlobalThemeProvider from 'components/GlobalTheme/GlobalTheme';
import Header from 'components/Header/Header';
import { Main, Login } from 'pages';
import AuthRoute from './AuthRoute';
import { SessionStorage } from 'system/Storage/Storage';

function App() {
    const [user, setUser] = useState(null);
    const isLoggedin = user != null;
    
    const login = ({uid, password}) => {
        const formData = new FormData();
        formData.append("uid",uid);
        formData.append("password",password);
        
        axios({
            method: 'post',
            url:"http://localhost:8080/users/signin",
            data: formData,
            headers: {
                'Context-Type':'multipart/form-data;charset=utf-8',
                'Access-Control-Allow-Origin':'*'
            }
        })
        .then(
            (result) => {
                const success = result.data.success;
                if(success) {
                    const userToken = result.data.data;
                    const decodeToken = userToken.split('.');
                    let resInfo = JSON.parse(window.atob(decodeToken[1]));
                    
                    const newUser = {
                        id: resInfo.sub,
                        uid: uid,
                        roles: resInfo.roles,
                        token: userToken,
                    };
                    
                    SessionStorage.setObjectItem('user',newUser);
                    setUser(newUser);
                } else {
                    alert(`[${result.data.code}] : ${result.data.msg}`);
                }
            }
        )
        .catch(error => {
            alert(`[${error.response.data.code}] : ${error.response.data.msg}`);
        });
    };
    
    const logout = () => {
        alert("logout 했어요");
        setUser(null);
    };
    
    return (
        <GlobalThemeProvider>
            <CssBaseline />
            <Header isLoggedin={isLoggedin} user={user} logout={logout} />
            <Route exact path="/" render={
                props => (
                    <Main isLoggedin={isLoggedin} logout={logout} {...props} />
                )
            }/>
            <Route path="/login" render={
                props => (
                    <Login isLoggedin={isLoggedin} login={login} {...props} />
                )
            }/>
        </GlobalThemeProvider>
    );
}

export default App;
