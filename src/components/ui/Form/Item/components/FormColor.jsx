
import { TextField, Typography, Grid2, FormControlLabel, Switch } from "@mui/material";

import { MuiColorInput } from 'mui-color-input';

const Index = (props = {}) => {

    const { name = "",value = "", onChange = () => { } } = props;

    const style = {
        main: {
            flexGrow: 1
        }
    }

    const _onChange = (val) => {
        onChange({
            target: {
                name: name,
                value: val
            }
        });
    }

    return (
        <MuiColorInput format="hex" value={value} onChange={_onChange} style={style.main} />
    )
}

export default Index;