import { useState, useEffect } from "react";

import { AppBar, Toolbar, Box, Button, IconButton, Divider, Drawer, MenuItem } from "@mui/material";
import { Menu as MenuIcon, CloseRounded as CloseRoundedIcon } from "@mui/icons-material";
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

function Index(props) {

    const { menuItems = [] } = props;

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen((_open) => !_open);
    };

    const renderItem = ({ path = "", text = "" }, ind) => (
        <Button key={`user-btn-${ind}`} component={NavLink} to={path} variant={"text"} color={"info"} size={"small"}>
            {text}
        </Button>
    )

    const renderMenuItem = ({ path = "", text = "" }, ind) => (
        <MenuItem key={`user-mobile-btn-${ind}`} onClick={toggleDrawer} component={NavLink} to={path}>{text}</MenuItem>
    )

    return (
        <AppBar position="sticky" enableColorOnDark sx={{ boxShadow: 0 }}>
            <StyledToolbar variant="dense" disableGutters>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                    {/* <Sitemark /> */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {menuItems.map(renderItem)}
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
                    <IconButton aria-label="Menu button" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="top"
                        open={open}
                        onClose={toggleDrawer}
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
                                <IconButton onClick={toggleDrawer}>
                                    <CloseRoundedIcon />
                                </IconButton>
                            </Box>
                            {menuItems.map(renderMenuItem)}
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