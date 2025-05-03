
import { alpha } from '@mui/material/styles';

import { brand } from "./../utility";

import { chipClasses } from '@mui/material/Chip';
import { svgIconClasses } from '@mui/material/SvgIcon';

import { green, red, amber } from "@mui/material/colors";
const material = {
    MuiButtonBase: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                boxSizing: 'border-box',
                transition: 'all 100ms ease-in',
                '&:focus-visible': {
                    outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                    outlineOffset: '2px',
                },
                '&:hover': {
                    opacity: 0.8,
                }
            }),
        },
    },
    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: 'none',
                borderRadius: (theme.vars || theme).shape.borderRadius,
                textTransform: 'none',
                variants: [
                    {
                        props: {
                            variant: 'text',
                        },
                        style: {
                            color: theme.palette.grey[600],
                            '&:hover': {
                                backgroundColor: theme.palette.grey[50],
                            },
                            '&.active': {
                                backgroundColor: alpha(theme.palette.grey[100], 0.5),
                            },
                            ...theme.applyStyles('dark', {
                                color: theme.palette.grey[100],
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[600],
                                },
                                '&.active': {
                                    backgroundColor: alpha(theme.palette.grey[600], 0.5),
                                },
                            })
                        }
                    }
                ],
            }),
            contained: ({ theme }) => ({
                "&.Mui-disabled": {
                    backgroundColor: theme.palette.grey[200],
                }
            }),
            outlined: ({ theme }) => ({
                "&.Mui-disabled": {
                    backgroundColor: theme.palette.grey[200],
                }
            })
        },
    },
    MuiChip: {
        defaultProps: {
            size: 'small',
        },
        styleOverrides: {
            root: ({ theme }) => ({
                border: '1px solid',
                borderRadius: '999px',
                [`& .${chipClasses.label}`]: {
                    fontWeight: 600,
                },
                variants: [
                    {
                        props: {
                            color: 'default',
                        },
                        style: {
                            borderColor: theme.palette.grey[200],
                            backgroundColor: theme.palette.grey[100],
                            [`& .${chipClasses.label}`]: {
                                color: theme.palette.grey[500],
                            },
                            [`& .${chipClasses.icon}`]: {
                                color: theme.palette.grey[500],
                            },
                            ...theme.applyStyles('dark', {
                                borderColor: theme.palette.grey[700],
                                backgroundColor: theme.palette.grey[800],
                                [`& .${chipClasses.label}`]: {
                                    color: theme.palette.grey[300],
                                },
                                [`& .${chipClasses.icon}`]: {
                                    color: theme.palette.grey[300],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'success',
                        },
                        style: {
                            borderColor: green[200],
                            backgroundColor: green[100],
                            [`& .${chipClasses.label}`]: {
                                color: green[500],
                            },
                            [`& .${chipClasses.icon}`]: {
                                color: green[500],
                            },
                            ...theme.applyStyles('dark', {
                                borderColor: green[800],
                                backgroundColor: green[900],
                                [`& .${chipClasses.label}`]: {
                                    color: green[100],
                                },
                                [`& .${chipClasses.icon}`]: {
                                    color: green[100],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'warning',
                        },
                        style: {
                            borderColor: amber[200],
                            backgroundColor: amber[100],
                            [`& .${chipClasses.label}`]: {
                                color: amber[500],
                            },
                            [`& .${chipClasses.icon}`]: {
                                color: amber[500],
                            },
                            ...theme.applyStyles('dark', {
                                borderColor: amber[800],
                                backgroundColor: amber[900],
                                [`& .${chipClasses.label}`]: {
                                    color: amber[100],
                                },
                                [`& .${chipClasses.icon}`]: {
                                    color: amber[100],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'error',
                        },
                        style: {
                            borderColor: red[100],
                            backgroundColor: red[50],
                            [`& .${chipClasses.label}`]: {
                                color: red[500],
                            },
                            [`& .${chipClasses.icon}`]: {
                                color: red[500],
                            },
                            ...theme.applyStyles('dark', {
                                borderColor: red[800],
                                backgroundColor: red[900],
                                [`& .${chipClasses.label}`]: {
                                    color: red[200],
                                },
                                [`& .${chipClasses.icon}`]: {
                                    color: red[300],
                                },
                            }),
                        },
                    },
                    {
                        props: { size: 'small' },
                        style: {
                            maxHeight: 20,
                            [`& .${chipClasses.label}`]: {
                                fontSize: theme.typography.caption.fontSize,
                            },
                            [`& .${svgIconClasses.root}`]: {
                                fontSize: theme.typography.caption.fontSize,
                            },
                        },
                    },
                    {
                        props: { size: 'medium' },
                        style: {
                            [`& .${chipClasses.label}`]: {
                                fontSize: theme.typography.caption.fontSize,
                            },
                        },
                    },
                ],
            }),
        },
    },

    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: "10.5px 14px 10.5px 12px",
            },
            notchedOutline: ({ theme }) => ({
                borderColor: theme.palette.grey[300],
            }),
            root: ({ theme }) => ({
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.light,
                },
                "&.Mui-focused": {
                    boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: `1px solid ${theme.palette.primary.light}`,
                    },
                },
                "&.Mui-error": {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.error.light,
                    },
                    "&.Mui-focused": {
                        boxShadow: `0 0 0 2px ${alpha(theme.palette.error.main, 0.2)}`,
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: `1px solid ${theme.palette.error.light}`,
                        },
                    },
                },
            }),
            inputSizeSmall: {
                padding: "7.5px 8px 7.5px 12px",
            },
            inputMultiline: {
                padding: 0,
            },
        },
    }

}

export default material;