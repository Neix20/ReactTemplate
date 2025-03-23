import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from "amazon-cognito-identity-js";

import { clsConst } from "@config";

const cognitoUserPool = new CognitoUserPool(clsConst.COGNITO_CONFIG);

const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        const user = new CognitoUser({
            Username: email,
            Pool: cognitoUserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        })

        user.authenticateUser(authDetails, {
            onSuccess: (result) => {
                resolve(result)
            },
            onFailure: (err) => {
                reject(err);
            }
        })
    });
}

const signOut = () => {
    const user = cognitoUserPool.getCurrentUser();
    user.signOut();
    window.location.href = "/";
}

const signUp = (email, password) => {
    return new Promise((resolve, reject) => {

        const attrList = [
            new CognitoUserAttribute({
                Name: "email",
                Value: email
            })
        ]

        cognitoUserPool.signUp(email, password, attrList, null, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

const confirmSignUp = (confirmationCode) => {
    return new Promise((resolve, reject) => {
        cognitoUserPool.confirmRegistration(confirmationCode, true, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

export {
    cognitoUserPool,
    signIn,
    signOut,
    signUp,
    confirmSignUp
}