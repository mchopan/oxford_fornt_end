import axios from "axios";
import { serverConfig } from "../../config/serverConfig";

let appServerURL = serverConfig.appServerUrl;

const ApiConfig = config => {
    config.baseURL = appServerURL;
    return axios(config);
};
export default ApiConfig;