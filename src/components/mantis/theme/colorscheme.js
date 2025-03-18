
// const light = {
//     palette: {
//         primary: {
//             contrastText: brand[50],
//             light: brand[200],
//             main: brand[400],
//             dark: brand[700],
//         },
//         info: {
//             contrastText: gray[50],
//             light: brand[100],
//             main: brand[300],
//             dark: brand[600],
//         },
//         warning: {
//             light: orange[300],
//             main: orange[400],
//             dark: orange[800],
//         },
//         error: {
//             light: red[300],
//             main: red[400],
//             dark: red[800],
//         },
//         success: {
//             light: green[300],
//             main: green[400],
//             dark: green[800],
//         },
//         grey: {
//             ...gray,
//         },
//         divider: alpha(gray[300], 0.4),
//         background: {
//             default: 'hsl(0, 0%, 99%)',
//             paper: 'hsl(220, 35%, 97%)',
//         },
//         text: {
//             primary: gray[800],
//             secondary: gray[600],
//             warning: orange[400],
//         },
//         action: {
//             hover: alpha(gray[200], 0.2),
//             selected: `${alpha(gray[200], 0.3)}`,
//         },
//         baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
//     }
// };

// const dark = {
//     palette: {
//         primary: {
//             contrastText: brand[50],
//             light: brand[300],
//             main: brand[400],
//             dark: brand[700],
//         },
//         info: {
//             contrastText: brand[300],
//             light: brand[500],
//             main: brand[700],
//             dark: brand[900],
//         },
//         warning: {
//             light: orange[400],
//             main: orange[500],
//             dark: orange[700],
//         },
//         error: {
//             light: red[400],
//             main: red[500],
//             dark: red[700],
//         },
//         success: {
//             light: green[400],
//             main: green[500],
//             dark: green[700],
//         },
//         grey: {
//             ...gray,
//         },
//         divider: alpha(gray[700], 0.6),
//         background: {
//             default: gray[900],
//             paper: 'hsl(220, 30%, 7%)',
//         },
//         text: {
//             primary: 'hsl(0, 0%, 100%)',
//             secondary: gray[400],
//             warning: orange[500],
//         },
//         action: {
//             hover: alpha(gray[600], 0.2),
//             selected: alpha(gray[600], 0.3),
//         },
//         baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
//     }
// }

import { alpha } from '@mui/material/styles';

const Palette = (colors) => {

    const { blue, red, gold, cyan, green, grey } = colors;

    const greyColors = {
        0: grey[0],
        50: grey[1],
        100: grey[2],
        200: grey[3],
        300: grey[4],
        400: grey[5],
        500: grey[6],
        600: grey[7],
        700: grey[8],
        800: grey[9],
        900: grey[10],
        A50: grey[15],
        A100: grey[11],
        A200: grey[12],
        A400: grey[13],
        A700: grey[14],
        A800: grey[16]
    };

    const contrastText = "#fff";

    return {
        palette: {
            primary: {
                lighter: blue[0],
                light: blue[3],
                main: blue[5],
                dark: blue[6],
                darker: blue[8],
                contrastText,
            },
            secondary: {
                lighter: greyColors[100],
                light: greyColors[300],
                main: greyColors[500],
                dark: greyColors[700],
                darker: greyColors[900],
                contrastText: greyColors[0],
            },
            info: {
                lighter: cyan[0],
                light: cyan[3],
                main: cyan[5],
                dark: cyan[7],
                darker: cyan[9],
                contrastText,
            },
            warning: {
                lighter: gold[0],
                light: gold[3],
                main: gold[5],
                dark: gold[7],
                darker: gold[9],
                contrastText: greyColors[100],
            },
            error: {
                lighter: red[0],
                light: red[2],
                main: red[4],
                dark: red[7],
                darker: red[9],
                contrastText,
            },
            success: {
                lighter: green[0],
                light: green[3],
                main: green[5],
                dark: green[7],
                darker: green[9],
                contrastText,
            },
            grey: greyColors,
        },
    };
};


import { presetDarkPalettes, presetPalettes } from '@ant-design/colors';

export const ColorScheme = () => {

    let greyPrimary = [];

    greyPrimary = [ '#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#262626', '#141414', '#000000' ];
    greyPrimary = ["hsl(220, 35%, 97%)", "hsl(220, 30%, 94%)", "hsl(220, 20%, 88%)", "hsl(220, 20%, 80%)", "hsl(220, 20%, 65%)", "hsl(220, 20%, 42%)", "hsl(220, 20%, 35%)", "hsl(220, 20%, 25%)", "hsl(220, 30%, 6%)", "hsl(220, 35%, 3%)"];
    
    let greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
    let greyConstant = ['#fafafb', '#e6ebf1'];

    const greyColors = [...greyPrimary, ...greyAscent, ...greyConstant];

    const lightColor = {
        ...presetPalettes,
        grey: greyColors,
        divider: alpha(greyColors[4], 0.4),
        background: {
            default: 'hsl(0, 0%, 99%)',
            paper: 'hsl(220, 35%, 97%)',
        },
        text: {
            primary: greyColors[9],
            secondary: greyColors[7],
            warning: greyColors[5],
        },
        action: {
            hover: alpha(greyColors[3], 0.2),
            selected: `${alpha(greyColors[3], 0.3)}`,
        },
        baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
    }

    const darkColor = {
        ...presetDarkPalettes,
        grey: greyColors,
        divider: alpha(greyColors[8], 0.6),
        background: {
            default: greyColors[10],
            paper: 'hsl(220, 30%, 7%)',
        },
        text: {
            primary: 'hsl(0, 0%, 100%)',
            secondary: greyColors[5],
            warning: presetDarkPalettes.gold[5],
        },
        action: {
            hover: alpha(greyColors[7], 0.2),
            selected: alpha(greyColors[7], 0.3),
        },
        baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
    }

    return {
        light: Palette(lightColor),
        dark: Palette(darkColor)
    }
};