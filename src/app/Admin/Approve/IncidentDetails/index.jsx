import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

import { CheckCircle, Cancel } from "@mui/icons-material";

import { BpHeader, BpLoading } from "@components";
import { useToggle } from "@hooks";

import IncidentDetails from "@app/User/Incident/IncidentDetails";

import { useNavigate, useParams } from "react-router-dom";

import { fetchIncidentUpdateStatus } from "@api";

function Index(props) {

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const navigate = useNavigate();
    const { IncidentId = "" } = useParams();

    // #region Actions
    const goBack = () => {
        navigate(-1);
    }

    const approveIncident = () => {
        const data = {
            PK: IncidentId,
            SK: IncidentId,
            status: "Active"
        };

        setLoadingTrue();
        fetchIncidentUpdateStatus(data)
        .then(res => {
            setLoadingFalse();
            goBack();
        })
        .catch(err => {
            setLoadingFalse();
            console.error(err);
        })
    }

    const cancelIncident = () => {
        const data = {
            PK: IncidentId,
            SK: IncidentId,
            status: "Inactive"
        };

        setLoadingTrue();
        fetchIncidentUpdateStatus(data)
        .then(res => {
            setLoadingFalse();
            goBack();
        })
        .catch(err => {
            setLoadingFalse();
            console.error(err);
        })
    }
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            <BpHeader
                start={<Typography variant={"h2"}>Incident Details</Typography>}
                end={
                    <Grid2 container>
                        <Tooltip title={"Approve"}>
                            <IconButton color={"success"} onClick={approveIncident}>
                                <CheckCircle />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"Cancel"}>
                            <IconButton color={"error"} onClick={cancelIncident}>
                                <Cancel />
                            </IconButton>
                        </Tooltip>
                    </Grid2>
                }
                sx={{ main: {} }}
            />
            <Box sx={{ mb: 2 }}>
                <IncidentDetails />
            </Box>
        </>
    )
}

export default Index;