
import { Typography, FormControl, InputLabel, TextField, Select, MenuItem } from "@mui/material";

const FormDropdown = (props = {}) => {

    const { idx: key = "", name = "", value = "", placeholder = "" } = props;
    const { selection = [], onChange = () => { } } = props;

    const renderItem = ({ name = "", value = "" }) => (<MenuItem key={`${key}-${name}`} value={value}>{name}</MenuItem>);

    return (
        <Select onChange={onChange} name={name} value={value}>
            <MenuItem value="" disabled>
                {placeholder}
            </MenuItem>
            {selection.map(renderItem)}
        </Select>
    )
}

export default FormDropdown;