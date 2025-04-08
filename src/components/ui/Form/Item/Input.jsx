
import { TextField, Typography, Grid2 } from "@mui/material";

import { FormControl, FormLabel, FormHelperText } from "@mui/material";

import { clsUtility } from "@utility";

import FormDropdown from "./components/FormDropdown";
import FormColor from "./components/FormColor";
import FormImage from "./components/FormImage";
import FormFileUpload from "./components/FormFileUpload";

function Wrapper(props) {
    const { label = "", children = (<></>) } = props;
    const { fullWidth = true, required = false, sx = {} } = props;

    return (
        <FormControl fullWidth={fullWidth} required={required} sx={sx}>
            <FormLabel>{label}</FormLabel>
            {children}
        </FormControl>
    )
}

const Index = (props = {}) => {

    const { name = "", value = "", type = "text", onChange = () => { } } = props;
    const { selection = [], rows = 3, required = false, readOnly = false } = props;
    const { hasLabel = false, sx = {} } = props;

    // #region Custom Attributes
    const placeholder = clsUtility.capitalize(name);
    const label = hasLabel ? placeholder : "";
    // #endregion

    // #region Actions
    const onChangeNum = (evt) => {
        const { name = "", value = "" } = evt.target;
        onChange({
            target: {
                name: name,
                value: Number(value)
            }
        });
    };
    // #endregion

    const inputProps = {
        name,
        value,
        placeholder,
        slotProps: {
            input: {
                readOnly: readOnly
            }
        }
    }

    // We Should Make This Flexible to be able to customize our own Form Item
    const elemDict = {
        "text": (
            <TextField type={"text"} onChange={onChange} {...inputProps} />
        ),
        "email": (
            <TextField type={"text"} onChange={onChange} {...inputProps} />
        ),
        "password": (
            <TextField type={"password"} onChange={onChange} {...inputProps} />
        ),
        "textarea": (
            <TextField multiline rows={rows} onChange={onChange} {...inputProps} />
        ),
        "int": (
            <TextField type={"number"} onChange={onChangeNum} {...inputProps} />
        ),
        "decimal": (
            <TextField type={"number"} onChange={onChangeNum} {...inputProps}
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
            <TextField type={"date"} onChange={onChange} {...inputProps} />
        ),
        "dropdown": (
            <FormDropdown selection={selection} onChange={onChange} {...inputProps} />
        ),
        "color": (
            <FormColor onChange={onChange} {...inputProps} />
        ),
        "file": (
            <FormFileUpload onChange={onChange} {...inputProps} />
        ),
        "image": (
            <FormImage label={label} onChange={onChange} {...inputProps} />
        )
    }

    const wrapperProps = {
        fullWidth: true,
        required,
        label,
        sx
    }

    return (
        <Wrapper {...wrapperProps}>
            {elemDict[type]}
        </Wrapper>
    );
}

export default Index;