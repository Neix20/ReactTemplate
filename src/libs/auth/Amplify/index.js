
import { signIn, signOut, signUp, confirmSignUp, fetchAuthSession, resetPassword, confirmResetPassword, resendSignUpCode } from 'aws-amplify/auth';

import { Amplify } from "aws-amplify";

import { clsConst } from "@config";

Amplify.configure(clsConst.COGNITO_CONFIG);

const handleSignIn = async (data) => {

    const { username = "", password = "" } = data;
    try {
        await signIn({ username, password });
        const { userSub: userId } = await fetchAuthSession();
        return userId; // Store token if needed
    } catch (error) {
        console.error("Error signing in:", error);
        throw error;
    }
}

const handleSignUp = async (data) => {
    const { username = "", password = "" } = data;
    try {
        const { userId } = await signUp({
            username,
            password,
            options: { userAttributes: { email: username } },
        });
        return userId;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
}

const handleConfirmSignUp = async (data) => {
    const { username = "", code = "" } = data;

    try {
        await confirmSignUp({ username, confirmationCode: code });
        console.log("User confirmed successfully!");
    } catch (error) {
        console.error("Error confirming sign up:", error);
        throw error;
    }
}

const handleResendSignUpCode = async (data) => {

    const { username = "" } = data;
    try {
        await resendSignUpCode({ username });
        console.log("OTP resent successfully!");
        return true;
    } catch (error) {
        console.error("Error resending OTP:", error);
        return false;
    }
}

const handleSignOut = async () => {
    try {
        await signOut();
    } catch (error) {
        console.error("Error signing out:", error);
        throw error;
    }
}

const isAuthenticated = async () => {
    try {
        const { userSub = "" } = await fetchAuthSession();

        if (userSub.length == 0) {
            throw new Error("User Session has Expired");
        }

        return userSub;
    } catch (error) {
        throw error;
    }
}

const handleResetPassword = async (data) => {
    const { username = "" } = data;
    try {
        await resetPassword({ username });
        console.log("Password reset code sent!");
        return true;
    } catch (error) {
        console.error("Error requesting password reset:", error);
        return false;
    }
}

const handleConfirmResetPassword = async (data) => {
    const { username = "", code = "", newPassword = "" } = data;
    try {
        await confirmResetPassword({ username, confirmationCode: code, newPassword });
        console.log("Password successfully reset!");
        return true;
    } catch (error) {
        console.error("Error confirming password reset:", error);
        return false;
    }
}

export {
    handleSignIn,
    handleSignUp,
    handleConfirmSignUp,
    handleResendSignUpCode,
    handleSignOut,
    handleResetPassword,
    handleConfirmResetPassword,
    isAuthenticated,
}
