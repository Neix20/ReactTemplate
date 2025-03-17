import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '@components/material/theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';

export default function Blog(props) {
    // return (
    //     <>
    //         <AppAppBar />
    //         <Container
    //             maxWidth={"lg"}
    //             component={"main"}
    //             sx={{ display: 'flex', flexDirection: 'column', my: 2, gap: 4 }}
    //         >
    //             <MainContent />
    //             <Latest />
    //         </Container>
    //         <Footer />
    //     </>
    // )
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Container
                maxWidth={"lg"}
                component={"main"}
                sx={{ display: 'flex', flexDirection: 'column', my: 2, gap: 4 }}
            >
                <MainContent />
                <Latest />
            </Container>
            <Footer />
        </AppTheme>
    );
}
