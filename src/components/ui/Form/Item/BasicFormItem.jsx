
import { TextField, Typography, Grid2 } from "@mui/material";

import { clsUtility } from "@utility";

import BpFormDropdown from "./FormDropdown";
import BpFormFileUpload from "./FormFileUpload";
import BpFormImage from "./FormImage";
import BpFormColor from "./FormColor";
import BpFormSwitch from "./FormSwitch";

const Index = (props = {}) => {

    const { idx: key = "", name = "", value = "", type = "text", onChange = () => { } } = props;
    const { selection = [], rows = 3, required = false, readOnly = false, variant = "outlined" } = props;
    const { label = "", placeholder = "", sx = {} } = props;

    const style = {
        txtInput: {
            flexGrow: 1,
            ...sx
        }
    };

    const propsToPass = {
        name, 
        value, 
        required, 
        variant, 
        label, 
        placeholder,
        sx: style.txtInput,
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
    }

    const onChangeColor = (val) => {
        onChange({
            target: {
                name: name,
                value: val
            }
        });
    }

    const onChangeSwitch = (evt) => {

        const { name = "", checked = false } = evt.target;

        onChange({
            target: {
                name: name,
                value: checked
            }
        });
    }

    // We Should Make This Flexible to be able to customize our own Form Item
    const elemDict = {
        "text": (
            <TextField type={"text"} onChange={onChange} {...propsToPass} />
        ),
        "email": (
            <TextField type={"text"} onChange={onChange} {...propsToPass} />
        ),
        "color": (
            <BpFormColor onChange={onChangeColor} value={value} sx={style.txtInput} />
        ),
        "password": (
            <TextField type={"password"} onChange={onChange} {...propsToPass} />
        ),
        "textarea": (
            <TextField multiline rows={rows} onChange={onChange} {...propsToPass} />
        ),
        "int": (
            <TextField type={"number"} onChange={onChangeNum} {...propsToPass} />
        ),
        "decimal": (
            <TextField
                type={"number"}
                slotProps={{
                    input: {
                        inputProps: {
                            step: "0.01"
                        }
                    }
                }}
                onChange={onChangeNum}
                {...propsToPass} />
        ),
        "date": (
            <TextField type={"date"} onChange={onChange} {...propsToPass} />
        ),
        "dropdown": (
            <BpFormDropdown idx={key} selection={selection} onChange={onChange} {...propsToPass} />
        ),
        "file": (
            <BpFormFileUpload onChange={onChange} {...propsToPass} />
        ),
        "image": (
            <BpFormImage onChange={onChange} {...propsToPass} />
        ),
        "switch": (
            <BpFormSwitch onChange={onChangeSwitch} {...propsToPass} /> 
        )
    }

    return elemDict[type];
}

export default Index;