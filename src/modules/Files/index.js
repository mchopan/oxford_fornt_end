import ConfigApi from "../axios/index";

class Files {

    uploadFile = (data, callBack) => {
        ConfigApi({
            method: "POST",
            url: "files",
            data: data,
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while deleting image in', error.message);
            callBack({ status: 'error' });
        })
    }

    getFiles = (callBack) => {
        ConfigApi({
            method: "GET",
            url: "files",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while deleting image in', error.message);
            callBack({ status: 'error' });
        })
    }

    deleteFile = (id, callBack) => {
        ConfigApi({
            method: "DELETE",
            url: `files/${id}`,
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occurred while deleting image in', error.message);
            callBack({ status: 'error' });
        })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Files();