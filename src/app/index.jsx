import * as React from 'react';

import { RouterProvider } from 'react-router-dom';

import router from "./routes";

import ThemeCustomization from '@components/theme';

function Index() {
    return (
        <ThemeCustomization>
            <RouterProvider router={router} />
        </ThemeCustomization>
    );
}

export default Index;