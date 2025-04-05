import { useState, useEffect } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

import { BpLoading, BpDataTable, BpHeader } from "@components";

import { useToggle } from "@hooks";

import { fetchScammerGetAll, fetchScammerDelete } from "@api";

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
        getAllScammers();
    }, [refresh]);


    // #region Actions
    const getAllScammers = () => {
        setLoadingTrue();
        fetchScammerGetAll()
            .then(res => {
                setLoadingFalse();

                const { data = [] } = res;
                setData(_ => data);
            })
            .catch(() => {
                setLoadingFalse();
            });
    }

    const GoToAddScammer = () => {
        navigate("/Admin/Scammer/0");
    }
    const onTblUpdate = ({ row }) => {
        const id = data[row.id].PK;
        navigate(`/Admin/Scammer/${id}`);
    }
    const onTblDelete = ({ row }) => {
        const id = data[row.id].PK;
        setLoadingTrue();
        fetchScammerDelete({
            PK: id
        })
            .then(res => {
                setLoadingFalse();
                toggleRefresh();
            })
            .catch(() => {
                setLoadingFalse();
            });
    }
    // #endregion

    return (
        <>
        <BpLoading loading={loading} />
            <BpHeader
                enableBack={false}
                start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.Scammer.key)}</Typography>}
                end={
                    <Button variant={"contained"}
                        onClick={GoToAddScammer}
                        startIcon={<Add />}>New</Button>}
            />
            <BpDataTable
                data={data}
                field={Models.Scammer.field}
                enableRowAction={true}
                enableTopAction={true}
                onUpdate={onTblUpdate}
                onDelete={onTblDelete}
            />
        </>
    )
}

export default Index;