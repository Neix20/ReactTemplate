// material-ui
import { alpha, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

// project imports
import { clsConst } from '@config';
const { DRAWER_WIDTH } = clsConst;

const openedMixin = (theme) => ({
  width: DRAWER_WIDTH,
  borderRight: '1px solid',
  borderRightColor: theme.palette.divider,

  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),

  overflowX: 'hidden',
  boxShadow: 'none',
  // ...theme.applyStyles('dark', { boxShadow: `0px 2px 8px ${alpha('hsl(220, 35%, 3%)', 0.15)}` })
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),

  overflowX: 'hidden',
  width: theme.spacing(7.5),
  borderRight: 'none',
  boxShadow: `0px 2px 8px ${alpha('hsl(220, 35%, 3%)', 0.15)}`
});

// ==============================|| DRAWER - MINI STYLED ||============================== //

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
      }
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
      }
    }
  ]
}));

export default MiniDrawerStyled;
