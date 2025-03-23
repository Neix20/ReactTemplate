
import axios from "axios";

import { clsConst } from "@config";
const { APP_NAME } = clsConst;

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        // console.log(`[${new Date().toISOString()}] | ${APP_NAME} | Request:`, JSON.stringify(config, null, 4));
        return config;
    },
    (error) => {
    
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // console.log(`[${new Date().toISOString()}] | ${APP_NAME} | Response:`, JSON.stringify(response, null, 4));
        return response;
    },
    (error) => {
        console.error(`[${new Date().toISOString()}] | ${APP_NAME} | Response Error:`, error);
        return Promise.reject(error);
    }
);

// Utility methods for HTTP requests
const axiosRequest = {
    get: (url, params, config = {}) =>
        axiosInstance.get(url, { ...config, params }),
    post: (url, data, config = {}) =>
        axiosInstance.post(url, data, config),
    put: (url, data, config = {}) =>
        axiosInstance.put(url, data, config),
    delete: (url, params, config = {}) =>
        axiosInstance.delete(url, { ...config, params }),
};

// Utility

function genLogUrl(action) {
    const { LOG_URL } = clsConst;
    return `${LOG_URL}/${action}`;
}

function genServerUrl(action) {
    const { API_URL } = clsConst;
    return `${API_URL}/${action}`;
}

function requestObj(obj) {
    return obj;
}

export {
    axiosInstance,
    axiosRequest,
    genLogUrl,
    genServerUrl,
    requestObj
};
