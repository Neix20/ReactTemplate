
import Select from 'react-select';

import { useColorScheme } from '@mui/material';

function getThemeStyle(mode = "single") {

    const styles = {
        "single": {
            singleValue: (base) => ({ ...base, color: "#fff" }),
            valueContainer: (base) => ({
                ...base,
                // background: colourOptions[2].color,
                //placeholder color
                color: "hotpink",
                width: "100%"
            }),
            control: (base, state) => ({
                ...base,
                background: "#121212"
            })
        },
        "multi": {
            singleValue: (base) => ({ ...base, color: "#fff" }),
            valueContainer: (base) => ({
                ...base,
                // background: colourOptions[2].color,
                //placeholder color
                color: "#fff",
                width: "100%"
            }),
            control: (base, state) => ({
                ...base,
                background: "#121212"
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                // const color = chroma(data.color);
                return {
                    ...styles,
                    ":active": {
                        ...styles[":active"],
                        backgroundColor: "#fff"
                    }
                };
            },
            multiValue: (styles, { data }) => {
                // const color = chroma(data.color);
                return {
                    ...styles,
                    backgroundColor: "#ccc" // the bg color behind icon
                };
            },
            multiValueLabel: (styles) => ({
                ...styles,
                color: "#000", // lable text color
                background: "#fff" // lable bg behined selected
            }),
            multiValueRemove: (styles) => ({
                ...styles,
                color: "#12121",
                ":hover": {
                    backgroundColor: "#fff", // on hover x bg color
                    color: "#000" // on hover x icon color
                }
            })
        }
    };

    const theme = (theme) => ({
        ...theme,
        // borderRadius: 0,
        colors: {
            ...theme.colors,
            /*
             * control/backgroundColor
             * menu/backgroundColor
             * option/color(selected)
             */
            // neutral0: "#000",

            neutral0: "#000",
            neutral30: "lightblue", //control/borderColor(focused)
            neutral80: "#FFF", //input color
            primary: "#bfbfbf", //option bg color selected
            primary25: "#434343", //option bg color focued
        }
    });

    return { styles: styles[mode], theme }
}

const FormDropdown = (props = {}) => {

    const { placeholder = "", selection = [], isMulti = false, ..._props } = props;

    const { mode } = useColorScheme();

    // Style Selector Based on Themes

    if (mode === "light") {
        return (
            <Select
                isMulti={isMulti}
                isClearable={true}
                isSearchable={true}
                options={selection}
                placeholder={placeholder}
                {..._props}
            />
        )
    }

    const { styles, theme } = getThemeStyle(isMulti ? "multi" : "single");

    return (
        <Select
            isMulti={isMulti}
            isClearable={true}
            isSearchable={true}
            options={selection}
            placeholder={placeholder}
            styles={styles}
            theme={theme}
            {..._props}
        />
    );

}

export default FormDropdown;
