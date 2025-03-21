import { Box, Grid2, Toolbar, CssBaseline } from "@mui/material";

import AppBar from "./components/AppBar.jsx";

import { Outlet } from "react-router-dom";

function Layout(props) {

    const { menuItems = [] } = props;

    return (
        <>
            <CssBaseline enableColorScheme />
            {/* AppBar */}
            <AppBar menuItems={menuItems.filter(x => x.show != false)} />
            <Outlet />
        </>
    )
}

export default Layout;