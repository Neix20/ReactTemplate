
import UserLayout from "@components/layout/User";

import Blog from "@app/User/Blog";
import Home from "@app/User/Home";

import { Context } from "@config";

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
    element: <Context.User.Provider value={{ menuItems: RouteItems.filter(x => x.show != false) }}>
        <UserLayout />
    </Context.User.Provider>,
    children: RouteItems
};

export default Routes;
