
import DashboardLayout from "@features/Dashboard";

import { Context } from "@config";

import { Dashboard, Google, QuestionMark } from "@mui/icons-material";

function ADashboard(props) {
    return (<></>)
}

function Sample(props) {
    return (<></>)
}

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
                element: <ADashboard />
            }
        ]
    },
    {
        id: 'group-dashboard',
        title: 'Navigation',
        type: 'group',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                url: '/Admin/Dashboard',
                icon: Dashboard,
                breadcrumbs: true,
                element: <ADashboard />
            }
        ]
    },
    {
        id: 'support',
        title: 'Support',
        type: 'group',
        children: [
            {
                id: 'sample-page',
                title: 'Sample Page',
                type: 'item',
                url: '/Admin/Sample',
                icon: Google,
                element: <Sample />
            },
            {
                id: 'documentation',
                title: 'Documentation',
                type: 'item',
                url: 'https://codedthemes.gitbook.io/mantis/',
                icon: QuestionMark,
                external: true,
                target: true
            }
        ]
    }
]

const Routes = {
    path: '/Admin',
    element: (
        <Context.Admin.Provider value={{ 
            menuItems: menuItems.filter(x => x.show != false)
        }}>
            <DashboardLayout />
        </Context.Admin.Provider>
    ),
    children: menuItems
        .reduce((a, b) => [...a, ...b.children], [])
        .filter(x => ("element" in x))
        .map(x => ({ ...x, path: x.url}))
};

export default Routes;
