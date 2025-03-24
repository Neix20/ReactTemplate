
import DashboardLayout from "@components/layout/Admin";

import { Context } from "@config";

import { Dashboard, Google, QuestionMark, Article } from "@mui/icons-material";

import Incident from "@app/Admin/Incident";
// import ASample from "@app/Admin/Sample";

const menuItems = [
    {
        id: 'Admin',
        show: false,
        children: [
            {
                id: 'basic',
                title: 'Basic',
                type: 'item',
                url: '/Admin',
                element: <Incident />
            }
        ]
    },
    {
        id: 'group-incident',
        title: 'Incident',
        type: 'group',
        children: [
            {
                id: 'admin-incident',
                title: 'incident',
                type: 'item',
                url: '/Admin/Incident',
                icon: Article,
                element: <Incident />
            }
        ]
    },
    // {
    //     id: 'support',
    //     title: 'Support',
    //     type: 'group',
    //     children: [
    //         {
    //             id: 'sample-page',
    //             title: 'Sample Page',
    //             type: 'item',
    //             url: '/Admin/Sample',
    //             icon: Google,
    //             element: <ASample />
    //         },
    //         {
    //             id: 'documentation',
    //             title: 'Documentation',
    //             type: 'item',
    //             url: 'https://codedthemes.gitbook.io/mantis/',
    //             icon: QuestionMark,
    //             external: true,
    //             target: true
    //         }
    //     ]
    // }
]

const Routes = {
    path: '/Admin',
    element: (
        <Context.Admin.Provider value={{ menuItems: menuItems.filter(x => x.show != false) }}>
            <DashboardLayout />
        </Context.Admin.Provider>
    ),
    children: menuItems
        .reduce((a, b) => [...a, ...b.children], [])
        .filter(x => ("element" in x))
        .map(x => ({ ...x, path: x.url}))
};

export default Routes;
