
import { TextField, Typography, Grid2 } from "@mui/material";

import { clsUtility } from "@utility";

import BasicFormItem from "./BasicFormItem";

const FormItem = (props = {}) => {

    const { size = 2, hasLabel = false } = props;

    const { required = false, name = "" } = props;

    const style = {
        txtLabel: {
            width: 120,
        }
    }

    // Parameters
    const lbl = clsUtility.capitalize(name);

    const sz = Math.floor(12 / size);

    return (
        <Grid2 container size={sz} alignItems={"center"}>
            {hasLabel ? (<Typography sx={style.txtLabel}>{lbl}{required ? "*" : ""}</Typography>) : (<></>)}
            <BasicFormItem {...props} label={lbl} />
        </Grid2>
    );
}

export default FormItem;