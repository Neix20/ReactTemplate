
import { TextField, Typography, Grid2 } from "@mui/material";

import { FormControl, FormLabel, FormHelperText } from "@mui/material";

import { clsUtility } from "@utility";

import FormDropdown from "./components/FormDropdown";
import FormColor from "./components/FormColor";
import FormImage from "./components/FormImage";
import FormFileUpload from "./components/FormFileUpload";

import { Controller } from "react-hook-form";

function Wrapper(props) {

    const { name = "", label = "", control = null } = props;
    const { callBack = () => (<></>), sx = {} } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <FormControl fullWidth errors={fieldState.error} sx={sx}>
                    <FormLabel>{label}</FormLabel>
                    {callBack({ field, fieldState })}
                    <FormHelperText sx={{ color: "error.main" }}>{fieldState.error?.message}</FormHelperText>
                </FormControl>
            )}
        />
    )
}

// Add Form Validation with Error Msg
function Index(props) {

    const { name = "", type = "text", readOnly = false } = props;

    const { selection = [], rows = 3, control = null, sx = {} } = props;

    const { label = "", placeholder = "" } = props;

    const inputProps = {
        placeholder,
        slotProps: {
            input: {
                readOnly: readOnly
            }
        }
    };

    // We Should Make This Flexible to be able to customize our own Form Item
    const elemDict = {
        "text": ({ field, fieldState: { error } }) => (
            <TextField type={"text"} error={error} {...field} {...inputProps} />
        ),
        "email": ({ field, fieldState: { error } }) => (
            <TextField type={"text"} error={error} {...field} {...inputProps} />
        ),
        "password": ({ field, fieldState: { error } }) => (
            <TextField type={"password"} error={error} {...field} {...inputProps} />
        ),
        "textarea": ({ field, fieldState: { error } }) => (
            <TextField type={"text"} error={error} multiline rows={rows} {...field} {...inputProps} />
        ),
        "int": ({ field, fieldState: { error } }) => (
            <TextField type={"number"} error={error} {...field} {...inputProps} />
        ),
        "date": ({ field, fieldState: { error } }) => (
            <TextField type={"date"} error={error} {...field} {...inputProps} />
        ),
        "decimal": ({ field, fieldState: { error } }) => (
            <TextField type={"number"} error={error} {...field} {...inputProps}
                slotProps={{
                    input: {
                        inputProps: {
                            step: "0.01"
                        },
                        readOnly: readOnly
                    }
                }}
            />
        ),
        "dropdown": ({ field, fieldState: { error } }) => (
            <FormDropdown selection={selection} error={error} {...field} {...inputProps} />
        ),
        "color": ({ field, fieldState: { error } }) => (
            <FormColor error={error} {...field} {...inputProps} />
        ),
        "file": ({ field, fieldState: { error } }) => (
            <FormFileUpload error={error} {...field} {...inputProps} />
        ),
        "image": ({ field, fieldState }) => (
            <FormImage {...field} {...inputProps} />
        )
    }

    const wrapperProps = {
        name,
        control,
        label,
        sx
    };

    return (<Wrapper callBack={elemDict[type]} {...wrapperProps} />)
}

export default Index;
