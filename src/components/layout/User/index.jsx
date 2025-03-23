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
        inset: 0,
        // backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            // backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

function Layout(props) {

    return (
        <>
            {/* <CssBaseline enableColorScheme /> */}
            <AppBar />
            <Container>
                <Outlet />
                <Footer />
            </Container>
        </>
    )
}

export default Layout;