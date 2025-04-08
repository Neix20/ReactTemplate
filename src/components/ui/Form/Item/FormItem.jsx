
import { TextField, Typography, Grid2 } from "@mui/material";

import { clsUtility } from "@utility";

import BasicFormItem from "./BasicFormItem";

const FormItem = (props = {}) => {

    const { size = {} } = props;

    const _size = {
        xs: 12, 
        sm: 6,
        ...size,
    }

    return (
        <Grid2 item size={_size} sx={{ display: "flex", alignItems: "center"}}>
            <BasicFormItem {...props} />
        </Grid2>
    );
}

export default FormItem;