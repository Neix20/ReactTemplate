import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Card } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";

import { CheckCircle, Cancel } from "@mui/icons-material";

import { BpHeader, BpLoading, BpInput } from "@components";
import { useToggle, useForm } from "@hooks";

import IncidentDetails from "@app/User/Incident/IncidentDetails";

import { useNavigate, useParams } from "react-router-dom";

import { fetchIncidentUpdateStatus } from "@api";

import { z } from "zod";

const template = {
    reason: {
        initial: {
            reason: ""
        },
        schema: z.object({
            reason: z.string().min(1, "Reason is required")
        })
    }
}

function Index(props) {

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const navigate = useNavigate();
    const { IncidentId = "" } = useParams();

    const [anchorEl, setAnchorEl] = useState(null);

    const { control, handleSubmit, resetData } = useForm(template.reason);

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

    const cancelIncident = (evt) => {
        setAnchorEl(evt.currentTarget);
    }

    const onCancelIncident = (_data) => {
        const data = {
            PK: IncidentId,
            SK: IncidentId,
            status: "Inactive",
            rejected_reason: _data.reason
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
                    <>
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
                        <Menu
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={() => setAnchorEl(null)}
                        >
                            <Box component={"form"} onSubmit={handleSubmit(onCancelIncident)} sx={{ px: 3, py: 1 }}>
                                <Typography variant={"h6"}>Reasons: </Typography>
                                <BpInput type={"textarea"} name={"reason"} placeholder={"Enter your reason..."} control={control} sx={{ mb: 2}} />
                                <Button type={"submit"} variant={"contained"} color={"error"}>Submit</Button>
                            </Box>
                        </Menu>
                    </>
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