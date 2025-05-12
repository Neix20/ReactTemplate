

import Debug from "@app/Debug";

import Login from "@app/Login";

const menuItems = [

    {
        path: '/Login',
        element: <Login />
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
