import React, { useEffect } from 'react';
import { fetchAuthSession, } from 'aws-amplify/auth';

import { Button } from '@mui/material';

const Index = () => {
    useEffect(() => {
        // Check for an existing Google client initialization
        if (!window.google?.accounts) createScript();
    }, []);

    // Load the Google client
    const createScript = () => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = initGsi;
        document.body.appendChild(script);
    }

    // Initialize Google client and render Google button
    const initGsi = () => {
        if (window.google?.accounts) {
            window.google.accounts.id.initialize({
                client_id: process.env.GOOGLE_CLIENT_ID,
                callback: async (response) => {
                    customCredentialsProvider.loadFederatedLogin({
                        domain: 'accounts.google.com',
                        token: response.credential,
                    });
                    const fetchSessionResult = await fetchAuthSession(); // will return the credentials
                    console.log('fetchSessionResult: ', fetchSessionResult);
                },
            });
            window.google.accounts.id.renderButton(
                document.getElementById('googleSignInButton'),
                { theme: 'outline', size: 'large' }
            );
        }
    }

    return (
        <Button id='googleSignInButton' />
    );
}

export default Index;