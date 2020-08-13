import React from 'react';
import axios from 'axios';

import {LocalStorage, SessionStorage} from '../Storage/Storage'

export function loginAction(props, callback) {
    const uid = props.uid;
    const password = props.password;
    
    if(uid && uid === '') {
        alert("아이디를 입력해주세요.");
    }
    if(password && password === '') {
        alert("비밀번호를 입력해주세요.");
    }
    
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
            const userToken = result.data.data;
            let newUserInfo = new Object();
            
            const decodeToken = userToken.split('\.');
            let resInfo = JSON.parse(window.atob(decodeToken[1]));
            
            newUserInfo.token = userToken;
            newUserInfo.id = resInfo.sub;
            newUserInfo.roles = resInfo.roles;
            newUserInfo.isLoggedin = true;
            
            SessionStorage.setObjectItem('userInfo',newUserInfo);
            callback(newUserInfo);
        }
    )
    .catch(
        (error) => {
            alert("error test + " + error);
        }
    );
}

export function logoutAction() {
    if(!checkLogin()) {
        alert("먼저 로그인을 해주세요.");
        return false;
    }
    SessionStorage.removeItem('userInfo');
}

export function getLoginUser() {
    if(checkLogin()) {
        return SessionStorage.getObjectItem('userInfo');
    }
    return null;
}

export function checkLogin() {
    const userInfo = SessionStorage.getObjectItem('userInfo');
    if(userInfo.isLoggedin) {
        return true;
    }
    return false;
}

export function getUserInfoAction() {
    const userInfo = getLoginUser();
    if(!userInfo) {
        return false;
    }
    
    axios({
        method: 'get',
        url:"http://localhost:8080/users/${userInfo.id}",
        headers: {
            'Context-Type':'multipart/form-data;charset=utf-8',
            'Access-Control-Allow-Origin':'*'
        }
    })
    .then(
        (result) => {
            // TODO: 사용자정보 가져오기
            /*const userToken = result.data.data;
            let newUserInfo = SessionStorage.getObjectItem('userInfo');
            
            const decodeToken = userToken.split('\.');
            let resInfo = JSON.parse(window.atob(decodeToken[1]));
            
            newUserInfo.token = userToken;
            newUserInfo.id = resInfo.sub;
            newUserInfo.roles = resInfo.roles;
            newUserInfo.isLoggedin = true;
            
            SessionStorage.setObjectItem('userInfo',newUserInfo);*/
        }
    )
    .catch(
        (error) => {
            alert("error test + " + error);
        }
    );
}