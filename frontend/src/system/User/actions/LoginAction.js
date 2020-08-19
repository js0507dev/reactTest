import axios from 'axios';

export default function LoginAction(formData) {
    return new Promise(function(resolve, reject) {
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
            const msg = error.response.data.msg || error;
            reject(msg);
        });
    });
}