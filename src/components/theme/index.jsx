import PropTypes from "prop-types";
import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Typography } from "./typography";
import { Shadow } from "./shadows";
import { ColorScheme } from "./colorscheme";
import components from "./overrides";

function ThemeCustomization({ children }) {
    const theme = createTheme({});

    // Deploy as Function, so that User can Change Font

    // const themeTypography = Typography(`Inter, sans-serif`, theme);
    const themeTypography = Typography(`'Public Sans', sans-serif`, theme);
    const themeShadow = Shadow(theme);
    const themeColorScheme = ColorScheme();
    const themeComponent = components;

    const themeOptions = useMemo(() => ({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        direction: "ltr",
        cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
        },
        shape: {
            borderRadius: 8,
        },
        colorSchemes: themeColorScheme,
        // shadows: themeShadow,
        typography: themeTypography,
        components: themeComponent
    }), [theme, themeTypography, themeShadow, themeColorScheme, themeComponent]);

    const themes = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes} disableTransitionOnChange>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default ThemeCustomization;

ThemeCustomization.propTypes = {
    children: PropTypes.node,
};
