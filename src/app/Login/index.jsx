import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Modal } from "@mui/material";
import { Authenticator } from '@aws-amplify/ui-react';

import { Card as MuiCard, FormControl, FormLabel, TextField } from "@mui/material";

import '@aws-amplify/ui-react/styles.css';

import { styled } from "@mui/material";

const BpContainer = styled(Container)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: '100%',
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage: 'linear-gradient(180deg, rgba(80,150,209, 0.2) 0%, rgba(255,255,255,1) 75%)',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

import { ColorModeIconDropdown } from '@components';

const formFields = {
    signUp: {
        email: {
            order: 1
        },
        name: {
            order: 2
        },
        username: {
            order: 3
        },
        password: {
            order: 4
        },
        confirm_password: {
            order: 5
        }
    }
}

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

import ProfilePhoto from "./components/ProfilePhoto";

function ProfilePhotoPage(props) {
    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Typography variant={"h2"}>
                    Add a photo 📷
                </Typography>
                <Typography variant={"body1"}>
                    Add a profile photo so that your friend know it's you!
                </Typography>
            </Box>
            <ProfilePhoto {...props} />
        </>
    )
};

function NamePage(props) {
    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Typography variant={"h2"}>
                    What's your name? ✍️
                </Typography>
                <Typography variant={"body1"}>
                    Tell us your name so that we can personalize your experience.
                </Typography>
            </Box>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <TextField type={"text"} placeholder="Enter your name" />
            </FormControl>
        </>
    )
}

import { CheckCircle, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function useTimer(callBack = () => { }) {

    const [value, setValue] = useState(null);

    useEffect(() => {

        if (value === null) {
            return;
        }

        if (value <= 0) {
            callBack();
            return;
        }

        const interval = setInterval(() => {
            setValue((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [value, callBack]);

    return {
        value,
        setValue
    };
}

function CompletePage(props) {

    const { seconds = -1 } = props;

    {/* Add Redirect Here */ }
    return (
        <Grid2 container
            flexDirection={"column"}
            alignItems={"center"}
            spacing={2}>
            <Grid2 container flexDirection={"column"} alignItems={"center"} spacing={0}>
                <Typography variant="h2">
                    All done!
                </Typography>
                <Typography variant="body1">
                    Redirecting in {seconds} Seconds ...
                </Typography>
            </Grid2>
            <CheckCircle
                sx={{
                    fontSize: 100,
                    color: 'success.main',
                }}
            />
        </Grid2>
    )
}


function useStep() {
    const [step, setStep] = useState(0);

    const add = () => setStep(pVal => pVal + 1);
    const minus = () => setStep(pVal => pVal - 1);

    return {
        step, add, minus
    }
}

import { fetchAuthSession } from "@aws-amplify/auth";

function Main(props) {

    const { user = {} } = props;

    const { userId = "" } = user;

    const [profilePic, setProfilePic] = useState({});

    const { step, add, minus } = useStep();

    const navigate = useNavigate();

    const { value: seconds, setValue: setSeconds } = useTimer(() => { navigate("/"); });

    // Not New Login
    const user_arr = [
        "a4b8d468-b051-7090-8a28-95797c783991"
    ]

    useEffect(() => {
        if (user_arr.includes(userId)) {
            navigate("/");
        }
    }, [userId]);

    const onSubmit = () => {
        add();
        setSeconds(_ => 3);
    }

    return (
        <Card sx={{ padding: 2 }}>
            <Box hidden={step !== 0}>
                <ProfilePhotoPage data={profilePic} onChange={setProfilePic} />
            </Box>
            <Box hidden={step !== 1}>
                <NamePage />
            </Box>
            <Box hidden={step !== 2}>
                <CompletePage seconds={seconds} />
            </Box>
            <Grid2 container alignItems={"center"} justifyContent={"space-between"}
                sx={{ display: step < 2 ? "flex" : "none" }}>
                <Button variant={"outlined"} onClick={minus} sx={{ visibility: step < 1 ? "hidden" : "visible" }}>Previous</Button>
                <Button variant={"contained"} onClick={onSubmit} sx={{ display: step == 1 ? "block" : "none" }}>Submit</Button>
                <Button variant={"contained"} onClick={add} sx={{ display: step < 1 ? "block" : "none" }}>Next</Button>
            </Grid2>
        </Card>
    )
}

function Index(props) {

    return (
        <BpContainer maxWidth={"xl"}>
            <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <Authenticator
                formFields={formFields}
                socialProviders={['google']}
                signUpAttributes={['email', 'name']}>
                {({ signOut, user }) => (
                    <Main user={user} />
                )}
            </Authenticator>
        </BpContainer>
    )
}

export default Index;