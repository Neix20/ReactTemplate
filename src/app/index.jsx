
import { useState, useEffect } from "react";

import { RouterProvider } from 'react-router-dom';

import router from "./Routes";

import ThemeCustomization from '@components/theme';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@libs/redux";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { fetchSignIn } from "@api";

function App(props) {

    const dispatch = useDispatch();

    const { PK = "" } = useSelector(Selectors.userSelect);

    const signIn = (data) => {
        fetchSignIn(data)
            .then(res => {

                const { data = {} } = res;
                dispatch(Actions.onChangeUser(data));

            })
            .catch(err => {
            })
    }

    useEffect(() => {
        const userId = PK.slice(5);
        signIn({ id: userId })
    }, []);

    return (
        <RouterProvider router={router} />
    )
}

function Index() {
    return (
        <ThemeCustomization>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </ThemeCustomization>
    );
}

export default Index;