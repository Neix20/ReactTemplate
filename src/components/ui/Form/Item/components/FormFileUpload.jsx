

import { useState, useEffect } from "react";

import { Grid2, TextField, IconButton, Button } from "@mui/material";

import { FileUploadOutlined, Clear } from "@mui/icons-material";

function Index(props) {

    const { value = "", onChange = () => { }, error = false } = props;

    const [fileData, setFileData] = useState("");

    const style = {
        body: {
            flexGrow: 1,
        },
        btnUpload: {
            borderRadius: 0,
            width: 120,
        },
        txtFileOutput: {
            width: "100%"
        }
    };

    useEffect(() => {
        if (!value) {
            setFileData(_ => "");
        }
    }, [value]);

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

            setFileData(_ => fileName);
            
            const item = {
                fileName,
                fileData: base64String,
                fileType,
                fileSize
            };

            onChange(item);
        };

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(file);
    }

    const onClear = () => {
        onChange("");
    }

    return (
        <Grid2 container sx={style.body}>
            <Button
                component={"label"}
                variant={"contained"}
                startIcon={<FileUploadOutlined />}
                sx={style.btnUpload}>Upload
                <input hidden type={"file"} onChange={onFileUpload} />
            </Button>
            <Grid2 size={"grow"}>
                <TextField type={"text"}
                    placeholder={"No File Uploaded"}
                    variant={"outlined"}
                    value={fileData}
                    error={error}
                    slotProps={{
                        input: {
                            readOnly: true,
                            endAdornment: fileData && (
                                <IconButton onClick={onClear} component="label">
                                    <Clear />
                                </IconButton>
                            )
                        }
                    }}
                    sx={style.txtFileOutput}
                />
            </Grid2>

        </Grid2>
    )
}

export default Index;
