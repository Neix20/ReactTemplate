import { useRef } from "react";

import { Grid2, Typography, FormHelperText } from "@mui/material";

import { FileUpload } from "@mui/icons-material";

function Index(props) {

    const { onAdd = () => { }, error = null, sx = {} } = props;

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
            }

            onAdd(item);
        };

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(file);
    }

    const style = {
        modalCnt: {
            cursor: "pointer",
            border: "2px dashed",
            borderColor: error ? "red" : "grey.400",
            borderRadius: 2,
            padding: 3
        }
    }

    return (
        <>
            <Grid2 onClick={_ => fileUploadRef?.current.click()}
                container flexDirection={"column"}
                spacing={1}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    ...style.modalCnt,
                    ...sx
                }}>
                <FileUpload fontSize={"large"} />
                <Typography variant={"body1"}>Drag and drop your images here, or click to browse</Typography>
                <Typography variant={"body2"}>Maximum file size: 5 MB</Typography>
            </Grid2>
            <FormHelperText sx={{ color: "error.main" }}>{error?.message}</FormHelperText>
            <input ref={fileUploadRef}
                hidden
                type="file"
                accept="image/*" onChange={onFileUpload} />
        </>
    );
}

export default Index;