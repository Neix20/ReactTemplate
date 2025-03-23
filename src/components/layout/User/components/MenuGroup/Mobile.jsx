import { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { MenuItem, Grid2, Collapse } from "@mui/material";
// import { alpha, useTheme } from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { clsUtility } from "@utility";
import { useToggle } from "@hooks";

function Index(props) {

    const { children = (<></>), menuItems = [] } = props;

    const navigate = useNavigate();
    // const theme = useTheme();

    const { flag, toggle } = useToggle(false);

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
            <Grid2 container 
                onClick={toggle}
                alignItems={"center"} justifyContent={"space-between"}>
                <MenuItem>{children}</MenuItem>
                {(flag) ? (<ExpandLess />) : (<ExpandMore />)}
            </Grid2>
            <Collapse in={flag}>{menuItems.map(renderItem)}</Collapse>
        </>
    )
}

export default Index;