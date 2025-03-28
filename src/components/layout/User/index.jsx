import { CssBaseline, Container } from "@mui/material";
import { styled } from '@mui/material/styles';

import AppBar from "./components/AppBar.jsx";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

const BpContainer = styled(Container)(({ theme }) => ({
    minHeight: '100%',
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage: 'linear-gradient(210deg, rgba(244,238,255,1) 0%, rgba(255,255,255,1) 100%)',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

function Layout(props) {

    return (
        <>
            {/* <CssBaseline enableColorScheme /> */}
            <AppBar />
            <BpContainer>
                <Outlet />
                <Footer />
            </BpContainer>
        </>
    )
}

export default Layout;