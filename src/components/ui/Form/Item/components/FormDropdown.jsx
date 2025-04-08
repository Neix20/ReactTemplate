
import { Typography, FormControl, InputLabel, TextField, Select, MenuItem } from "@mui/material";

const FormDropdown = (props = {}) => {

    const { name = "", value = "", placeholder = "" } = props;
    const { selection = [], onChange = () => { } } = props;

    const renderItem = ({ name = "", value = "" }) => (<MenuItem value={value}>{name}</MenuItem>);

    return (
        <Select displayEmpty onChange={onChange} name={name} value={value}>
            <MenuItem value="" disabled>
                {placeholder}
            </MenuItem>
            {selection.map(renderItem)}
        </Select>
    )
}

export default FormDropdown;