
import { TextField, Typography, Grid2, FormControlLabel, Switch } from "@mui/material";

import { MuiColorInput } from 'mui-color-input';

const Index = (props = {}) => {
    const { value = "", onChange = () => { }, sx = {} } = props;

    return (
        <MuiColorInput format="hex" value={value} onChange={onChange} style={sx} />
    )
}

export default Index;