
import DashboardLayout from "@features/Dashboard";

function Dashboard(props) {
  return (<></>)
}

function Sample(props) {
  return (<></>)
}

const Routes = {
  path: '/Admin',
  element: <DashboardLayout />,
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
