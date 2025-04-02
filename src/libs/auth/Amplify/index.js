
import { signIn, signOut, signUp, confirmSignUp } from 'aws-amplify/auth';

import { Amplify } from "aws-amplify";

import { clsConst } from "@config";

Amplify.configure(clsConst.COGNITO_CONFIG);

export const configureAuth = () => Auth.configure();

export const register = async (username, password) => {
    try {
        const res = await signUp({
            username,
            password,
            attributes: {
                email: username,
            }
        });

        return res;
    } catch (error) {
        console.log('error signing up:', error);
    }

    return null;
}

export {
    signIn,
    signOut,
    signUp,
    confirmSignUp
}
