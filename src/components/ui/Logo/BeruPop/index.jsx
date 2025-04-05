
import { useState, useEffect } from "react";

import { useTheme, Box } from '@mui/material';
import { Images } from "@config"

function Index(props) {

    const theme = useTheme();

    const imgSrc = theme.palette.mode == "dark" ? Images.BeruPopLogoLight : Images.BeruPopLogoDark;

    const style = {
        main: {
            width: "100px",
            objectFit: 'cover',
        }
    }

    return (
        <Box component={"img"} src={imgSrc} alt={"BeruPop"} sx={style.main} />
    );
}

export default Index;