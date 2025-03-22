
import UserLayout from "@components/layout/User";

import Blog from "@app/User/Blog";
import Home from "@app/User/Home";

const RouteItems = [
    {
        path: '/',
        show: false,
        element: <Home />
    },
    {
        path: '/Home',
        text: "home",
        element: <Home />
    },
    {
        path: '/Blog',
        text: "blog",
        element: <Blog />
    }
]

const Routes = {
    path: '/',
    element: <UserLayout menuItems={RouteItems} />,
    children: RouteItems
};

export default Routes;
