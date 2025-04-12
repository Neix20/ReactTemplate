const mantis = {
    MuiBadge: {
        styleOverrides: {
            standard: ({ theme }) => ({
                minWidth: theme.spacing(2),
                height: theme.spacing(2),
                padding: theme.spacing(0.5),
            }),
        },
    },
    MuiCardContent: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: 20,
                "&:last-child": {
                    paddingBottom: 20,
                },
            }),
        },
    },
    MuiCheckbox: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.secondary[300],
            }),
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: 4,
            },
            sizeLarge: ({ theme }) => ({
                width: theme.spacing(5.5),
                height: theme.spacing(5.5),
                fontSize: "1.25rem",
            }),
            sizeMedium: ({ theme }) => ({
                width: theme.spacing(4.5),
                height: theme.spacing(4.5),
                fontSize: "1rem",
            }),
            sizeSmall: ({ theme }) => ({
                width: theme.spacing(3.75),
                height: theme.spacing(3.75),
                fontSize: "0.75rem",
            }),
        },
    },
    MuiInputLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.grey[600],
            }),
            outlined: ({ theme }) => ({
                lineHeight: "0.8em",
                "&.MuiInputLabel-sizeSmall": {
                    lineHeight: "1em",
                },
                "&.MuiInputLabel-shrink": {
                    background: theme.palette.background.paper,
                    padding: "0 8px",
                    marginLeft: -6,
                    lineHeight: "1.4375em",
                },
            }),
        },
    },
    MuiLinearProgress: {
        styleOverrides: {
            root: {
                height: 6,
                borderRadius: 100,
            },
            bar: {
                borderRadius: 100,
            },
        },
    },
    MuiLink: {
        defaultProps: {
            underline: "hover",
        },
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 24,
            },
        },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                minHeight: 46,
            },
        },
    },
    MuiTableCell: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontSize: "0.875rem",
                padding: 12,
                borderColor: theme.palette.divider,
            }),
            head: {
                fontWeight: 600,
                paddingTop: 20,
                paddingBottom: 20,
            },
        },
    },
    MuiTabs: {
        styleOverrides: {
            vertical: {
                overflow: "visible",
            },
        },
    },
    MuiTypography: {
        styleOverrides: {
            gutterBottom: {
                marginBottom: 12,
            },
        },
    }
}

export default mantis;