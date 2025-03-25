
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FormDropdown = (props = {}) => {

    const { idx: key = "", placeholder = "", name = "", value = "", required = false } = props;
    const { selection = [], onChange = () => { }, sx = {} } = props;

    // if (selection.length == 0) {
    //     return (
    //         <Typography variant={"body1"} color={"danger.main"} sx={sx}>There are no selections provided</Typography>
    //     )
    // }

    const renderItem = ({ name = "", value = "" }) => (<MenuItem key={`${key}-${name}`} value={value}>{name}</MenuItem>);

    return (
        <FormControl variant={"outlined"} required={required} sx={sx}>
            <Select displayEmpty onChange={onChange} name={name} value={value}>
                <MenuItem value="" disabled>
                    {placeholder}
                </MenuItem>
                {selection.map(renderItem)}
            </Select>
        </FormControl>
    )
}

export default FormDropdown;