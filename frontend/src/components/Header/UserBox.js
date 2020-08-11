import React, { Component } from 'react';
import InputIcon from '@material-ui/icons/Input';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

//import User from '../../system/User/User';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedin: false,
            userInfo: {
                id: '',
                name: '',
                avatarSrc: '',
                token: '',
                roles: [],
            },
        };
    }
    
    renderGuestGreeting() {
        return (
            <InputIcon
                onClick={this.handleLoginClick}
            />
        );
    };
    renderUserGreeting() {
        let avatar = null;
        const avatarSrc = this.state.userInfo.avatarSrc;
        if(avatarSrc == "") {
            avatar = (
                <Avatar
                    onClick={this.handleLogoutClick}
                >T</Avatar>
            );
        } else {
            avatar = (
                <Avatar
                    alt="T"
                    src="/public/images/avatar/1.jpg"
                    onClick={this.handleLogoutClick}
                ></Avatar>
            );
        }
        return avatar;
    };
    handleLoginClick() {
        alert('test111');
        
        let testObj = new Object();
        testObj.uid = "test1";
        testObj.password = "test1";
        
        const formData = new FormData();
        for(const name in testObj) {
            formData.append(name,testObj[name]);
        }
        
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
                let newUserInfo = this.state.userInfo;
                
                const decodeToken = userToken.split('\.');
                let resInfo = JSON.parse(window.atob(decodeToken[1]));
                
                newUserInfo.token = userToken;
                newUserInfo.id = resInfo.sub;
                newUserInfo.roles = resInfo.roles;
                
                this.setState({
                    userInfo: newUserInfo,
                    isLoggedin: true
                });
            }
        )
        .catch(
            (error) => {
                alert("error test + " + error);
            }
        );
    };
    handleLogoutClick() {
        alert('test222');
        this.setState({
            userInfo: {
                id: '',
                name: '',
                avatarSrc: '',
                token: '',
                roles: [],
            },
            isLoggedin: false
        });
    };
    render() {
        const isLoggedin = this.state.isLoggedin;
        let userBox = null;
        if(isLoggedin) {
            userBox = this.renderUserGreeting();
        } else {
            userBox = this.renderGuestGreeting();
        }
        
        return (
            <div>
                {userBox}
            </div>
        );
    }
}

export default UserBox;
