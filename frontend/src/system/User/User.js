import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {/*LocalStorage, */SessionStorage} from 'system/Storage/Storage'

function User() {
    
    function logoutAction() {
        if(!checkLogin()) {
            alert("로그인 정보가 없습니다.");
            return false;
        }
        SessionStorage.removeItem('token');
        return true;
    }

    function checkLogin() {
        const token = SessionStorage.getItem('token');
        if(token === null || token === '') {
            return false;
        }
        const uid = SessionStorage.getItem('uid');
        if(uid === null || uid === '') {
            return false;
        }
        return true;
    }

    function getUserInfoAction() {
        if(!checkLogin()) {
            alert("로그인 정보가 없습니다.");
            return false;
        }
        
        const uid = SessionStorage.getItem('uid');
        
        axios({
            method: 'get',
            url:`http://localhost:8080/users/${uid}`,
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
    
    return null;
}

function useUserInfo() {
    const [state, setState] = useState({
        uid: '',
        name: '',
        token: '',
        avatarSrc: '',
    });
    
    setState({
        uid: SessionStorage.getItem('uid'),
        name: SessionStorage.getItem('name'),
        token: SessionStorage.getItem('token'),
        avatarSrc: SessionStorage.getItem('avatarSrc'),
    });
    
    return [state, setState];
}

export {User as User, useUserInfo as useUserInfo};