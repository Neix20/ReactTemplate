import { useState, useEffect } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

import { BpLoading, BpDataTable, BpHeader } from "@components";

import { useToggle } from "@hooks";

import { fetchIpSeriesGetAll, fetchIpSeriesDelete } from "@api";

import { useNavigate, Link } from "react-router-dom";

import { Models } from "@config";

import { clsUtility } from "@utility";

import { Add, ArrowBack } from "@mui/icons-material";

function Index(props) {

    const navigate = useNavigate();

    const { flag: refresh, toggle: toggleRefresh } = useToggle(false);
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllIpSeries();
    }, [refresh]);

    // #region Actions
    const getAllIpSeries = () => {
        setLoadingTrue();
        fetchIpSeriesGetAll()
            .then(res => {
                setLoadingFalse();

                const { data = [] } = res;
                setData(_ => data);
            })
            .catch(() => {
                setLoadingFalse();
            })
    }

    const GoToAddIpSeries = () => {
        navigate("/Admin/IpSeries/0");
    }

    const onTblUpdate = ({ row }) => {
        const id = data[row.id].PK;
        navigate(`/Admin/IpSeries/${id}`);
    }

    const onTblDelete = ({ row }) => {
        const id = data[row.id].PK;
        setLoadingTrue();
        fetchIpSeriesDelete({
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
   // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            <BpHeader
                enableBack={false}
                start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.IpSeries.key)}</Typography>}
                end={
                    <Button variant={"contained"}
                        onClick={GoToAddIpSeries}
                        startIcon={<Add />}>New</Button>}
            />
            <BpDataTable
                data={data}
                field={Models.IpSeries.field}
                enableRowAction={true}
                enableTopAction={true}
                onUpdate={onTblUpdate}
                onDelete={onTblDelete}
            />
        </>
    )
}

export default Index;