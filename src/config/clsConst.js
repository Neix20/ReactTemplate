
const APP_VERSION = "1.0.0";
const APP_NAME = "BeruPop";

const API_URL = import.meta.env.VITE_API_URL;
const LOG_URL = import.meta.env.VITE_LOG_URL;

const COGNITO_CONFIG = {
    Auth: {
        Cognito: {
            region: import.meta.env.VITE_AWS_REGION,
        userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
        userPoolWebClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
        }
    }
}

const TIME_FOR_AUTH = 60 * 60 * 1000;

const DRAWER_WIDTH = 260;
const MINI_DRAWER_WIDTH = 60;

const data = {
    APP_VERSION,
    APP_NAME,
    API_URL,
    LOG_URL,
    COGNITO_CONFIG,
    TIME_FOR_AUTH,
    DRAWER_WIDTH,
    MINI_DRAWER_WIDTH
}

export default data;