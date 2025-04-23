

import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { FileUpload, Clear, Cancel } from "@mui/icons-material";

function ImagePreview(props) {

    const { name = "", value = "" } = props;
    const { onDelete = () => { } } = props;

    const style = {
        btn: {
            transition: "transform 0.2s",
            cursor: "pointer",
            "&:hover": { transform: "scale(1.05)", },
            "&:hover .remove-btn": { opacity: 1 },
            position: "relative",
        },
        img: {
            maxHeight: "300px",
            width: "100%",
            objectFit: "cover",
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
        }
    }

    return (
        <Grid2 container
            flexDirection={"column"}
            alignItems={"center"}
            sx={{ padding: 1 }}>
            <Box sx={style.btn}>
                <Box component={"img"}
                    src={value} alt={name} sx={style.img} />
                <IconButton size="small" className="remove-btn"
                    onClick={onDelete}
                    sx={style.closeIcon}>
                    <Cancel fontSize="small" />
                </IconButton>
            </Box>
        </Grid2>
    )
}

function EmptyPreview(props) {
    const { onClick = () => { } } = props;
    const style = {
        main: {
            cursor: "pointer",
            padding: 2
        }
    }
    return (
        <Grid2 onClick={onClick} container flexDirection={"column"}
            alignItems={"center"}
            sx={style.main}>
            <FileUpload fontSize={"large"} />
            <Typography variant={"body1"}>Drag and drop your images here, or click to browse</Typography>
            <Typography variant={"body2"}>Maximum file size: 5 MB</Typography>
        </Grid2>
    )
}

function Index(props) {

    const { name = "", value = "", onChange = () => { }, error = null } = props;

    const fileUploadRef = useRef(null);

    const onFileUpload = (e) => {

        if (!e.target.files) {
            alert("File Upload Error!")
            return;
        }

        const file = e.target.files?.[0]; // Get the first file

        const { name: fileName, type: fileType } = file;

        // Create a FileReader to read the file
        const reader = new FileReader();

        // Set up the onload event to handle the Base64 result
        reader.onload = (evt) => {
            const base64String = evt.target.result; // This contains the Base64 string

            const item = {
                imgName: fileName,
                imgData: base64String,
                imgType: fileType
            };

            onChange(item);
        };

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(file);
    }

    const style = {
        modalCnt: {
            flex: 1,
            width: "100%",
            border: "2px dashed",
            borderColor: error ? "red" : "grey.400",
            borderRadius: 2
        }
    }

    const onDelete = () => {
        onChange("");
        fileUploadRef.current.value = "";
    }

    const onAddImg = () => fileUploadRef?.current.click();

    return (
        <>
            <Box sx={style.modalCnt}>
                {
                    (value.length == 0) ? (
                        <EmptyPreview onClick={onAddImg} />
                    ) : (

                        <ImagePreview name={name} value={value} onDelete={onDelete} />
                    )
                }
            </Box>
            <input ref={fileUploadRef}
                hidden
                type="file"
                accept="image/*" onChange={onFileUpload} />
        </>
    );
}

export default Index;
