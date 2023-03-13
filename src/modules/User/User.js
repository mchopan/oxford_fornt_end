import ConfigApi from "../axios/index";

class User {

    login = (data, callBack) => {
        ConfigApi({
            method: 'POST',
            url: `/users/login`,
            data: data
        })
            .then(response => {
                if (response.data) {
                    callBack({ status: 'success', data: response.data });
                }
            })
            .catch(error => {
                console.log('Error occurred while logging in', error.message);
                callBack({ status: 'error' });
            });
    }


}

// eslint-disable-next-line import/no-anonymous-default-export
export default new User();