import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import * as clsAuth from "@libs/auth/Simple";

const Index = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const user = useSelector(Selectors.userSelect);

    useEffect(() => {
        // if (location.pathname.startsWith("/Admin")) {
        //     clsAuth.isUserAuthenticated(user)
        //     .then(data => {
        //     })
        //     .catch(err => {
        //         alert(err);
        //         navigate("/Login");
        //     })
        // }
    }, [location.pathname]);

    return null;
};

export default Index;
