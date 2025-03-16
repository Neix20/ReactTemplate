
import DashboardLayout from "@features/Dashboard";

function Dashboard(props) {
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
    }
  ]
};

export default Routes;
