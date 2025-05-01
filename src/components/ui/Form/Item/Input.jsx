
import { TextField, Typography, Grid2 } from "@mui/material";

import { FormControl, FormLabel, FormHelperText } from "@mui/material";

import { clsUtility } from "@utility";

import MultiDropdown from "./components/Dropdown/Multi";
import SingleDropdown from "./components/Dropdown/Single";

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

    const { name = "", type = "text", control = null } = props;
    const { label = "", placeholder = "" } = props;
    const { selection = [], rows = 3, formatOptionLabel, sx = {} } = props;

    // We Should Make This Flexible to be able to customize our own Form Item
    const elemDict = {
        "text": ({ field = {}, error = null }) => (
            <TextField type={"text"} placeholder={placeholder} error={error} {...field} />
        ),
        "password": ({ field = {}, error = null }) => (
            <TextField type={"password"} placeholder={placeholder} error={error} {...field} />
        ),
        "textarea": ({ field = {}, error = null }) => (
            <TextField type={"text"} placeholder={placeholder} error={error} {...field}
                multiline rows={rows}
            />
        ),
        "int": ({ field = {}, error = null }) => (
            <TextField type={"number"} placeholder={placeholder} error={error} {...field} onChange={(evt) => field.onChange(Number(evt.target.value))} />
        ),
        "date": ({ field = {}, error = null }) => (
            <TextField type={"date"} placeholder={placeholder} error={error} {...field} />
        ),
        "decimal": ({ field = {}, error = null }) => (
            <TextField type={"number"} placeholder={placeholder} error={error} {...field}
                onChange={(evt) => field.onChange(Number(evt.target.value))}
                slotProps={{
                    input: {
                        inputProps: {
                            step: "0.01"
                        }
                    }
                }}
            />
        ),
        "dropdown": ({ field = {}, error = null }) => (
            <SingleDropdown selection={selection} placeholder={placeholder} error={error} {...field} />
        ),
        "multi-dropdown": ({ field = {}, error = null }) => (
            <MultiDropdown selection={selection} placeholder={placeholder} error={error} formatOptionLabel={formatOptionLabel} {...field} />
        ),
        "color": ({ field = {}, error = null }) => (
            <FormColor placeholder={placeholder} error={error} {...field} />
        ),
        "file": ({ field = {}, error = null }) => (
            <FormFileUpload placeholder={placeholder} error={error} {...field} />
        ),
        "image": ({ field = {}, error = null }) => (
            <FormImage placeholder={placeholder} error={error} {...field} />
        )
    }

    const wrapperProps = {
        name,
        label,
        control,
        sx
    };

    return (<Wrapper callBack={elemDict[type]} {...wrapperProps} />)
}

export default Index;
