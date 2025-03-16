import * as React from 'react';

// Provider
// PersistGate
// ThemeProvider

// Change the 2 Below to Using Router Provider

// BrowserRoute
// Router

import { RouterProvider } from 'react-router-dom';

import router from "./routes";

import ThemeCustomization from '@components/mantis/themes';
import ScrollTop from '@components/mantis/ScrollTop';

function Index() {
    return (
        <ThemeCustomization>
            <RouterProvider router={router} />
        </ThemeCustomization>
    );
}

export default Index;