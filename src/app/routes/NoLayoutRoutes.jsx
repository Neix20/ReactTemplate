


import SignIn from "@features/sign-in/SignIn";

const menuItems = [
    {
        path: '/SignIn',
        element: <SignIn />
    }
]

const Routes = {
    path: '/',
    children: menuItems
};

export default Routes;
