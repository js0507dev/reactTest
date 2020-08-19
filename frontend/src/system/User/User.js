import { LocalStorage, SessionStorage } from 'system/Storage/Storage'
import { LoginAction } from './actions';

export const getLoginInfo = () => {
    const localUser = LocalStorage.getObjectItem('user');
    const sessionUser = SessionStorage.getObjectItem('user');
    let user = localUser || sessionUser;
    if(localUser) {
        if(!sessionUser) {
            SessionStorage.setObjectItem('user',localUser);
        }
    }
    console.log("test1: "+localUser);
    console.log("test2: "+sessionUser);
    
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
    
    return new Promise(function(resolve,reject) {
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

/*function User() {
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
                
                SessionStorage.setObjectItem('userInfo',newUserInfo);
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

export default User;*/