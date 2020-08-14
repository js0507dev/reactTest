import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import InputIcon from '@material-ui/icons/Input';
import { Avatar, Link } from '@material-ui/core';

import * as User from 'system/User/User';

class UserBox extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.changeUserInfo = this.changeUserInfo.bind(this);
        this.state = {
            userInfo: {}
        };
    }
    
    renderGuestGreeting() {
        return (
            <Link color="inherit" component={RouterLink} to="/login">
                <InputIcon/>
            </Link>
        );
    };
    renderUserGreeting() {
        let avatar = null;
        const avatarSrc = this.state.userInfo.avatarSrc;
        if(avatarSrc === "" || avatarSrc === null) {
            avatar = (
                <Avatar
                    onClick={this.handleLogoutClick}
                >T</Avatar>
            );
        } else {
            avatar = (
                <Avatar
                    alt="T"
                    src={this.state.userInfo.avatarSrc}
                    onClick={this.handleLogoutClick}
                ></Avatar>
            );
        }
        return avatar;
    };
    handleLoginClick() {
        alert('test111');
        
        let testObj = {};
        testObj.uid = "test1";
        testObj.password = "test1";
        
        User.loginAction(testObj,this.changeUserInfo);
    };
    handleLogoutClick() {
        alert('test222');
        User.logoutAction();
        this.setState({
            userInfo: {}
        });
    };
    changeUserInfo(newUserInfo) {
        this.setState({
            userInfo: newUserInfo
        });
    }
    render() {
        const userInfo = this.state.userInfo;
        let userBox = null;
        if(userInfo && userInfo.isLoggedin) {
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
