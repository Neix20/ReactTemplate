
import { Select, MenuItem } from "@mui/material";

import { clsUtility } from "@utility";

const Index = (props = {}) => {

    const { placeholder = "", selection = [], value = "", ..._props } = props;

    const renderItem = ({ label = "", value = "" }) => (<MenuItem value={value}>{clsUtility.capitalize(label)}</MenuItem>);

    return (
        <Select displayEmpty value={value} {..._props}>
            <MenuItem value="" disabled>
                {placeholder}
            </MenuItem>
            {selection.map(renderItem)}
        </Select>
    )
}

export default Index;
