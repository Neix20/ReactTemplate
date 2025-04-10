
import { TextField, Typography, Grid2 } from "@mui/material";

import { clsUtility } from "@utility";

import BasicFormItem from "./BasicFormItem";

const FormItem = (props = {}) => {

    const { hasLabel = false } = props;

    const { required = false, name = "", size = {} } = props;

    const style = {
        txtLabel: {
            width: { xs: "120px", sm: "135px" },
        }
    }

    const _size = {
        xs: 12, 
        sm: 6,
        ...size,
    }

    // Parameters
    const placeholder = clsUtility.capitalize(name);
    const lbl = hasLabel ? "" : placeholder;
    return (
        <Grid2 item size={_size} sx={{ display: "flex", alignItems: "center"}}>
            {hasLabel ? (<Typography sx={style.txtLabel}>{placeholder}{required ? "*" : ""}</Typography>) : (<></>)}
            <BasicFormItem label={lbl} placeholder={placeholder} {...props} />
        </Grid2>
    );
}

export default FormItem;