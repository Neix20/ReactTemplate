import { alpha } from '@mui/material/styles';

import { blue } from '@mui/material/colors';


export default function Button(theme) {
    const disabledStyle = {
        "&.Mui-disabled": {
            backgroundColor: theme.palette.grey[200],
        },
    };

    const brand = blue;

    return {
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
                                backgroundColor: theme.palette.grey[900],
                                backgroundImage: `linear-gradient(to bottom, ${theme.palette.grey[700]}, ${theme.palette.grey[800]})`,
                                boxShadow: `inset 0 1px 0 ${theme.palette.grey[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
                                border: `1px solid ${theme.palette.grey[700]}`,
                                '&:hover': {
                                    backgroundImage: 'none',
                                    backgroundColor: theme.palette.grey[700],
                                    boxShadow: 'none',
                                },
                                '&:active': {
                                    backgroundColor: theme.palette.grey[800],
                                },
                                ...theme.applyStyles('dark', {
                                    color: 'black',
                                    backgroundColor: theme.palette.grey[50],
                                    backgroundImage: `linear-gradient(to bottom, ${theme.palette.grey[100]}, ${theme.palette.grey[50]})`,
                                    boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
                                    border: `1px solid ${theme.palette.grey[50]}`,
                                    '&:hover': {
                                        backgroundImage: 'none',
                                        backgroundColor: theme.palette.grey[300],
                                        boxShadow: 'none',
                                    },
                                    '&:active': {
                                        backgroundColor: theme.palette.grey[400],
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
                                '&:active': {
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
                                '&:active': {
                                    backgroundColor: theme.palette.grey[200],
                                },
                                ...theme.applyStyles('dark', {
                                    backgroundColor: theme.palette.grey[800],
                                    borderColor: theme.palette.grey[700],
                                    '&:hover': {
                                        backgroundColor: theme.palette.grey[900],
                                        borderColor: theme.palette.grey[600],
                                    },
                                    '&:active': {
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
                                '&:active': {
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
                                    '&:active': {
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
                                    backgroundColor: theme.palette.grey[100],
                                },
                                '&:active': {
                                    backgroundColor: theme.palette.grey[200],
                                },
                                ...theme.applyStyles('dark', {
                                    color: theme.palette.grey[50],
                                    '&:hover': {
                                        backgroundColor: theme.palette.grey[700],
                                    },
                                    '&:active': {
                                        backgroundColor: alpha(theme.palette.grey[700], 0.7),
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
                                '&:active': {
                                    backgroundColor: alpha(brand[200], 0.7),
                                },
                                ...theme.applyStyles('dark', {
                                    color: brand[100],
                                    '&:hover': {
                                        backgroundColor: alpha(brand[900], 0.5),
                                    },
                                    '&:active': {
                                        backgroundColor: alpha(brand[900], 0.3),
                                    },
                                }),
                            },
                        },
                    ],
                }),
                contained: {
                    ...disabledStyle,
                },
                outlined: {
                    ...disabledStyle,
                },
            },
        },
    };
}
