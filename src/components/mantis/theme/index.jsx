import PropTypes from "prop-types";
import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Typography } from "./typography";
import componentsOverride from "./overrides";

import { inputsCustomizations } from '@components/material/theme/customizations/inputs';
import { dataDisplayCustomizations } from '@components/material/theme/customizations/dataDisplay';
import { feedbackCustomizations } from '@components/material/theme/customizations/feedback';
import { navigationCustomizations } from '@components/material/theme/customizations/navigation';
import { surfacesCustomizations } from '@components/material/theme/customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from '@components/material/theme/themePrimitives';

function ThemeCustomization({ children }) {
  const theme = createTheme({});
  const themeTypography = Typography(`'Public Sans', sans-serif`);

  const themeOptions = useMemo(
    () => ({
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
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
      },
      colorSchemes,
      shape,
      shadows,
      typography: themeTypography,
    }),
    [theme, themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  console.log(themes);

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
