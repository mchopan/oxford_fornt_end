import ConfigApi from "../axios/index";

class Events {
    addEvent = (data, callBack) => {
        ConfigApi({
            method: 'POST',
            url: `/events`,
            data: data
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while adding Event', error.message);
            callBack({ status: 'error' });
        });
    }

    getAllEvents = callBack => {
        ConfigApi({
            method: "GET",
            url: `/events`
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while getting Events', error.message);
            callBack({ status: 'error' });
        });
    }

    updateEventById = (id, data, callBack) => {
        ConfigApi({
            method: 'PUT',
            url: `/events/${id}`,
            data: data
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while updating Event', error.message);
            callBack({ status: 'error' });
        });
    }

    deleteEventById = (id, callBack) => {
        ConfigApi({
            method: 'DELETE',
            url: `/events/${id}`
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
export default new Events();