
import { clsConst } from "@config";

// This needs to follow the same pattern as Amplify

const signIn = async (data, callBack) => {

    const { username = "", password = "" } = data;

    if (username == "root" && password == "root") {
        callBack({
            isLogin: true,
            lastSession: new Date()
        })
    } else {
        throw new Error("Username or Password is incorrect!");
    }
}

const signOut = async (callBack) => {
    callBack({
        isLogin: false,
        lastSession: ""
    })
}

const signUp = () => { }
const confirmSignUp = () => { }
const forgotPassword = () => { }

const isAuthenticated = async (data) => {

    const { isLogin = false, lastSession = "" } = data;

    let nowDt = new Date();
    let sesDt = new Date("1999-01-01T00:00:00.000Z");

    if (lastSession != "") {
        sesDt = new Date(lastSession);
    }

    const timeDiff = Math.floor(nowDt - sesDt);

    // 5 Seconds
    const ttl = clsConst.TIME_FOR_AUTH;

    const flag = (isLogin && timeDiff < ttl);

    if (!flag) {
        throw new Error("User Session has Expired");
    }

    return true;
}

export {
    signIn,
    signOut,
    signUp,
    confirmSignUp,
    forgotPassword,
    isAuthenticated
}