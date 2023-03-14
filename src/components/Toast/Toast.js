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
                        position: "top-center",
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
                        position: "top-center",
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
        case 'warning':
            return (
                <div>
                    {toast.warn(message, {
                        position: "top-center",
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
        default:
            return null;
    }
};

export default Toast;
