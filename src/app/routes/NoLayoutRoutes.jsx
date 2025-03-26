


import SignIn from "@features/sign-in/SignIn";
import SignUp from "@features/sign-up/SignUp";

import Debug from "@app/Debug";

const menuItems = [
    {
        path: '/NeixQingXiEn',
        element: <SignIn />
    },
    {
        path: '/SignUp',
        element: <SignUp />
    },
    {
        path: '/Debug',
        element: <Debug />
    }
]

const Routes = {
    path: '/',
    children: menuItems
};

export default Routes;
