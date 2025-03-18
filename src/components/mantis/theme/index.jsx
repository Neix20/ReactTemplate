import PropTypes from "prop-types";
import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Typography } from "./typography";
import { Shadow } from "./shadows";
import { ColorScheme } from "./colorscheme";
import componentsOverride from "./overrides";

import { inputsCustomizations } from '@components/material/theme/customizations/inputs';
import { dataDisplayCustomizations } from '@components/material/theme/customizations/dataDisplay';
import { feedbackCustomizations } from '@components/material/theme/customizations/feedback';
import { navigationCustomizations } from '@components/material/theme/customizations/navigation';
import { surfacesCustomizations } from '@components/material/theme/customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from '@components/material/theme/themePrimitives';

function ThemeCustomization({ children }) {
    const theme = createTheme({});

    // Deploy as Function, so that User can Change Font

    // const themeTypography = Typography(`Inter, sans-serif`, theme);
    const themeTypography = Typography(`'Public Sans', sans-serif`, theme);
    const themeShadow = Shadow(theme);
    const themeColorScheme = ColorScheme();
    const themeComponent = componentsOverride(theme);

    const themeOptions = useMemo(() => ({
        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 1024,
                lg: 1266,
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
        shadows: themeShadow,
        typography: themeTypography,
        // colorSchemes: colorSchemes,
        components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
        },
        components: themeComponent
    }), [theme, themeTypography, themeShadow, themeColorScheme]);

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
