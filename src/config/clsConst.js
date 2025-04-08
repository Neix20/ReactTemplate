
const APP_VERSION = "1.0.0";
const APP_NAME = "BeruPop";

const API_URL = import.meta.env.VITE_API_URL;
const LOG_URL = import.meta.env.VITE_LOG_URL;

const COGNITO_CONFIG = {
    Auth: {
        region: import.meta.env.VITE_AWS_PROJECT_REGION,
        userPoolWebClientId: import.meta.env.VITE_AWS_WEB_CLIENT_ID,
        Cognito: {
            userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
            userPoolClientId: import.meta.env.VITE_AWS_WEB_CLIENT_ID,
            signUpVerificationMethod: 'code',
            loginWith: {
                oauth: {
                    domain: import.meta.env.VITE_AWS_COGNITO_DOMAINAME,
                    scopes: ['email', 'openid', 'phone', 'profile', 'aws.cognito.signin.user.admin'],
                    redirectSignIn: ['http://localhost:5173/'],
                    redirectSignOut: ['http://localhost:5173/'],
                    responseType: 'code',
                }
            }
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