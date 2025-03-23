
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FormDropdown = (props = {}) => {

    const { idx: key = "", label = "", name = "", value = "", required = false } = props;
    const { selection = [], onChange = () => { }, sx = {} } = props;

    // if (selection.length == 0) {
    //     return (
    //         <Typography variant={"body1"} color={"danger.main"} sx={sx}>There are no selections provided</Typography>
    //     )
    // }

    const renderItem = ({ name = "", value = "" }) => (<MenuItem key={`${key}-${name}`} value={value}>{name}</MenuItem>);

    return (
        <FormControl variant={"outlined"} required={required} sx={sx}>
            <InputLabel>{label}</InputLabel>
            <Select onChange={onChange} name={name} value={value}>
                <MenuItem value="" disabled>
                    -- Please Select --
                </MenuItem>
                {selection.map(renderItem)}
            </Select>
        </FormControl>
    )
}

export default FormDropdown;