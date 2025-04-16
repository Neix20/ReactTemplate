
import { InputLabel, Select, MenuItem } from "@mui/material";

const FormDropdown = (props = {}) => {

    const { placeholder = "", selection = [], value = "", ..._props } = props;

    const renderItem = ({ name = "", value = "" }) => (<MenuItem value={value}>{name}</MenuItem>);

    return (
        // <Select displayEmpty {..._props}>
        <Select displayEmpty value={value} {..._props}>
            <MenuItem value="" disabled>
                {placeholder}
            </MenuItem>
            {selection.map(renderItem)}
        </Select>
    )
}

export default FormDropdown;
