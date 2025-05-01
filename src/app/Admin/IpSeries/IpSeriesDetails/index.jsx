import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";
import { Add, Save, Cancel } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";

import { BpHeader, BpLoading, BpForm, BpFormItem } from "@components";
import { useToggle, useForm } from "@hooks";

import { GlobalStyles, Models, SampleData } from "@config";

import { fetchIpSeriesGetAll, fetchIpSeriesGet, fetchIpSeriesAdd, fetchIpSeriesUpdate } from "@api";

import { clsUtility } from "@utility";

function Index(props) {

    const { IpSeriesId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const [ipAsset, setIpAsset] = useState([]);

    const {
        field: ipField,
        control: ipControl,
        handleSubmit: handleIpSubmit,
        loadData: loadIpData,
        resetData: resetIpData,
        isDirty: isIpDirty
    } = useForm(Models.IpSeries);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (IpSeriesId !== "0") {
            getData();
        }
        getAllIpSeries();
    }, [refresh]);

    // #region Actions
    const getAllIpSeries = () => {
        setLoadingTrue();
        fetchIpSeriesGetAll()
            .then(res => {
                setLoadingFalse();

                const { data } = res;

                const _arr = data.map(x => ({
                    label: x.name,
                    value: x.PK
                }));
                setIpAsset(_ => _arr);

            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    const getData = () => {
        setLoadingTrue();
        fetchIpSeriesGet({
            PK: IpSeriesId
        })
            .then(res => {
                setLoadingFalse();

                const { data } = res;
                loadIpData({
                    ...data,
                    image: {
                        fileData: data.image
                    }
                });
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    const addData = (data) => {
        setLoadingTrue();
        fetchIpSeriesAdd(data)
            .then(_ => {
                setLoadingFalse();
                goBack();
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const updateData = (data) => {
        setLoadingTrue();
        fetchIpSeriesUpdate({
            PK: IpSeriesId,
            ...data
        })
            .then(res => {
                setLoadingFalse();
                goBack();
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    const onSave = (data) => {
        const _func = (IpSeriesId == "0") ? () => addData(data) : () => updateData(data);
        _func();
    };
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            <Box component={"form"} onSubmit={handleIpSubmit(onSave)}>
                <BpHeader
                    start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.IpSeries.key)}</Typography>}
                    end={
                        <Grid2 container spacing={1}>
                            <Button
                                type={"button"}
                                variant={"contained"}
                                onClick={resetIpData}
                                startIcon={<Add />}>New</Button>
                            <Button
                                type={"submit"}
                                variant={"contained"}
                                disabled={!isIpDirty}
                                startIcon={<Save />}>Save</Button>
                        </Grid2>
                    }
                />
                <Box sx={GlobalStyles.bordered}>
                    <BpForm
                        hasLabel={true}
                        field={ipField}
                        control={ipControl}>
                        <BpFormItem
                            hasLabel={true}
                            name={"parent"}
                            type={"dropdown"}
                            selection={ipAsset}
                            control={ipControl}
                        />
                    </BpForm>
                </Box>
            </Box>
        </>
    )
}

export default Index;