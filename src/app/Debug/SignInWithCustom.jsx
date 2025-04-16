import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";

import { GlobalStyles } from "@config";

import { BpForm, BpLoading } from "@components";
import { useToggle, useForm } from "@hooks";

import { Amplify } from "@libs/auth";

import { fetchAuthSession, getCurrentUser } from "@aws-amplify/auth";

const { handleSignIn, handleSignUp, handleConfirmSignUp, handleSignOut, handleResetPassword, handleConfirmResetPassword, isAuthenticated, handleResendSignUpCode } = Amplify;

import { z } from "zod";

const template = {
    login: {
        key: "login",
        field: [
            {
                "name": "username",
                "type": "email"
            },
            {
                "name": "password",
                "type": "password"
            }
        ],
        initial: {
            username: "",
            password: ""
        },
        schema: z.object({
            username: z.string().email("Invalid email"),
            password: z.string().min(1, "Password is required")
        })
    },
    signUp: {
        key: "sign_up",
        field: [
            {
                "name": "username",
                "type": "email"
            },
            {
                "name": "password",
                "type": "password"
            },
            {
                "name": "confirm_password",
                "type": "password"
            }
        ],
        initial: {
            username: "",
            password: "",
            confirm_password: ""
        },
        schema: z.object({
            username: z.string().email("Invalid email"),
            password: z.string().min(1, "Password is required"),
            confirm_password: z.string().min(1, "Password is required")
        })
    },
    otpCode: {
        key: "otp_code",
        field: [
            {
                "name": "username",
                "type": "email"
            },
            {
                "name": "code",
                "type": "text"
            }
        ],
        initial: {
            username: "",
            code: ""
        },
        schema: z.object({
            username: z.string().email("Invalid email"),
            code: z.string().min(1, "Code is required")
        })
    }
}

function TxtButton(props) {

    const { onClick = () => { }, children = (<></>) } = props;

    return (
        <Typography
            sx={{
                background: "none",
                border: "none",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
            }}
            onClick={onClick}
        >
            {children}
        </Typography>
    );
}

function Index(props) {


    const { field: lField, control: lControl } = useForm(template.login);
    const { field: sField, control: sControl } = useForm(template.signUp);
    const { field: oField, control: oControl } = useForm(template.otpCode);

    const { flag: resendFlag, toggle: toggleResend } = useToggle(false);
    const { flag: userFlag, open: setUserTrue, close: setUserFalse, toggle: toggleUser } = useToggle(false);

    const [session, setSession] = useState({});
    const [signUpSession, setSignUpSession] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(session);
    }, [session])

    // #region Actions
    const onLogin = () => {
        handleSignIn(lData)
            .then((res) => {
                alert("User has signed in!");
                setUserTrue();

                // Store this Data inside Redux, with Last Session Date
                setSession(_ => res);
            })
            .catch(err => {
                alert(err);
            })
    }
    const onLogOut = () => {
        handleSignOut()
            .then(() => {
                alert("User has signed out!");
                setUserFalse();
            })
    }

    const onSignUp = () => {
        handleSignUp(sData)
            .then((res) => {
                alert("User has signed up! Please Check Email for Activation Code!");

                setSignUpSession(_ => res);
            })
            .catch(err => {
                alert(err);
            })
    }

    const onConfirmSignUp = () => {
        handleConfirmSignUp(oData)
            .then(() => {
                alert("User has confirmed sign up!");
            })
            .catch(err => {
                alert(err);
            })
    }

    const onResendSignUpCode = () => {
        toggleResend();
    }
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />

            <Container maxWidth={"xl"} sx={{ padding: 2 }}>
                <Box>
                    <Typography variant={"h2"}>Amplify Cognito</Typography>
                </Box>
                <Box sx={{ mt: 2, ...GlobalStyles.bordered }}>
                    <BpForm hasLabel={true} 
                        field={lField}
                        control={lControl}
                        size={{ xs: 12, sm: 12 }} />
                    <Grid2 container spacing={1} sx={{ mt: 2 }}>
                        <Button variant={"contained"} onClick={onLogin}>Login</Button>
                        <Button variant={"contained"} onClick={onLogOut}>Logout</Button>
                    </Grid2>
                </Box>
                <Box sx={{ mt: 2, ...GlobalStyles.bordered }}>
                    <BpForm
                        hasLabel={true} 
                        field={sField}
                        control={sControl}
                        size={{ xs: 12, sm: 12 }} />
                    <Box sx={{ mt: 2 }}>
                        <Button variant={"contained"} onClick={onSignUp}>Sign Up</Button>
                    </Box>
                </Box>
                <Box sx={{ mt: 2, ...GlobalStyles.bordered }}>
                    <BpForm hasLabel={true} 
                        field={oField}
                        control={oControl}
                        size={{ xs: 12, sm: 12 }} />
                    <Box sx={{ mt: 1 }}>
                        <TxtButton onClick={onResendSignUpCode}>Resend Code</TxtButton>
                    </Box>
                    <Snackbar open={resendFlag} autoHideDuration={3000}
                        onClose={toggleResend}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}>
                        <Alert onClose={toggleResend} severity="success" variant="filled">
                            Successfully Resend OTP Code!
                        </Alert>
                    </Snackbar>

                    <Box sx={{ mt: 2 }}>
                        <Button variant={"contained"} onClick={onConfirmSignUp}>Confirm OTP</Button>
                    </Box>
                </Box>
                <Box sx={{ mt: 1 }}>
                    {
                        (userFlag) ? (
                            <Typography variant={"h4"}>Welcome, User</Typography>
                        ) : (
                            <Typography variant={"h4"}>Not Signed In</Typography>
                        )
                    }

                    <Typography variant={"h4"}>{JSON.stringify(session)}</Typography>
                    <Typography variant={"h4"}>{JSON.stringify(signUpSession)}</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Index;