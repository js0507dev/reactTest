import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputIcon from '@material-ui/icons/Input';


class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedin: false,
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
        return (
            <Avatar
                alt=""
                src=""
                onClick={this.handleLoginClick}
            />
        );
    };
    handleLoginClick() {
        alert('test');
    };
    handleLogoutClick() {
        alert('test');
    };
    render() {
        const isLoggedin = this.state.isLoggedin;
        let userBox = null;
        if(isLoggedin) {
            userBox = null;
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
