import { LocalStorage, SessionStorage } from 'system/Storage/Storage'
import { LoginAction, UserInfoAction } from './actions';

export const getLoginInfo = () => {
    const localUser = LocalStorage.getObjectItem('user');
    const sessionUser = SessionStorage.getObjectItem('user');
    let user = sessionUser || localUser;
    if(localUser) {
        if(!sessionUser) {
            SessionStorage.setObjectItem('user',localUser);
        }
    }
    
    return user;
};

export async function login({uid,password,remember}) {
    //storage에 로그인정보 있는지 확인
    const oldUser = getLoginInfo();
    if(oldUser) {
        return oldUser;
    }
    
    const formData = new FormData();
    formData.append("uid",uid);
    formData.append("password",password);
    
    try {
        const newUser = await LoginAction(formData);
    
        SessionStorage.setObjectItem('user',newUser);

        //로그인 유지 유무 확인
        if(remember !== null && remember) {
            LocalStorage.setObjectItem('user',newUser);
        }
        return newUser;
    } catch(error) {
        alert(error);
    }
    
    return null;
}

export const logout = () => {
    SessionStorage.removeItem('user');
    LocalStorage.removeItem('user');
};

export const getUserInfo = () => {
    let oldUser = getLoginInfo();
    
    return new Promise((resolve,reject) => {
        UserInfoAction(oldUser.token, oldUser.id)
        .then( userInfo => {
            const myInfo = {
                'nickname':userInfo.nickname,
                'uid':userInfo.uid,
                'avatarUrl':userInfo.avatarUrl,
            };
            
            resolve(myInfo);
        },
        errMsg => {
            reject(errMsg);
        });
    });
}