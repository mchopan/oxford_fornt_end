import ConfigApi from "../axios/index";

class Testemionals {
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
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new Testemionals();