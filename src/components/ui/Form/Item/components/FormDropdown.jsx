
import Select from 'react-select';

const FormDropdown = (props = {}) => {

    const { placeholder = "", selection = [], ..._props } = props;

    return (
        <Select
            isClearable={true}
            isSearchable={true}
            options={selection}
            placeholder={placeholder}
            {..._props}
        />
    );
}

export default FormDropdown;
