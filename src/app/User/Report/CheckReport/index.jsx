import { useState, useEffect } from "react";

import { Avatar, Divider, Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Card, Collapse, TextField, CardContent, Chip } from "@mui/material";

import { GlobalStyles, Images } from "@config";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { clsUtility } from "@utility";

import { Search, CheckCircle, Cancel, Help } from "@mui/icons-material";

import { BpLoading, BpInput } from "@components";

import { useToggle, useForm } from "@hooks";

function ResultCard(props) {

    // const { variant = "success" } = props;

    const style = {
        main: (theme) => ({
            backgroundColor: "#f7fcfc",
            ...theme.applyStyles('dark', { backgroundColor: "#1e2328" })
        })
    }

    const dict = {
        approved: {
            borderLeft: "4px solid #22c55e",
            color: "success",
            chipLabel: "Approved",
            Elem: _ => (
                <Box>
                    <Button variant={"outlined"} color={"#000"}>View Details</Button>
                </Box>
            )
        },
        pending: {
            borderLeft: "4px solid #f59e0b",
            color: "warning",
            chipLabel: "Pending",
            Elem: _ => (
                <Typography sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>We're currently reviewing your report. Please check back later.</Typography>
            )
        },
        rejected: {
            borderLeft: "4px solid #ef4444",
            color: "error",
            chipLabel: "Rejected",
            Elem: _ => (
                <Box sx={(theme) => ({
                    p: 1.5,
                    borderRadius: 1,
                    display: 'inline-block',
                    backgroundColor: theme.palette.grey["A100"],
                    ...theme.applyStyles('dark', { backgroundColor: "#1e2328" })
                })}>
                    <strong>Rejected: </strong> Cause you're Gay
                </Box>
            )
        }
    };

    const variant = "approved";
    const { borderLeft, color, Elem } = dict[variant];
    
    return (
        <Card sx={style.main} >
            <Box sx={{ borderLeft }}>
                <CardContent>
                    <Grid2 container flexDirection={"column"} spacing={2}>
                        <Grid2 container justifyContent={"space-between"}>
                            <Box>
                                <Typography variant="h6">Incident INC-SXG4879AD</Typography>
                                <Typography variant="body2" sx={{ color: 'gray' }}>Submitted on May 1, 2025</Typography>
                            </Box>
                            <Chip label="Approved" color={color} />
                        </Grid2>
                        <Elem />
                    </Grid2>
                </CardContent>
            </Box>
        </Card>
    )
}

function Index(props) {

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();

    const { flag: sectionFlag, toggle: toggleSection } = useToggle(false);

    const { control, handleSubmit } = useForm({});

    const style = {
        search: {
            display: "flex",
            gap: 1,
            width: "100%",
        },
        sectionBorder: {
            borderTop: '1px solid',
            borderColor: 'divider',
            py: 4
        }
    }

    return (
        <Container maxWidth={"lg"} sx={{
            display: "flex",
            flexDirection: "column",
            pt: { xs: 4, sm: 8 },
        }}>
            <BpLoading loading={loading} />

            {/* Title */}
            <Grid2 container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{ pb: 4 }}>
                <Typography variant={"h1"} sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Report Status</Typography>
                <Typography variant={"body1"} color={"text.secondary"} sx={{ fontSize: { xs: 11, sm: "0.875rem" } }}>
                    Check your report to see whether it has been approved
                </Typography>
            </Grid2>

            {/* Search */}
            <Grid2 container alignItems={"center"} justifyContent={"center"} sx={style.sectionBorder}>
                <Box component={"form"} sx={style.search}>
                    <BpInput
                        name={"query"} type={"text"}
                        placeholder={"Social Media Ids, Bank Account..."}
                        control={control}
                        sx={{ flex: .8, flexGrow: 1 }} />
                    <Button
                        type={"button"}
                        variant={"contained"}
                        color={"warning"}
                        endIcon={<Search />}
                        onClick={toggleSection}
                        sx={{ flex: .2, maxWidth: "100px", minWidth: "100px" }}>Search</Button>
                </Box>
            </Grid2>

            {/* Report */}
            <Collapse in={sectionFlag || true}>
                <ResultCard variant={"success"} />
                <Paper sx={{ p: 2, py: 4, minWidth: "60%", display: "none" }}>
                    <Grid2 container
                        flexDirection={"column"}
                        alignItems={"center"}
                        spacing={2}>
                        <Typography sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, fontWeight: "bold" }}>Your Report has been Approved!</Typography>
                        <CheckCircle sx={{ fontSize: 120, color: 'success.main' }} />
                        <Grid2 container flexDirection={"column"} alignItems={"center"}>
                            <Typography sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" }, fontWeight: "bold" }}>Incident INC-SXG4879AD</Typography>
                            <Box component={"img"} src={Images.bgStock01} sx={{
                                width: {
                                    xs: "240px",
                                    sm: "640px"
                                },
                                height: {
                                    xs: "120px",
                                    sm: "300px"
                                }
                            }} />
                        </Grid2>
                    </Grid2>
                </Paper>
            </Collapse>

        </Container>
    )
}

export default Index;