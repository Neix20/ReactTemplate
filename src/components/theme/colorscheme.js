
import { blue, red, green, cyan, amber } from '@mui/material/colors';

export const genColorTempl = (arr, contrastText = "#fff") => ({
    0: arr[0],
    50: arr[1],
    100: arr[2],
    200: arr[3],
    300: arr[4],
    400: arr[5],
    500: arr[6],
    600: arr[7],
    700: arr[8],
    800: arr[9],
    900: arr[10],
    A100: arr[11],
    A200: arr[12],
    A400: arr[13],
    A700: arr[14],
    lighter: arr[0],
    light: arr[3],
    main: arr[5],
    dark: arr[6],
    darker: arr[8],
    contrastText
});

export const ColorScheme = () => {

    const greyPrimary = ["hsl(220, 35%, 97%)", "hsl(220, 30%, 94%)", "hsl(220, 20%, 88%)", "hsl(220, 20%, 80%)", "hsl(220, 20%, 65%)", "hsl(220, 20%, 42%)", "hsl(220, 20%, 35%)", "hsl(220, 20%, 25%)", "hsl(220, 30%, 6%)", "hsl(220, 35%, 3%)"];
    const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
    const greyConstant = ['#fafafb', '#e6ebf1'];

    const grey = genColorTempl([...greyPrimary, ...greyAscent, ...greyConstant], greyPrimary[2]);

    const _obj = {
        palette: {
            primary: genColorTempl(Object.values(blue)),
            secondary: grey,
            info: genColorTempl(Object.values(cyan)),
            warning: genColorTempl(Object.values(amber)),
            error: genColorTempl(Object.values(red)),
            success: genColorTempl(Object.values(green)),
            grey: grey,
        }
    }

    return {
        light: _obj,
        dark: _obj
    }
};