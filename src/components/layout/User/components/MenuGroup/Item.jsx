import { useState, useEffect, useContext } from "react";

import { AppBar, Toolbar, Box, Button, IconButton, Divider, Drawer, Menu, MenuItem } from "@mui/material";

import { clsUtility } from "@utility";

import { useNavigate } from "react-router-dom";

import { ArrowDropDown } from "@mui/icons-material";

function Index(props) {

    const { children = (<></>), menuItems = [] } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const renderItem = ({ url = "", title = "" }) => {

        const lbl = clsUtility.capitalize(title);

        const onClick = () => {
            navigate(url)
        }

        return (
            <MenuItem onClick={onClick}>{lbl}</MenuItem>
        )
    }

    return (
        <>
            <Button onClick={handleMouseEnter} variant={"text"} endIcon={<ArrowDropDown />}>
                {children}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseLeave}
                MenuListProps={{
                    onMouseLeave: handleMouseLeave
                }}>
                {menuItems.map(renderItem)}
            </Menu>
        </>
    )
}

export default Index;