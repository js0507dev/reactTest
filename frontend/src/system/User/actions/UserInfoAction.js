import axios from 'axios';

export default function UserInfoAction(token, id) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url:`http://localhost:8080/users/${id}`,
            headers: {
                'Context-Type':'charset=utf-8',
                'X-AUTH-TOKEN':token,
            }
        })
        .then(
            (result) => {
                const success = result.data.success;
                if(success) {
                    resolve(result.data);
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
    })
}