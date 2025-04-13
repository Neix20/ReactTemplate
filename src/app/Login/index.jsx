import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

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

import GoogleSignIn from "./GoogleSignIn";


function Index(props) {

    return (
        <BpContainer maxWidth={"xl"}>
            <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <GoogleSignIn />
        </BpContainer>
    )
}

export default Index;