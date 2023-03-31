import ConfigApi from "../axios/index";

class Staff {

    addStaffMember = (data, callBack) => {
        ConfigApi({
            method: "POST",
            url: `/staff`,
            data
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while Adding Staff Member', error.message);
            callBack({ status: 'error' });
        });
    }

    getAllStaffMember = callBack => {
        ConfigApi({
            method: "GET",
            url: `/staff`
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while getting Staff Member', error.message);
            callBack({ status: 'error' });
        });
    }

    updateStaffMemberById = (id, data, callBack) => {
        ConfigApi({
            method: "PUT",
            url: `/staff/${id}`,
            data: data,
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while updating Staff Member', error.message);
            callBack({ status: 'error' });
        });
    }

    deleteStaffMemberById = (id, callBack) => {
        ConfigApi({
            method: "DELETE",
            url: `/staff/${id}`
        }).then(response => {
            if (response.data) {
                callBack({ status: 'success', data: response.data });
            }
        }).catch(error => {
            console.log('Error occure while deleting Staff Member', error.message);
            callBack({ status: 'error' });
        });
    }


}


// eslint-disable-next-line import/no-anonymous-default-export
export default new Staff();