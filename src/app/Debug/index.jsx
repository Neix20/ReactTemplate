import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";

import { GlobalStyles } from "@config";

import { BpForm, BpLoading } from "@components";
import { useForm, useToggle } from "@hooks";

import { Amplify } from "@libs/auth";


import { fetchAuthSession, getCurrentUser } from "@aws-amplify/auth";
const { handleSignIn, handleSignUp, handleConfirmSignUp, handleSignOut, handleResetPassword, handleConfirmResetPassword, isAuthenticated, handleResendSignUpCode } = Amplify;

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
        ]
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
        ]
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
        ]
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

    const { key: lKey, data: lData, field: lField, updateDataHtml: updateLData, resetData: resetLData } = useForm(template.login);
    const { key: sKey, data: sData, field: sField, updateDataHtml: updateSData, resetData: resetSData } = useForm(template.signUp);
    const { key: oKey, data: oData, field: oField, updateDataHtml: updateOData, resetData: resetOData } = useForm(template.otpCode);

    const { flag: resendFlag, toggle: toggleResend } = useToggle(false);
    const { flag: userFlag, open: setUserTrue, close: setUserFalse, toggle: toggleUser } = useToggle(false);

    const [session, setSession] = useState({});
    const [signUpSession, setSignUpSession] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(session);
    }, [session])

    const onLogin = () => {
        handleSignIn(lData)
            .then((res) => {
                alert("User has signed in!");
                setUserTrue();
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

    const onDebug = async () => {
        const res = await fetchAuthSession();
        console.log(res);
    }

    return (
        <>
            <BpLoading loading={loading} />

            <Container maxWidth={"xl"} sx={{ padding: 2 }}>
                <Box>
                    <Typography variant={"h2"}>Amplify Cognito</Typography>
                </Box>
                <Box sx={{ mt: 2, ...GlobalStyles.bordered }}>
                    <BpForm
                        key={lKey} idx={lKey}
                        data={lData} field={lField}
                        onUpdate={updateLData}
                        hasLabel={true} size={{ xs: 1, sm: 1 }} />
                    <Grid2 container spacing={1} sx={{ mt: 2 }}>
                        <Button variant={"contained"} onClick={onLogin}>Login</Button>
                        <Button variant={"contained"} onClick={onLogOut}>Logout</Button>
                        <Button variant={"contained"} onClick={onDebug}>Debug</Button>
                    </Grid2>
                </Box>
                <Box sx={{ mt: 2, ...GlobalStyles.bordered }}>
                    <BpForm
                        key={sKey} idx={sKey}
                        data={sData} field={sField}
                        onUpdate={updateSData}
                        hasLabel={true} size={{ xs: 1, sm: 1 }} />
                    <Box sx={{ mt: 2 }}>
                        <Button variant={"contained"} onClick={onSignUp}>Sign Up</Button>
                    </Box>
                </Box>
                <Box sx={{ mt: 2, ...GlobalStyles.bordered }}>
                    <BpForm
                        key={oKey} idx={oKey}
                        data={oData} field={oField}
                        onUpdate={updateOData}
                        hasLabel={true} size={{ xs: 1, sm: 1 }} />
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