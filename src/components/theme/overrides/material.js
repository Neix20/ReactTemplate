
import { alpha } from '@mui/material/styles';

import { brand } from "./../utility";

import { chipClasses } from '@mui/material/Chip';
import { svgIconClasses } from '@mui/material/SvgIcon';

import { green, red } from "@mui/material/colors";

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
                            size: 'small',
                        },
                        style: {
                            height: '2.25rem',
                            padding: '8px 12px',
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            height: '2.5rem', // 40px
                        },
                    },
                    {
                        props: {
                            color: 'primary',
                            variant: 'contained',
                        },
                        style: {
                            color: 'white',
                            backgroundColor: theme.palette.grey[700],
                            boxShadow: `inset 0 1px 0 ${theme.palette.grey[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
                            border: `1px solid ${theme.palette.grey[700]}`,
                            '&:hover': {
                                backgroundImage: 'none',
                                backgroundColor: theme.palette.grey[500],
                                boxShadow: 'none',
                            },
                            '&.active': {
                                backgroundColor: theme.palette.grey[800],
                            },
                            ...theme.applyStyles('dark', {
                                color: 'black',
                                backgroundColor: theme.palette.grey[50],
                                boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
                                border: `1px solid ${theme.palette.grey[50]}`,
                                '&:hover': {
                                    backgroundImage: 'none',
                                    backgroundColor: theme.palette.grey[700],
                                    color: theme.palette.grey[50],
                                    boxShadow: 'none',
                                },
                                '&.active': {
                                    backgroundColor: theme.palette.grey[700],
                                    color: theme.palette.grey[50]
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'contained',
                        },
                        style: {
                            color: 'white',
                            backgroundColor: brand[300],
                            backgroundImage: `linear-gradient(to bottom, ${alpha(brand[400], 0.8)}, ${brand[500]})`,
                            boxShadow: `inset 0 2px 0 ${alpha(brand[200], 0.2)}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
                            border: `1px solid ${brand[500]}`,
                            '&:hover': {
                                backgroundColor: brand[700],
                                boxShadow: 'none',
                            },
                            '&.active': {
                                backgroundColor: brand[700],
                                backgroundImage: 'none',
                            },
                        },
                    },
                    {
                        props: {
                            variant: 'outlined',
                        },
                        style: {
                            color: (theme.vars || theme).palette.text.primary,
                            border: '1px solid',
                            borderColor: theme.palette.grey[200],
                            backgroundColor: alpha(theme.palette.grey[50], 0.3),
                            '&:hover': {
                                backgroundColor: theme.palette.grey[100],
                                borderColor: theme.palette.grey[300],
                            },
                            '&.active': {
                                backgroundColor: theme.palette.grey[200],
                            },
                            ...theme.applyStyles('dark', {
                                backgroundColor: theme.palette.grey[800],
                                borderColor: theme.palette.grey[700],
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[900],
                                    borderColor: theme.palette.grey[600],
                                },
                                '&.active': {
                                    backgroundColor: theme.palette.grey[900],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'outlined',
                        },
                        style: {
                            color: brand[700],
                            border: '1px solid',
                            borderColor: brand[200],
                            backgroundColor: brand[50],
                            '&:hover': {
                                backgroundColor: brand[100],
                                borderColor: brand[400],
                            },
                            '&.active': {
                                backgroundColor: alpha(brand[200], 0.7),
                            },
                            ...theme.applyStyles('dark', {
                                color: brand[50],
                                border: '1px solid',
                                borderColor: brand[900],
                                backgroundColor: alpha(brand[900], 0.3),
                                '&:hover': {
                                    borderColor: brand[700],
                                    backgroundColor: alpha(brand[900], 0.6),
                                },
                                '&.active': {
                                    backgroundColor: alpha(brand[900], 0.5),
                                },
                            }),
                        },
                    },
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
                                backgroundColor: theme.palette.grey[100],
                            },
                            ...theme.applyStyles('dark', {
                                color: theme.palette.grey[100],
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[600],
                                },
                                '&.active': {
                                    backgroundColor: theme.palette.grey[600],
                                },
                            }),
                        },
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'text',
                        },
                        style: {
                            color: brand[700],
                            '&:hover': {
                                backgroundColor: alpha(brand[100], 0.5),
                            },
                            '&.active': {
                                backgroundColor: alpha(brand[200], 0.7),
                            },
                            ...theme.applyStyles('dark', {
                                color: brand[100],
                                '&:hover': {
                                    backgroundColor: alpha(brand[900], 0.5),
                                },
                                '&.active': {
                                    backgroundColor: alpha(brand[900], 0.3),
                                },
                            }),
                        },
                    },
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
                            backgroundColor: green[50],
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
                                    color: green[300],
                                },
                                [`& .${chipClasses.icon}`]: {
                                    color: green[300],
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