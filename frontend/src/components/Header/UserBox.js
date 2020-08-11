import React, { Component } from 'react';
import InputIcon from '@material-ui/icons/Input';
import Avatar from '@material-ui/core/Avatar';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedin: false,
            avatarSrc: '',
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
        const avatarSrc = this.state.avatarSrc;
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
    };
    handleLogoutClick() {
        alert('test222');
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
