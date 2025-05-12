import { useState, useEffect } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

import { useNavigate, Link } from "react-router-dom";

import { BpLoading, BpDataTable, BpHeader } from "@components";
import { useToggle } from "@hooks";

import { fetchUserGetAll, fetchUserDelete } from "@api";

import { Models } from "@config";

import { clsUtility } from "@utility";

import { Add } from "@mui/icons-material";

function Index(props) {

    const navigate = useNavigate();

    const { flag: refresh, toggle: toggleRefresh } = useToggle(false);
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllUser();
    }, [refresh]);

    // #region Actions
    const getAllUser = () => {
        setLoadingTrue();
        fetchUserGetAll()
            .then(res => {
                setLoadingFalse();

                const { data = [] } = res;
                setData(_ => data);
            })
            .catch(() => {
                setLoadingFalse();
            })
    }

    const GoToAddUser = () => {
        navigate("/Admin/User/0");
    }

    const onTblUpdate = ({ row }) => {
        const id = data[row.id].PK;
        navigate(`/Admin/User/${id}`);
    }

    const onTblDelete = ({ row }) => {
        const id = data[row.id].PK;
        setLoadingTrue();
        fetchUserDelete({
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
                start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.User.key)}</Typography>}
                end={
                    <Button variant={"contained"}
                        onClick={GoToAddUser}
                        startIcon={<Add />}>New</Button>}
            />
            <BpDataTable
                data={data}
                field={Models.User.field}
                enableRowAction={true}
                enableTopAction={true}
                onUpdate={onTblUpdate}
                onDelete={onTblDelete}
            />
        </>
    )
}

export default Index;