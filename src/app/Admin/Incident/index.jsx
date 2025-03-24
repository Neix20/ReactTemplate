import { useState, useEffect } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

import { BpLoading, BpDataTable } from "@components";

import { useToggle } from "@hooks";

import { fetchIncidentGetAll, fetchIncidentDelete } from "@api";

import { useNavigate, Link } from "react-router-dom";

import { SampleData, GlobalStyles } from "@config";

import Models from "@config/models";

import { Add } from "@mui/icons-material";

function Index(props) {

    const navigate = useNavigate();

    const { flag: refresh, toggle: toggleRefresh } = useToggle(false);
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllIncident();
    }, [refresh]);

    // #region Actions
    const getAllIncident = () => {
        setLoadingTrue();
        fetchIncidentGetAll()
            .then(res => {
                setLoadingFalse();

                const { data = [] } = res;
                setData(_ => data);
            })
            .catch(() => {
                setLoadingFalse();
            })
    }

    const GoToAddIncident = () => {
        navigate("/Admin/Incident/0");
    }

    const onTblUpdate = ({ row }) => {
        const id = data[row.id].PK;
        navigate(`/Admin/Incident/${id}`);
    }

    const onTblDelete = ({ row }) => {
        const id = data[row.id].PK;
        setLoadingTrue();
        fetchIncidentDelete({
            PK: id
        })
            .then(res => {
                setLoadingFalse();
                toggleRefresh();
            })
            .catch((err) => {
                setLoadingFalse();
                alert(JSON.stringify(err))
            })
    }

    const colOrder = Array.from(new Set(["title", "subtitle", "platform", "reported_date", "scammer_type", ...Models.Incident.field.map(x => x.name)]));
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            {/* <Paper>

            </Paper> */}
            {/* <BpHeader
                enableBack={false}
                start={<Typography variant={"h2"}>{Models.Incident.key}</Typography>} 
                end={<Button variant={"outlined"}
                onClick={GoToAddIncident}
                startIcon={<Add />}>New</Button>}
            /> */}
            <BpDataTable
                    data={[...data, ...data, ...data]}
                    field={Models.Incident.field}
                    fieldOrder={colOrder}
                    hideField={["description", "social_url", "post_date", "category"]}
                    enableRowAction={true}
                    enableTopAction={true}
                    onUpdate={onTblUpdate}
                    onDelete={onTblDelete}
                />
        </>
    )
}

export default Index;