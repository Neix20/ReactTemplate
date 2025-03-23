
import UserLayout from "@components/layout/User";

import Blog from "@app/User/Blog";
import Home from "@app/User/Home";

import { Context } from "@config";

const menuItems = [
    {
        id: "index",
        title: "index",
        url: '/',
        show: false,
        element: <Home />
    },
    {
        id: "home",
        title: "home",
        type: "item",
        url: '/Home',
        element: <Home />
    },
    {
        id: "blog",
        title: "blog",
        url: '/Blog',
        type: "item",
        element: <Blog />
    },
    {
        id: "about",
        title: "about",
        type: "group",
        children: [
            {
                id: "test2",
                title: "Test2",
                url: "/Test1",
                element: <Blog />
            },
            {
                id: "test4",
                title: "Test4",
                url: "/Test3",
                element: <Blog />
            },
            {
                id: "test6",
                title: "Test6",
                url: "/Test5",
                element: <Blog />
            },
            {
                id: "test8",
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
    children: menuItems.map(x => ({ ...x, path: x.url, children: x.children?.map(y => ({ ...y, path: y.url })) }))
};

export default Routes;
