
import { FormControlLabel, Switch } from "@mui/material";


const Index = (props = {}) => {
    const { label = "", name = "", value = "", onChange = () => { } } = props;

    return (
        <FormControlLabel
            control={
                <Switch checked={value} onChange={onChange} name={name} />
            }
            label={label}
        />
    )
}

export default Index;