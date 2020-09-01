import React, { useState, useEffect } from 'react';

import * as User from 'system/User/User';
import ImageAvatar from './ImageAvatar';
import TextAvatar from './TextAvatar';

export default function UserAvatar(props) {
    const [state, setState] = useState({
        avatarUrl: '',
        firstText: '',
        nickname: '',
        id: 0,
    });
    const {logout} = props;
    
    function handleLogoutClick() {
        logout();
    }
    
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const myInfo = await User.getUserInfo();
                const firstNickName = '';
                setState({
                    avatarUrl: myInfo.avatarUrl,
                    nickname: myInfo.nickname,
                    id: myInfo.id,
                    firstText: myInfo.nickname.substring(0,1),
                });
            } catch(errMsg) {
            }
        };
        getUserInfo();
    }, []);
    
    if(state.firstText !== '' || state.firstText !== null) {
        return (
            <div>
                <TextAvatar
                    nickname={state.nickname}
                    firstText={state.firstText}
                    clickEvent={logout}
                />
            </div>
        );
    } else {
        return (
            <ImageAvatar
                nickname={state.nickname}
                avatarUrl={state.avatarUrl}
                clickEvent={logout}
            />
        );
    }
}