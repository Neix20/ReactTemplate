import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { BpLoading, BpForm, BpFormItem, BpHeader, BpImageGallery, BpImageUpload } from "@components";
import { useToggle, useForm, useCusMedia } from "@hooks";

import { Add, Save, Cancel } from "@mui/icons-material";

import { GlobalStyles, Models, SampleData } from "@config";

import { useNavigate, useParams } from "react-router-dom";

import { fetchScammerAttrGet, fetchScammerAttrAdd, fetchScammerAttrUpdate } from "@api";

import { clsUtility } from "@utility";

function Index(props) {

    const { ScammerId = "", ScammerAttrId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const { key, data, field, updateDataHtml, resetData, isChanged, loadData } = useForm(Models.ScammerAttr);

    const navigate = useNavigate();

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

    const addData = () => {
        setLoadingTrue();
        fetchScammerAttrAdd({
            PK: ScammerId,
            ...data
        })
            .then(res => {
                setLoadingFalse();
                toggleRefresh();
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const updateData = () => {
        setLoadingTrue();
        fetchScammerAttrUpdate({
            PK: ScammerId,
            SK: ScammerAttrId,
            ...data
        })
            .then(res => {
                setLoadingFalse();
            })
            .catch(err => {
                setLoadingFalse();
                alert(JSON.stringify(err));
            })
    }

    const onSave = () => {
        const _func = (ScammerAttrId == "0") ? () => addData() : () => updateData();
        _func();
    };
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            <BpHeader
                start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.ScammerAttr.key)}</Typography>}
                end={
                    <Grid2 container spacing={1}>
                        <Button
                            variant={"contained"}
                            onClick={resetData}
                            startIcon={<Add />}>New</Button>
                        <Button
                            variant={"contained"}
                            disabled={isChanged}
                            onClick={false}
                            startIcon={<Save />}>Save</Button>
                    </Grid2>
                }
            />
            <Box sx={GlobalStyles.bordered}>
                <BpForm key={key} hasLabel={true}
                    data={data} field={field}
                    onUpdate={updateDataHtml}>
                </BpForm>
            </Box>
        </>
    )
}

export default Index;