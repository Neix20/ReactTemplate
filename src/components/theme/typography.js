export const Typography = (fontFamily, theme) => ({
    fontFamily,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontSize: theme.typography.pxToRem(48),
        // fontSize: '2.375rem',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
    },
    h2: {
        fontSize: theme.typography.pxToRem(36),
        // fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: theme.typography.pxToRem(30),
        // fontSize: '1.5rem',
        lineHeight: 1.2,
    },
    h4: {
        fontSize: theme.typography.pxToRem(24),
        // fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.5,
    },
    h5: {
        fontSize: theme.typography.pxToRem(20),
        // fontSize: '1rem',
        fontWeight: 600,
    },
    h6: {
        fontSize: theme.typography.pxToRem(18),
        // fontSize: '0.875rem',
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: theme.typography.pxToRem(18),
        // fontSize: '0.75rem',
    },
    subtitle2: {
        fontSize: theme.typography.pxToRem(14),
        // fontSize: '0.875rem',
        fontWeight: 500,
    },
    body1: {
        fontSize: theme.typography.pxToRem(14),
        // fontSize: '0.75rem',
    },
    body2: {
        fontSize: theme.typography.pxToRem(14),
        // fontSize: '0.875rem',
        fontWeight: 400,
    },
    caption: {
        fontSize: theme.typography.pxToRem(12),
        // fontSize: '0.75rem',
        fontWeight: 400,
    },
    overline: {
        lineHeight: 1.66,
    },
    button: {
        textTransform: "capitalize",
    }
});
