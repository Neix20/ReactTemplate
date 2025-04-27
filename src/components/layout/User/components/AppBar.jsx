import { useState, useEffect, useContext } from "react";

import { AppBar, Toolbar, Box, Button, IconButton, Divider, Drawer, Menu, MenuItem, Grid2 } from "@mui/material";
import { Menu as MenuIcon, CloseRounded as CloseRoundedIcon, ArrowDropDown } from "@mui/icons-material";
import { styled } from '@mui/material/styles';

import { NavLink } from 'react-router-dom';

import { ColorModeIconDropdown, BpLogo, BpLoading } from '@components';

import { Context } from "@config";

import { clsUtility } from "@utility";

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

import MenuGroupItem from "./MenuGroup/Item";
import MenuGroupMobile from "./MenuGroup/Mobile";

import Profile from "./../../Admin/Header/HeaderContent/Profile";

import { useToggle } from "@hooks";

import { Amplify } from "@libs/auth";

function Index(props) {

    const { menuItems = [] } = useContext(Context.User);

    const { flag: open, toggle: toggleDrawer } = useToggle(false);

    const renderItem = ({ url = "", title = "", type = "", children = [] }, ind) => {
        switch (type) {
            case "group":
                return (
                    <MenuGroupItem menuItems={children}>{clsUtility.capitalize(title)}</MenuGroupItem>
                )
            case "item":
            default:
                return (
                    <Button key={`user-btn-${ind}`} component={NavLink} to={url} variant={"text"} color={"info"} size={"small"}>
                        {clsUtility.capitalize(title)}
                    </Button>
                )
        }
    }

    const renderMenuItem = ({ url = "", title = "", type = "", children = [] }, ind) => {
        switch (type) {
            case "group":
                return (
                    <MenuGroupMobile menuItems={children} callback={toggleDrawer}>{clsUtility.capitalize(title)}</MenuGroupMobile>
                )
            case "item":
            default:
                return (
                    <MenuItem key={`user-mobile-btn-${ind}`} onClick={toggleDrawer} component={NavLink} to={url}>{clsUtility.capitalize(title)}</MenuItem>
                )
        }
    }

    const [signInFlag, setSignInFlag] = useState(false);
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const checkUserAuth = () => {
        setLoadingTrue();
        Amplify.isAuthenticated()
            .then(res => {
                setLoadingFalse();
                setSignInFlag(_ => true);
            })
            .catch(err => {
                setLoadingFalse();
                setSignInFlag(_ => false);
            })
    }

    useEffect(() => {
        checkUserAuth();
    }, [])

    return (
        <>
            <BpLoading loading={loading} />
            <AppBar position="sticky" enableColorOnDark sx={{ boxShadow: 0 }}>
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <BpLogo />
                        <Box sx={{ display: { xs: 'none', md: 'flex', gap: 3 } }}>
                            {menuItems?.map(renderItem)}
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                    <ColorModeIconDropdown />
                        {
                            (signInFlag) ? (
                                <Profile />
                            ) : (
                                <Button color="primary" variant="contained"
                                    size="small" component={NavLink} to={"/Login"}>Login</Button>
                            )
                        }
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
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <IconButton onClick={toggleDrawer}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                {menuItems?.map(renderMenuItem)}
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </AppBar>
        </>
    );
}

export default Index;