import axios from 'axios';

export default function LoginAction(formData) {
    //test
    return new Promise((resolve, reject) => {
        const newUser = {
            id: 8,
            uid: 'test@naver.com',
            roles: ['USER'],
            token: 'test'
        };
        resolve(newUser);
    });
    
    /*return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url:"http://localhost:8080/users/signin",
            data: formData,
            headers: {
                'Context-Type':'multipart/form-data;charset=utf-8',
            }
        })
        .then(
            (result) => {
                const success = result.data.success;
                if(success) {
                    const userToken = result.data.data;
                    const decodeToken = userToken.split('.');
                    let resInfo = JSON.parse(window.atob(decodeToken[1]));
                    
                    const newUser = {
                        id: resInfo.sub,
                        uid: formData.uid,
                        roles: resInfo.roles,
                        token: userToken,
                    };
                    resolve(newUser);
                } else {
                    reject(result.data.msg);
                }
            }
        )
        .catch(error => {
            const msg = error;
            if(error.response) {
                msg = error.response.data.msg;
            }
            reject(msg);
        });
    });*/
}