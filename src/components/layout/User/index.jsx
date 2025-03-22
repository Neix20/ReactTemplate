import { CssBaseline } from "@mui/material";

import AppBar from "./components/AppBar.jsx";

import { Outlet } from "react-router-dom";

function Layout(props) {

    return (
        <>
            <CssBaseline enableColorScheme />
            {/* AppBar */}
            <AppBar />
            <Outlet />
        </>
    )
}

export default Layout;