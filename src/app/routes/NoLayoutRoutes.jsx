


import SignIn from "@features/sign-in/SignIn";
import SignUp from "@features/sign-up/SignUp";

const menuItems = [
    {
        path: '/SignIn',
        element: <SignIn />
    },
    {
        path: '/SignUp',
        element: <SignUp />
    }
]

const Routes = {
    path: '/',
    children: menuItems
};

export default Routes;
