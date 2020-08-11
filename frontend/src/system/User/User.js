import React from 'react'

import Storage from '../Storage/Storage'

class User extends React.Component {
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
    onLogin(props) {
        if(!props.id || props.id == '') {
            alert("아이디를 입력해주세요.");
        }
        if(!props.password || props.password == '') {
            alert("비밀번호를 입력해주세요.");
        }
        const params = {
            uid: props.id,
            password: props.password
        };
        
        fetch("http://localhost:9090/users/signin",
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(params)
        )
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    id: result.uid,
                });
            },
            (error) => {
            }
        )
    }
    onLogout() {
        this.setState({
            isLoggedin: false,
            id: '',
            name: '',
            avatarSrc: '',
            token: '',
        });
    }
    render() {
        return(
        );
    }
}

export default User;