
import UserLayout from "@components/layout/User";

import Home from "@app/User/Home";

import Incident from "@app/User/Incident";
import IncidentDetails from "@app/User/Incident/IncidentDetails";

import PrivacyPolicy from "@app/User/LegalDocuments";
import TermsAndConditions from "@app/User/LegalDocuments";

import Report from "@app/User/Report";

import Error from "@app/Error";

import { Context } from "@config";

const menuItems = [
    {
        id: "user-index",
        title: "index",
        url: '/',
        show: false,
        element: <Home />
    },
    {
        id: "user-home",
        title: "home",
        type: "item",
        url: '/Home',
        element: <Home />
    },
    {
        id: "user-incident",
        title: "incident",
        url: '/Incident',
        type: "item",
        element: <Incident />
    },
    {
        id: "user-incident-details",
		url: "/Incident/:IncidentId",
		text: "incident_details",
		type: "item",
		show: false,
		element: <IncidentDetails />
	},
    {
        id: "user-report",
        title: "report",
        url: '/Report',
        type: "item",
        element: <Report />
    },
    {
        id: "user-privacy-policy",
        title: "privacy_policy",
        show: false,
        url: '/privacy-policy',
        type: "item",
        element: <PrivacyPolicy />
    },
    {
        id: "user-terms-and-conditions",
        title: "terms-and-conditions",
        show: false,
        url: '/terms-and-conditions',
        type: "item",
        element: <TermsAndConditions />
    },
    {
        id: "user-error",
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
