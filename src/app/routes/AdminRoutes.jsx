
import DashboardLayout from "@features/Dashboard";

import { createContext } from "react";

const Context = createContext();

function Dashboard(props) {
  return (<></>)
}

function Sample(props) {
  return (<></>)
}

const menuItems = [
  "Gay"
]

const Routes = {
  path: '/Admin',
  element: (
    <Context.Provider value={[menuItems]}>
    <DashboardLayout />
  </Context.Provider>
  ),
  children: [
    {
      path: '/Admin',
      element: <Dashboard />
    },
    {
      path: '/Admin/Dashboard',
      element: <Dashboard />
    },
    {
      path: '/Admin/Sample',
      element: <Sample />
    }
  ]
};

export default Routes;
