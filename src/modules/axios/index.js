import axios from "axios";
import { serverConfig } from "../../config/serverConfig";

let appServerURL = serverConfig.appServerUrl;

const ConfigApi = axios.create({
    baseURL: appServerURL,
});

// Add a request interceptor
ConfigApi.interceptors.request.use(
    config => {
        const accessToken = `bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
        console.log(localStorage.getItem("accesToken"))
        if (accessToken) {
            config.headers["Authorization"] = accessToken
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
ConfigApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return ConfigApi
                .post('/users/refresh-token', {
                    refreshToken: JSON.parse(localStorage.getItem('refreshToken')),
                })
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
                        ConfigApi.defaults.headers.common['Authorization'] = 'bearer ' + res.data.accessToken;
                        return ConfigApi(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    }
);
export default ConfigApi;
