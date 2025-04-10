import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project imports
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';

import Loader from '@components/mantis/Loader';
import Breadcrumbs from '@components/mantis/@extended/Breadcrumbs';
import { handlerDrawerOpen, useGetMenuMaster } from '@hooks/mantis/menu';
import { styled } from '@mui/material';

// ==============================|| MAIN LAYOUT ||============================== //

const BxContainer = styled(Box)(({ theme }) => ({
  minHeight: '100%',
  '&::before': {
      content: '""',
      display: 'block',
      position: "absolute",
      zIndex: -1,
      inset: 0,
      // backgroundImage: 'radial-gradient(at 25% 100%, rgba(244,238,255,1), rgba(255,255,255,1))',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
          // backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
      }),
  },
}));

export default function DashboardLayout(props) {
  
  const { pathname } = useLocation();
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));

  // set media wise responsive drawer
  useEffect(() => {
    handlerDrawerOpen(!downXL);
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Drawer />

      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, 
          p: { xs: 2, sm: 3 } 
          }}>
        <Toolbar sx={{ mt: 'inherit' }} />
        <BxContainer
          sx={{
            // ...{ px: { xs: 0, sm: 2 } },
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <Breadcrumbs /> */}
          <Outlet />
          <Footer />
        </BxContainer>
      </Box>
    </Box>
  );
}
