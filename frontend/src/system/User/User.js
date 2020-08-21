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

export const login = ({uid,password,remember}) => {
    //storage에 로그인정보 있는지 확인
    const oldUser = getLoginInfo();
    if(oldUser) {
        return new Promise(( resolve => resolve(oldUser) ));
    }
    
    const formData = new FormData();
    formData.append("uid",uid);
    formData.append("password",password);
    
    return new Promise((resolve,reject) => {
        LoginAction(formData)
        .then( newUser => {
            SessionStorage.setObjectItem('user',newUser);

            //로그인 유지 유무 확인
            if(remember !== null && remember) {
                LocalStorage.setObjectItem('user',newUser);
            }
            resolve(newUser);
        },
        errMsg => {
            reject(errMsg);
        });
    });
};

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