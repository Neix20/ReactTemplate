import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { GlobalStyles } from "@config";

import { Amplify } from "@libs/auth";

import { fetchUserAttributes } from "@aws-amplify/auth";

import { Authenticator } from '@aws-amplify/ui-react';
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

function RedirectToFirstTimeLogin(props) {
    return (
        <Grid2>
            <Typography>Redirecting to First Time Login...</Typography>
        </Grid2>
    )
}

import { ColorModeIconDropdown } from '@components';

function Index(props) {

    const onDebug = () => {
        fetchUserAttributes()
            .then((res) => {
                console.log("session", res);
            })
            .catch((e) => {
                console.log("error", e);
            });
    }

    return (
        <BpContainer maxWidth={"xl"}>
            <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <Authenticator
                socialProviders={['google']}
                signUpAttributes={['email']}>
                {({ signOut, user }) => (
                    <RedirectToFirstTimeLogin />
                )}
            </Authenticator>
        </BpContainer>
    )
}

export default Index;