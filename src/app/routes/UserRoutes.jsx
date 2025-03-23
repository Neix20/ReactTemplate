
import UserLayout from "@components/layout/User";

import Incident from "@app/User/Incident";
import Report from "@app/User/Report";
import Home from "@app/User/Home";

import Error from "@app/Error";

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
        id: "incident",
        title: "incident",
        url: '/Incident',
        type: "item",
        element: <Incident />
    },
    {
        id: "report",
        title: "report",
        url: '/Report',
        type: "item",
        element: <Report />
    },
    {
        id: "error",
        title: "error",
        url: '*',
        show: false,
        type: "item",
        element: <Error />
    }
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
