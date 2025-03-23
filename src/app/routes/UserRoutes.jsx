
import UserLayout from "@components/layout/User";

import Blog from "@app/User/Blog";
import Home from "@app/User/Home";

import { Context } from "@config";

const menuItems = [
    {
        url: '/',
        show: false,
        element: <Home />
    },
    {
        title: "home",
        type: "item",
        url: '/Home',
        element: <Home />
    },
    {
        title: "blog",
        url: '/Blog',
        type: "item",
        element: <Blog />
    },
    {
        title: "about",
        type: "group",
        children: [
            {
                title: "Test2",
                url: "/Test1",
                element: <Blog />
            },
            {
                title: "Test4",
                url: "/Test3",
                element: <Blog />
            },
            {
                title: "Test6",
                url: "/Test5",
                element: <Blog />
            },
            {
                title: "Test8",
                url: "/Test7",
                element: <Blog />
            },
        ]
    },
]

const Routes = {
    element: (
        <Context.User.Provider value={{ menuItems: menuItems.filter(x => x.show != false) }}>
            <UserLayout />
        </Context.User.Provider>
    ),
    children: menuItems.map(x => ({ ...x, path: x.url, children: x.children?.map(y => ({ ...y, path: y.url}))}))
};

export default Routes;
