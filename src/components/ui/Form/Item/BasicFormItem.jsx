
import { TextField, Typography, Grid2 } from "@mui/material";

import { FormControl, FormLabel, FormHelperText } from "@mui/material";

import { clsUtility } from "@utility";

import FormDropdown from "./components/FormDropdown";
import FormColor from "./components/FormColor";
import FormImage from "./components/FormImage";
import FormFileUpload from "./components/FormFileUpload";

const Wrapper = (props = {}) => {

    const { children = (<></>) } = props;
    const { fullWidth = true, required = false, label = "" } = props;

    return (
        <FormControl fullWidth={fullWidth} required={required}>
            <FormLabel>{label}</FormLabel>
            {children}
        </FormControl>
    )
}



const Index = (props = {}) => {

    const { idx: key = "", name = "", value = "", type = "text", onChange = () => { } } = props;

    const { selection = [], rows = 3, required = false, readOnly = false } = props;

    const { hasLabel = false, sx = {} } = props;

    // #region Custom Attributes
    const placeholder = clsUtility.capitalize(name);
    const label = hasLabel ? placeholder : "";
    // #endregion

    const wrapperProps = {
        fullWidth: true,
        required,
        label,
        sx
    }

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

    const onChangeNum = (evt) => {
        const { name = "", value = "" } = evt.target;
        onChange({
            target: {
                name: name,
                value: Number(value)
            }
        });
    };

    const onChangeColor = (val) => {
        onChange({
            target: {
                name: name,
                value: val
            }
        });
    }

    // We Should Make This Flexible to be able to customize our own Form Item
    const elemDict = {
        "text": (
            <Wrapper {...wrapperProps}>
                <TextField type={"text"} onChange={onChange} {...inputProps} />
            </Wrapper>
        ),
        "email": (
            <Wrapper {...wrapperProps}>
                <TextField type={"text"} onChange={onChange} {...inputProps} />
            </Wrapper>
        ),
        "password": (
            <Wrapper {...wrapperProps}>
                <TextField type={"password"} onChange={onChange} {...inputProps} />
            </Wrapper>
        ),
        "textarea": (
            <Wrapper {...wrapperProps}>
                <TextField multiline rows={rows} onChange={onChange} {...inputProps} />
            </Wrapper>
        ),
        "int": (
            <Wrapper {...wrapperProps}>
                <TextField type={"number"} onChange={onChangeNum} {...inputProps} />
            </Wrapper>
        ),
        "decimal": (
            <Wrapper {...wrapperProps}>
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
            </Wrapper>
        ),
        "date": (
            <Wrapper {...wrapperProps}>
                <TextField type={"date"} onChange={onChange} {...inputProps} />
            </Wrapper>
        ),
        "dropdown": (
            <Wrapper {...wrapperProps}>
                <FormDropdown idx={key} selection={selection} onChange={onChange} {...inputProps} />
            </Wrapper>
        ),
        "color": (
            <Wrapper {...wrapperProps}>
                <FormColor onChange={onChangeColor} value={value} />
            </Wrapper>
        ),
        "file": (
            <Wrapper {...wrapperProps}>
                <FormFileUpload onChange={onChange} {...inputProps} />
            </Wrapper>
        ),
        "image": (
            <Wrapper {...wrapperProps}>
                <FormImage label={label} onChange={onChange} {...inputProps} />
            </Wrapper>
        )
    }

    return elemDict[type];
}

export default Index;