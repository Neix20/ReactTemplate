import * as React from 'react';

import { AppBar, Toolbar, Box, Button, IconButton, Divider, Drawer, MenuItem } from "@mui/material";
import { MenuIcon, CloseRoundedIcon } from "@mui/icons-material";
import { styled } from '@mui/material/styles';

import { NavLink } from 'react-router-dom';

import { ColorModeIconDropdown } from '@components';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel})`,
  padding: "12px 8px"
}));

function Index() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="sticky" enableColorOnDark sx={{ boxShadow: 0 }}>
      <StyledToolbar variant="dense" disableGutters>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
          {/* <Sitemark /> */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button size="small" to={"/Blog"} component={NavLink}>
              Blog
            </Button>
            <Button variant="text" color="info" size="small">
              Testimonials
            </Button>
            <Button variant="text" color="info" size="small">
              Highlights
            </Button>
            <Button variant="text" color="info" size="small">
              Pricing
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              FAQ
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              Blog
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          <Button color="primary" variant="contained" size="small">
            Sign up
          </Button>
          <ColorModeIconDropdown />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
          <ColorModeIconDropdown size="medium" />
          <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                top: 'var(--template-frame-height, 0px)',
              },
            }}
          >
            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
              <MenuItem>Features</MenuItem>
              <MenuItem>Testimonials</MenuItem>
              <MenuItem>Highlights</MenuItem>
              <MenuItem>Pricing</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Blog</MenuItem>
              <Divider sx={{ my: 3 }} />
              <MenuItem>
                <Button color="primary" variant="contained" fullWidth>
                  Sign up
                </Button>
              </MenuItem>
            </Box>
          </Drawer>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}

export default Index;