import { useState, useEffect } from "react";

import { Grid2, Typography, Box, Card, CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

import { Images } from "@config";

import { BpPlatformLogo } from "@components";

import { clsUtility } from "@utility";

function ImageWithText(props) {

    const { children, imgProps = {} } = props;

    const style = {
        wrapper: {
            position: 'relative',
            width: '100%',
            height: '200px',
            overflow: 'hidden'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        badge: {
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'error.main',
            padding: '6px 12px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        },
        badgeText: {
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        }
    };

    return (
        <Box sx={style.wrapper}>
            <Box
                component="img"
                {...imgProps}
                sx={{
                    ...style.image,
                    ...imgProps?.sx
                }}
            />
            <Box sx={style.badge}>
                <Typography sx={style.badgeText}>
                    {children}
                </Typography>
            </Box>
        </Box>
    );
}

function InfoCard(props) {
    
    const { PK = "", title = "", total_amount = "", reported_date = "", images = "", platform = "Facebook" } = props;

    const style = {
        card: {
            width: '100%',
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }
        },
        contentWrapper: {
            padding: 2
        },
        detailRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 1.5,
            '&:last-child': {
                marginBottom: 0
            }
        },
        label: {
            color: 'text.secondary',
            fontSize: '0.875rem',
            fontWeight: 500
        },
        value: {
            color: 'text.primary',
            fontSize: '0.875rem',
            fontWeight: 600
        },
        amount: {
            color: 'error.main',
            fontSize: '1rem',
            fontWeight: 700
        }
    };

    return (
        <Card sx={style.card}>
            <CardActionArea component={Link} to={`/Incident/${PK}`}>
                <ImageWithText imgProps={{ src: images, alt: title }}>
                    Fake Seller
                </ImageWithText>
                
                <Box sx={style.contentWrapper}>
                    {/* Header - Platform Icon & Name */}
                    <Grid2 container spacing={1} sx={{ mb: 1 }}>
                    <BpPlatformLogo term={platform} />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {title}
                        </Typography>
                    </Grid2>

                    {/* Amount Row */}
                    <Box sx={style.detailRow}>
                        <Typography sx={style.label}>
                            Amount Scammed
                        </Typography>
                        <Typography sx={style.amount}>
                            {clsUtility.formatCurrency(total_amount)}
                        </Typography>
                    </Box>

                    {/* Date Row */}
                    <Box sx={style.detailRow}>
                        <Typography sx={style.label}>
                            Date
                        </Typography>
                        <Typography sx={style.value}>
                            {clsUtility.formatDate(reported_date)}
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default InfoCard;