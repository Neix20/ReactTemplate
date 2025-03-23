import * as React from 'react';

import { RouterProvider } from 'react-router-dom';

import router from "./routes";

import ThemeCustomization from '@components/theme';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@libs/redux";

function Index() {
    return (
        <ThemeCustomization>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RouterProvider router={router} />
                </PersistGate>
            </Provider>
        </ThemeCustomization>
    );
}

export default Index;