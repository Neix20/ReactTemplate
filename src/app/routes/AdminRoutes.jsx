
import DashboardLayout from "@components/layout/Admin";

import { Context } from "@config";

import { Settings, PersonOff, Article, AssignmentTurnedIn, SmartToy } from "@mui/icons-material";

import Incident from "@app/Admin/Incident";
import IncidentDetails from "@app/Admin/Incident/IncidentDetails";

import IpSeries from "@app/Admin/IpSeries";
import IpSeriesDetails from "@app/Admin/IpSeries/IpSeriesDetails";

import Approve from "@app/Admin/Approve";

import Scammer from "@app/Admin/Scammer";
import ScammerDetails from "@app/Admin/Scammer/ScammerDetails";
import ScammerAttr from "@app/Admin/Scammer/ScammerAttr";
// import ASample from "@app/Admin/Sample";

import Error from "@app/Error";

const menuItems = [
    {
        id: 'general',
        title: 'Admin',
        type: 'group',
        children: [
            {
                id: "admin-error",
                title: "error",
                url: '/Admin/*',
                show: false,
                type: "item",
                element: <Error />
            },
            {
                id: 'basic',
                title: 'Basic',
                type: 'item',
                show: false,
                url: '/Admin',
                element: <Scammer />
            },
            {
                id: 'admin-scammer',
                title: 'Scammer',
                type: 'item',
                url: '/Admin/Scammer',
                icon: PersonOff,
                element: <Scammer />
            },
            {
                id: 'admin-scammer-details',
                show: false,
                url: '/Admin/Scammer/:ScammerId',
                element: <ScammerDetails />
            },
            {
                id: 'admin-scammer-attribute',
                show: false,
                url: '/Admin/Scammer/:ScammerId/ScammerAttr/:ScammerAttrId',
                element: <ScammerAttr />
            },
            {
                id: 'admin-incident',
                title: 'Incident',
                type: 'item',
                url: '/Admin/Incident',
                icon: Article,
                element: <Incident />
            },
            {
                id: 'admin-incident-details',
                show: false,
                url: '/Admin/Incident/:IncidentId',
                element: <IncidentDetails />
            },
            {
                id: 'admin-approve',
                title: 'Approve',
                type: 'item',
                url: '/Admin/Approve',
                icon: AssignmentTurnedIn,
                element: <Approve />
            },
            {
                id: 'admin-ip-series',
                title: 'IP Series',
                type: 'item',
                url: '/Admin/IpSeries',
                icon: SmartToy,
                element: <IpSeries />
            },
            {
                id: 'admin-ip-series-details',
                show: false,
                url: '/Admin/IpSeries/:IpSeriesId',
                element: <IpSeriesDetails />
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
        <Context.Admin.Provider value={{ menuItems: menuItems.map(x => ({...x, children: x.children.filter(x => x.show != false)})).filter(x => x.show != false) }}>
            <DashboardLayout />
        </Context.Admin.Provider>
    ),
    children: menuItems
        .reduce((a, b) => [...a, ...b.children], [])
        .filter(x => ("element" in x))
        .map(x => ({ ...x, path: x.url}))
};

export default Routes;
