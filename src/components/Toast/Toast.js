import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
const Toast = ({ type, message }) => {
    switch (type) {
        case 'success':
            return (
                <div >
                    {toast.success(message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })}
                </div>
            );
        case 'error':
            return (
                <div>
                    {toast.error(message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    })}
                </div>
            );
        case 'warning':
            return (
                <div>
                    {toast.warning(message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    })}
                </div>
            );
        default:
            return null;
    }
};

export default Toast;
