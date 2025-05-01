import { useRef } from "react";

import { Grid2, Box, Tooltip, Typography, ButtonBase } from "@mui/material";

import { FileUpload } from "@mui/icons-material";

import { Images } from "@config";

import { BpLoading } from "@components";
import { useToggle } from "@hooks";
import { fetchUserProfilePhoto } from "@api";

function Index(props) {

    const { name = "", value = {}, onChange = () => { }, images = [], sx = {} } = props;

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const { fileName = "Profile", fileData = Images.defaultAvatar } = value;

    const fileUploadRef = useRef(null);

    const onFileUpload = (e) => {

        if (!e.target.files) {
            alert("File Upload Error!")
            return;
        }

        const file = e.target.files?.[0]; // Get the first file

        const { name: fileName, type: fileType, size: fileSize } = file;

        // Create a FileReader to read the file
        const reader = new FileReader();

        // Set up the onload event to handle the Base64 result
        reader.onload = (evt) => {
            const base64String = evt.target.result; // This contains the Base64 string

            const item = {
                fileName,
                fileData: base64String,
                fileType,
                fileSize
            };

            // todo: Add Logic Here
            setLoadingTrue();
            fetchUserProfilePhoto(item)
            .then(res => {

                setLoadingFalse();

                const { data = "" } = res;
                item["fileData"] = data;

                onChange(item);
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
        };

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(file);
    };

    const onImgClick = () => fileUploadRef?.current.click();

    const style = {
        main: {
            width: "128px",
            height: "128px",
            borderRadius: "64px",
        },
        item: {
            width: "64px",
            height: "64px",
            borderRadius: "32px"
        },
        ...sx
    };

    const renderItem = ({ fileName = "", fileData = "" }, ind) => {
        const _onClick = () => {
            if (fileUploadRef?.current) {
                fileUploadRef.current.value = null;
            }
            onChange({ fileName, fileData });
        };
        return (
            <ButtonBase onClick={_onClick}>
                <Tooltip title={`Profile-${ind}`}>
                    <Box component={"img"} src={fileData} alt={fileName} sx={style.item} />
                </Tooltip>
            </ButtonBase>
        )
    }


    return (
        <Grid2 container flexDirection={"column"} alignItems={"center"} spacing={2}>
            <BpLoading loading={loading} />
            <Grid2 container spacing={1} justifyContent={"center"}>
                <ButtonBase onClick={onImgClick}>
                <Box component={"img"} src={fileData} alt={fileName} sx={style.main} />
                </ButtonBase>
            </Grid2>
            <Grid2 container spacing={2}
                flexWrap={"wrap"}
                justifyContent={"center"}>
                {images.map(renderItem)}
            </Grid2>
            <input ref={fileUploadRef}
                hidden
                type="file"
                accept="image/*"
                onChange={onFileUpload} />
        </Grid2>
    );
}

export default Index;