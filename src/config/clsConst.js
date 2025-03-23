
const APP_VERSION = "1.0.0";
const APP_NAME = "BeruPop";

const API_URL = import.meta.env.VITE_API_URL;
const LOG_URL = import.meta.env.VITE_LOG_URL;

const COGNITO_CONFIG = {
    UserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
}

const TIME_FOR_AUTH = 60 * 60 * 1000;

const data = {
    APP_VERSION,
    APP_NAME,
    API_URL,
    LOG_URL,
    COGNITO_CONFIG,
    TIME_FOR_AUTH
}

export default data;