import ConfigApi from "../axios/index";

class User {

    signup = (data, callBack) => {
        ConfigApi({
            method: 'POST',
            url: `/users/signup`,
            data: data,
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while createing user in', error.message);
            callBack({ status: 'error' });
        });
    }

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

    verifyAuth = (callBack) => {
        ConfigApi({
            method: 'GET',
            url: `/users/verify`,
        }).then((response) => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
            else {
                callBack({ status: 'error', data: response });
            }
        }).catch(error => {
            console.log('Error occurred while verifying auth', error.message);
            callBack({ status: 'error' });
        });
    }

    getAllUsers = (callBack) => {
        ConfigApi({
            method: 'GET',
            url: `/users`,
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while Getting Users in', error.message);
            callBack({ status: 'error' });
        });
    }

    updateUserByID = (id, data, callBack) => {
        ConfigApi({
            method: 'PUT',
            url: `/users/${id}`,
            data: data,
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while updating user: ', error.message);
            callBack({ status: 'error' });
        });
    }

    deleteUserByID = (id, callBack) => {
        ConfigApi({
            method: 'DELETE',
            url: `/users/${id}`,
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while deleting user: ', error.message);
            callBack({ status: 'error' });
        });
    }

    refreshToken = () => {
        const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
        ConfigApi({
            method: 'POST',
            url: '/users/refresh-token',
            data: { refreshToken: refreshToken },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            localStorage.setItem('access_token', JSON.stringify(response.accessToken));
            localStorage.setItem('refresh_token', JSON.stringify(response.refreshToken));

        }).catch(error => {
            console.log('Error occurred while refreshing tokens: ', error.message);
        });
    }


    findUsername = (username, callBack) => {
        ConfigApi({
            method: 'GET',
            url: `/users/username/${username}`,
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while finding user: ', error.message);
            callBack({ status: 'error' });
        });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new User();