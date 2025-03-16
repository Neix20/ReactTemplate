import { createBrowserRouter } from 'react-router-dom';

// project imports
import AdminRoutes from './AdminRoutes';
import CustomerRoutes from "./CustomerRoutes";

// ==============================|| ROUTING RENDER ||============================== //

// const router = createBrowserRouter([AdminRoutes, CustomerRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });
const router = createBrowserRouter([AdminRoutes, CustomerRoutes]);

export default router;