import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";
import { Add, Save, Cancel } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";

import { BpLoading, BpForm, BpHeader } from "@components";
import { useToggle, useForm } from "@hooks";

import { GlobalStyles, Models, SampleData } from "@config";

import { fetchUserGet, fetchUserAdd, fetchUserUpdate } from "@api";

import { clsUtility } from "@utility";

function Index(props) {

    const { UserId = "" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const navigate = useNavigate();

    const { field, control, handleSubmit, loadData, resetData, isDirty } = useForm(Models.User);

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (UserId != "0") {
            getData();
        }
    }, [refresh])

    // #region Actions
    const getData = () => {
        setLoadingTrue();
        fetchUserGet({
            PK: UserId,
        })
            .then(res => {
                setLoadingFalse();

                const { data } = res;
                loadData({
                    ...data,
                    profile: {
                        fileData: data.profile
                    }
                });
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const addData = (data) => {
        setLoadingTrue();
        fetchUserAdd({
            PK: UserId,
            ...data
        })
            .then(res => {
                setLoadingFalse();
                toggleRefresh();
                goBack();
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const updateData = (data) => {
        setLoadingTrue();
        fetchUserUpdate({
            PK: UserId,
            ...data
        })
            .then(res => {
                setLoadingFalse();
                goBack();
            })
            .catch(err => {
                setLoadingFalse();
                alert(JSON.stringify(err));
            })
    }

    const onSave = (data) => {
        const _func = (UserId == "0") ? () => addData(data) : () => updateData(data);
        _func();
    };
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            <Box component={"form"} onSubmit={handleSubmit(onSave)}>
                <BpHeader
                    start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.User.key)}</Typography>}
                    end={
                        <Grid2 container spacing={1}>
                            <Button
                                type={"button"}
                                variant={"contained"}
                                onClick={resetData}
                                startIcon={<Add />}>New</Button>
                            <Button
                                type={"submit"}
                                variant={"contained"}
                                disabled={!isDirty}
                                onClick={false}
                                startIcon={<Save />}>Save</Button>
                        </Grid2>
                    }
                />
                <Box sx={GlobalStyles.bordered}>
                    <BpForm
                        field={field}
                        control={control}
                        hasLabel={true}>
                    </BpForm>
                </Box>
            </Box>
        </>
    )
}

export default Index;