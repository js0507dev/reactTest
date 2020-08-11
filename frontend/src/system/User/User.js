import React, { useState } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false,
            id: '',
            name: '',
            avatarSrc: '',
            token: '',
        };
    }
    
    onLogin: (uid, password) => {
        if(uid && uid === '') {
            alert("아이디를 입력해주세요.");
        }
        if(password && password === '') {
            alert("비밀번호를 입력해주세요.");
        }
        const params = JSON.stringify({
            uid: uid,
            password: password
        });
        
        fetch("http://localhost:9090/users/signin", {
            method: 'POST',
            mode: 'no-cors',
            body: params
        })
        .then(res => res.json())
        .then(
            (result) => {
                let test = atob(result.data);
                console.log(test);
            },
            (error) => {
            }
        )
    }
    onLogout: () => {
        setIsLoggedin(false);
        setInfo({
            id:'',
            name:'',
            avatarSrc:'',
            token:'',
        });
    }
};

export default User;