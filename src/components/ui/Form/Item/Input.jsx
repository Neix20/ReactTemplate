
import { TextField, Typography, Grid2 } from "@mui/material";

import { FormControl, FormLabel, FormHelperText } from "@mui/material";

import { clsUtility } from "@utility";

import FormDropdown from "./components/FormDropdown";
import FormColor from "./components/FormColor";
import FormImage from "./components/FormImage";
import FormFileUpload from "./components/FormFileUpload";

import { Controller } from "react-hook-form";

function Wrapper(props) {

    const { label = "", sx = {}, children = (<></>) } = props;
    const { errors = null } = props;

    const errTxt = errors?.message;

    return (
        <FormControl fullWidth errors={errors} sx={sx}>
            <FormLabel>{label}</FormLabel>
            {children}
            <FormHelperText sx={{ color: "error.main" }}>{errTxt}</FormHelperText>
        </FormControl>
    )
}

// Add Form Validation with Error Msg
function Index(props) {

    const { name = "", type = "text", readOnly = false } = props;

    const { register = () => { }, control = null, errors = {} } = props;

    const { selection = [], rows = 3, sx = {} } = props;

    const { label = "", placeholder = "" } = props;

    const _txtProps = {
        name,
        placeholder,
        slotProps: {
            input: {
                readOnly: readOnly
            }
        },
        ...register(name, {
            valueAsNumber: ["int", "decimal"].includes(type),
        }),
        error: errors[name],
    };

    // We Should Make This Flexible to be able to customize our own Form Item
    const elemDict = {
        "text": (
            <TextField type={"text"} {..._txtProps} />
        ),
        "email": (
            <TextField type={"text"} {..._txtProps} />
        ),
        "password": (
            <TextField type={"password"} {..._txtProps} />
        ),
        "textarea": (
            <TextField multiline rows={rows} {..._txtProps} />
        ),
        "int": (
            <TextField type={"number"} {..._txtProps} />
        ),
        "decimal": (
            <TextField type={"number"} {..._txtProps}
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
        "date": (
            <TextField type={"date"} {..._txtProps} />
        ),
        "dropdown": (
            <Controller name={name}
                control={control}
                render={({ field }) => (
                    <FormDropdown 
                        placeholder={placeholder} selection={selection} 
                        error={errors[name]} 
                        {...field} />
                )} />
        ),
        "color": (
            <Controller
                name={name}
                control={control}
                render={({ field }) => (<FormColor error={errors[name]} {...field} />)}
            />
        ),
        "file": (
            <Controller
                name={name}
                control={control}
                render={({ field }) => (<FormFileUpload error={errors[name]} {...field} />)}
            />
        ),
        "image": (
            <Controller
                name={name}
                control={control}
                render={({ field }) => (<FormImage {...field} />)}
            />
        )
    }

    const wrapperProps = {
        label,
        errors: errors[name],
        sx
    };

    return (
        <Wrapper {...wrapperProps}>
            {elemDict[type]}
        </Wrapper>
    );
}

export default Index;
