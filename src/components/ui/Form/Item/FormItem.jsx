
import { TextField, Typography, Grid2 } from "@mui/material";

import { clsUtility } from "@utility";

import Input from "./Input";

const FormItem = (props = {}) => {

    const { hasLabel = false, name = "", size = {} } = props;

    const placeholder = clsUtility.capitalize(name);
    const label = hasLabel ? placeholder : "";

    const _size = {
        xs: 12, 
        sm: 6,
        ...size,
    }

    return (
        <Grid2 item size={_size} sx={{ display: "flex", alignItems: "center"}}>
            <Input label={label} placeholder={placeholder} {...props} />
        </Grid2>
    );
}

export default FormItem;
