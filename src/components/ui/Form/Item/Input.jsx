
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
            render={({ field, fieldState: { error } }) => {
                return (
                    <FormControl fullWidth errors={error} sx={sx}>
                        <FormLabel>{label}</FormLabel>
                        {callBack({ field, error })}
                        <FormHelperText sx={{ color: "error.main" }}>{error?.message}</FormHelperText>
                    </FormControl>
                )
            }}
        />
    )
}

// Add Form Validation with Error Msg
function Index(props) {

    const { name = "", type = "text", readOnly = false, required = false } = props;
    const { control = null, sx = {} } = props;
    const { label = "", placeholder = "", selection = [], rows = 3 } = props;

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
        "text": ({ field, error }) => (
            <TextField type={"text"} error={error} {...field} {...inputProps} />
        ),
        "email": ({ field, error }) => (
            <TextField type={"text"} error={error} {...field} {...inputProps} />
        ),
        "password": ({ field, error }) => (
            <TextField type={"password"} error={error} {...field} {...inputProps} />
        ),
        "textarea": ({ field, error }) => (
            <TextField type={"text"} error={error} {...field} {...inputProps}
                multiline rows={rows}
            />
        ),
        "int": ({ field, error }) => (
            <TextField type={"number"} error={error} {...field} onChange={(evt) => field.onChange(Number(evt.target.value))} {...inputProps} />
        ),
        "date": ({ field, error }) => (
            <TextField type={"date"} error={error} {...field} {...inputProps} />
        ),
        "decimal": ({ field, error }) => (
            <TextField type={"number"} error={error} {...field} {...inputProps}
                onChange={(evt) => field.onChange(Number(evt.target.value))}
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
        "dropdown": ({ field, error }) => (
            <FormDropdown selection={selection} error={error} {...field} {...inputProps} />
        ),
        "color": ({ field, error }) => (
            <FormColor error={error} {...field} {...inputProps} />
        ),
        "file": ({ field, error }) => (
            <FormFileUpload error={error} {...field} {...inputProps} />
        ),
        "image": ({ field, error }) => (
            <FormImage error={error} {...field} {...inputProps} />
        )
    }

    const wrapperProps = {
        name,
        label,
        control,
        required,
        sx
    };

    return (<Wrapper callBack={elemDict[type]} {...wrapperProps} />)
}

export default Index;
