
import Blog from "@features/blog/Blog";

const Routes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Blog />
    },
    {
      path: '/Blog',
      element: <Blog />
    }
  ]
};

export default Routes;
