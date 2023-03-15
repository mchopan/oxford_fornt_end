import ConfigApi from "../axios/index";

class Notification {


    addNotification = (data, callBack) => {
        ConfigApi({
            method: 'POST',
            url: `/notifications`,
            data: data,
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while adding Notification', error.message);
            callBack({ status: 'error' });
        });
    }

    getAllNotifications = callBack => {
        ConfigApi({
            method: "GET",
            url: `/notifications`
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while getting Notifications', error.message);
            callBack({ status: 'error' });
        });
    }

    updateNotificationById = (id, data, callBack) => {
        ConfigApi({
            method: 'PUT',
            url: `/notifications/${id}`,
            data: data,
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while updating Notifications', error.message);
            callBack({ status: 'error' });
        });
    }

    deleteNotificationById = (id, callBack) => {
        ConfigApi({
            method: 'DELETE',
            url: `/notifications/${id}`,
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while updating Notifications', error.message);
            callBack({ status: 'error' });
        });
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new Notification();