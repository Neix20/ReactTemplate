import { useState } from "react";
import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Modal } from "@mui/material";
import { ArrowBack, ArrowForward, Close, Cancel } from "@mui/icons-material";

function Index(props) {

    const { fileName = "", fileData = "" } = props;
    const { onDelete = () => { }, onClick = () => {}, sx={} } = props;

    const style = {
        main: {
            transition: "transform 0.2s",
            cursor: "pointer",
            "&:hover": {
                transform: "scale(1.05)",
            },
            "&:hover .remove-btn": { opacity: 1 },
            position: "relative",
        },
        img: {
            width: { xs: "120px", sm: "128px" },
            height: "128px",
            borderRadius: "8px",
        },
        closeIcon: {
            position: "absolute",
            top: -12,
            right: -16,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            opacity: 0,
            transition: "opacity 0.2s",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
        },
        ...sx
    }

    return (
        <Box sx={style.main}>
            <Box component={"img"} onClick={onClick}
                src={fileData} alt={fileName} sx={style.img} />
            <IconButton size="small" className="remove-btn"
                onClick={onDelete}
                sx={style.closeIcon}>
                <Cancel fontSize="small" />
            </IconButton>
        </Box>
    )
}

export default Index;