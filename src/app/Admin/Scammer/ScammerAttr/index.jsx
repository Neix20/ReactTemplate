import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { BpLoading, BpForm, BpHeader } from "@components";
import { useToggle } from "@hooks";

import { Add, Save, Cancel } from "@mui/icons-material";

import { GlobalStyles, Models, SampleData } from "@config";

import { useNavigate, useParams } from "react-router-dom";

import { fetchScammerAttrGet, fetchScammerAttrAdd, fetchScammerAttrUpdate } from "@api";

import { clsUtility } from "@utility";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Index(props) {

    const { ScammerId = "", ScammerAttrId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const navigate = useNavigate();

    const { field, schema, initial = {} } = Models.ScammerAttr;
    const { control, handleSubmit, reset: loadData, formState: { isDirty: isChanged } } = useForm({ resolver: zodResolver(schema) });
    const resetData = _ => loadData(initial);

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (ScammerAttrId != "0") {
            getData();
        }
    }, [refresh])

    // #region Actions
    const getData = () => {
        setLoadingTrue();
        fetchScammerAttrGet({
            PK: ScammerId,
            SK: ScammerAttrId
        })
            .then(res => {
                setLoadingFalse();

                const { data } = res;
                loadData(data);
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const addData = (data) => {
        setLoadingTrue();
        fetchScammerAttrAdd({
            PK: ScammerId,
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
        fetchScammerAttrUpdate({
            PK: ScammerId,
            SK: ScammerAttrId,
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
        const _func = (ScammerAttrId == "0") ? () => addData(data) : () => updateData(data);
        _func();
    };
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            <Box component={"form"} onSubmit={handleSubmit(onSave)}>
                <BpHeader
                    start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.ScammerAttr.key)}</Typography>}
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
                                disabled={!isChanged}
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