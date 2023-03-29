import ConfigApi from "../axios/index";

class Testemionals {

    addTestem = (data, callBack) => {
        ConfigApi({
            method: "POST",
            url: `/tetsem`,
            data
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while Adding Testemional', error.message);
            callBack({ status: 'error' });
        });
    }

    getAllTestem = callBack => {
        ConfigApi({
            method: "GET",
            url: `/tetsem`
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while getting Testemionals', error.message);
            callBack({ status: 'error' });
        });
    }

    updateTestemById = (id, data, callBack) => {
        ConfigApi({
            method: "PUT",
            url: `/tetsem/${id}`,
            data: data,
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while updating Testemionals', error.message);
            callBack({ status: 'error' });
        });
    }

    deleteTestemById = (id, callBack) => {
        ConfigApi({
            method: "DELETE",
            url: `/tetsem/${id}`
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while deleting Testemional', error.message);
            callBack({ status: 'error' });
        });
    }


}


// eslint-disable-next-line import/no-anonymous-default-export
export default new Testemionals();