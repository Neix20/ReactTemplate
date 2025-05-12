import { useState, useEffect } from "react";

import { Avatar, Divider, Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Card, Collapse, TextField, CardContent, Chip } from "@mui/material";

import { GlobalStyles, Images } from "@config";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { clsUtility } from "@utility";

import { Search, CheckCircle, Cancel, Help } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import { BpLoading, BpInput } from "@components";

import { useToggle, useForm } from "@hooks";

import { fetchIncidentCheckStatus } from "@api";

import { z } from "zod";

import Rules from "./components/rules";

const template = {
    form: {
        initial: {
            tag: ""
        },
        schema: z.object({
            tag: z.string().min(1, "Tag is required")
        })
    }
}

function ResultCard(props) {

    const { incident = {} } = props;

    const style = {
        main: (theme) => ({
            backgroundColor: "#f7fcfc",
            ...theme.applyStyles('dark', { backgroundColor: "#1e2328" })
        })
    };

    const navigate = useNavigate();

    const GoToIncident = _ => {
        navigate(`/Incident/${incident.PK}`);
    }


    const dict = {
        Active: {
            borderLeft: "4px solid #22c55e",
            color: "success",
            chipLabel: "Approved",
            Elem: _ => (
                <Box>
                    <Button variant={"outlined"} color={"#000"} onClick={GoToIncident}>View Details</Button>
                </Box>
            )
        },
        Pending: {
            borderLeft: "4px solid #f59e0b",
            color: "warning",
            chipLabel: "Pending",
            Elem: _ => (
                <Typography variant={"body1"}>We're currently reviewing your report. Please check back later.</Typography>
            )
        },
        Inactive: {
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
                    <strong>Rejected: </strong> {incident?.rejected_reason}
                </Box>
            )
        }
    };

    const { borderLeft, color, Elem, chipLabel } = dict[incident?.status || "Pending"];

    return (
        <Card sx={style.main} >
            <Box sx={{ borderLeft }}>
                <CardContent>
                    <Grid2 container flexDirection={"column"} spacing={2}>
                        <Grid2 container justifyContent={"space-between"}>
                            <Box>
                                <Typography variant="h6">Incident {incident.tag}</Typography>
                                <Typography variant="body2" sx={{ color: 'gray' }}>Submitted on {clsUtility.formatDate(incident.post_date)}</Typography>
                            </Box>
                            <Chip label={chipLabel} color={color} />
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

    const { flag: sectionFlag, toggle: toggleSection, open: openSection, close: closeSection } = useToggle(false);

    const [incident, setIncident] = useState({});

    const { control, handleSubmit } = useForm(template.form);

    const style = {
        search: {
            display: "flex",
            gap: 1,
            width: "100%",
        },
        sectionBorder: {
            borderTop: '1px solid',
            borderColor: 'divider',
            pt: 4,
        }
    }

    const checkIncidentStatus = (data) => {
        closeSection();
        setLoadingTrue();
        fetchIncidentCheckStatus(data)
            .then(res => {
                openSection();
                setLoadingFalse();
                const { data = {} } = res;
                setIncident(_ => data);
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    const onSubmit = (data) => {
        checkIncidentStatus(data);
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
                <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={style.search}>
                    <BpInput
                        name={"tag"} type={"text"}
                        placeholder={"Social Media Ids, Bank Account..."}
                        control={control}
                        sx={{ flex: .8, flexGrow: 1 }} />
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"warning"}
                        endIcon={<Search />}
                        sx={{ flex: .2, maxWidth: "100px", minWidth: "100px" }}>Search</Button>
                </Box>
            </Grid2>

            {/* Report */}
            <Collapse in={sectionFlag} sx={{ mt: 2}}>
                <ResultCard incident={incident} />
            </Collapse>

            <Rules />

        </Container>
    )
}

export default Index;