import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { GlobalStyles, Images } from "@config";

function Index(props) {

    const { start = (<></>), end = (<></>), enableBack = true, sx = {} } = props;

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const style = {
        main: {
            mb: 2
        },
        ...sx
    }

    return (
        <Grid2 container alignItems={"center"} justifyContent={"space-between"} sx={style.main}>
            <Grid2 container alignItems={"center"} spacing={1}>
                {enableBack && (<IconButton onClick={goBack}><ArrowBack /></IconButton>)}
                {start}
            </Grid2>
            {end}
        </Grid2>
    )
}

export default Index;