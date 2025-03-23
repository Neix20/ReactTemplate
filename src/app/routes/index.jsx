import { createBrowserRouter } from 'react-router-dom';

// project imports
import AdminRoutes from './AdminRoutes';
import UserRoutes from "./UserRoutes";
import NoLayoutRoutes from "./NoLayoutRoutes";

// ==============================|| ROUTING RENDER ||============================== //

// const router = createBrowserRouter([AdminRoutes, UserRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });
const router = createBrowserRouter([AdminRoutes, UserRoutes, NoLayoutRoutes]);

export default router;