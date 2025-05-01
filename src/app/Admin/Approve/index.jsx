import { useState, useEffect } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { Check, Close, Edit, Visibility } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import { Models, GlobalStyles } from "@config";

// Put Both IP Series & Incident Together

import { fetchIncidentPending, fetchIpSeriesPending } from "@api";
import { BpLoading, BpDataTable, BpHeader } from "@components";
import { useToggle } from "@hooks";

function Index(props) {

    const navigate = useNavigate();

    const { flag: refresh, toggle: toggleRefresh } = useToggle(false);
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const [incidentData, setIncidentData] = useState([]);
    const [ipSeriesData, setIpSeriesData] = useState([]);

    // #region Incident Actions
    const renderIncidentActions = ({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '5px' }}>
            <Tooltip title={"Edit"}>
                <IconButton onClick={_ => onIncidentEdit({ row, table })}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title={"View"}>
                <IconButton onClick={_ => onIncidentView({ row, table })}>
                    <Visibility />
                </IconButton>
            </Tooltip>
        </Box>
    );

    const getAllIncident = () => {
        setLoadingTrue();
        fetchIncidentPending()
            .then(res => {
                setLoadingFalse();
                const { data = [] } = res;
                setIncidentData(_ => data);
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    };

    const onIncidentEdit = ({ row }) => {
        const id = incidentData[row.id].PK;
        navigate(`/Admin/Incident/${id}`);
    }
    const onIncidentView = ({ row }) => {
        const id = incidentData[row.id].PK;
        navigate(`/Admin/Approve/${id}`);
    }
    // #endregion

    // #region Ip Series Actions
    const renderIpSeriesActions = ({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '5px' }}>
            <Tooltip title={"Edit"}>
                <IconButton onClick={_ => onIpSeriesEdit({ row, table })}>
                    <Edit />
                </IconButton>
            </Tooltip>
        </Box>
    );

    const getAllIpSeries = () => {
        setLoadingTrue();
        fetchIpSeriesPending()
            .then(res => {
                setLoadingFalse();
                const { data = [] } = res;
                setIpSeriesData(_ => data);
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    };

    const onIpSeriesEdit = ({ row }) => {
        const id = ipSeriesData[row.id].PK;
        navigate(`/Admin/IpSeries/${id}`);
    }
    // #endregion

    useEffect(() => {
        getAllIncident();
        getAllIpSeries();
    }, [refresh]);

    return (
        <>
            <BpLoading loading={loading} />
            <BpHeader
                enableBack={false}
                start={<Typography variant={"h2"}>Approve</Typography>}
            />
            <Grid2 container flexDirection={"column"} spacing={2}>
                <BpDataTable
                    data={incidentData}
                    field={Models.Incident.field}
                    hideField={["subtitle", "description", "social_url", "post_date", "category", "trade_method"]}
                    enableRowAction={true}
                    enableTopAction={true}
                    renderRowActions={renderIncidentActions}
                />
                {(ipSeriesData.length > 0) && <BpDataTable
                    data={ipSeriesData}
                    field={Models.IpSeries.field}
                    hideField={["link", "parent"]}
                    enableRowAction={true}
                    enableTopAction={true}
                    renderRowActions={renderIpSeriesActions}
                />}
            </Grid2>
        </>
    )
}

export default Index;