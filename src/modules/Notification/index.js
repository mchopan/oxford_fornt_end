import ConfigApi from "../axios/index";

class Notification {
    getAllNotifications = callBack => {
        ConfigApi({
            method: "GET",
            url: `/getNotification`
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while getting Notifications', error.message);
            callBack({ status: 'error' });
        });
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new Notification();