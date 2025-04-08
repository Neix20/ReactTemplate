
import { TextField, Typography, Grid2, FormControlLabel, Switch } from "@mui/material";

import { MuiColorInput } from 'mui-color-input';

const Index = (props = {}) => {
    const { value = "", onChange = () => { } } = props;

    const style = {
        main: {
            flexGrow: 1
        }
    }

    return (
        <MuiColorInput format="hex" value={value} onChange={onChange} style={style.main} />
    )
}

export default Index;