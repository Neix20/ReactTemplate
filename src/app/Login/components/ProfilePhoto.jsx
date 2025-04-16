import { useRef } from "react";

import { Grid2, Box, Tooltip, Typography, ButtonBase } from "@mui/material";

import { FileUpload } from "@mui/icons-material";

import { Images } from "@config";

function Index(props) {

    const { data = "", onChange = () => { }, sx = {} } = props;

    const { imgName = "Profile", imgData = Images.defaultAvatar } = data;

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


            onChange(_ => item);
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

    const imgArr = [
        {
            "imgName": "bgStock01",
            "imgData": Images.bgStock01
        },
        {
            "imgName": "bgStock02",
            "imgData": Images.bgStock02
        },
        {
            "imgName": "bgStock03",
            "imgData": Images.bgStock03
        },
        {
            "imgName": "bgStock04",
            "imgData": Images.bgStock04
        },
        {
            "imgName": "bgStock05",
            "imgData": Images.bgStock05
        }
    ]

    const renderItem = ({ imgName = "", imgData = "" }, ind) => {
        const _onClick = () => {
            if (fileUploadRef?.current) {
                fileUploadRef.current.value = null;
            }
            onChange(_ => ({ imgName, imgData }));
        };
        return (
            <ButtonBase onClick={_onClick}>
                <Tooltip title={`Profile-${ind}`}>
                    <Box component={"img"} src={imgData} alt={imgName} sx={style.item} />
                </Tooltip>
            </ButtonBase>
        )
    }


    return (
        <Grid2 container flexDirection={"column"} alignItems={"center"} spacing={2}>
            <Grid2 container spacing={1} justifyContent={"center"}>
                <ButtonBase onClick={onImgClick}>
                <Box component={"img"} src={imgData} alt={imgName} sx={style.main} />
                </ButtonBase>
            </Grid2>
            <Grid2 container spacing={2}
                flexWrap={"wrap"}
                justifyContent={"center"}>
                {imgArr.map(renderItem)}
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