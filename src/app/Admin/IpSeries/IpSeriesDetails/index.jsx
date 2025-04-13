import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { BpHeader, BpLoading, BpForm, BpFormItem } from "@components";
import { useToggle } from "@hooks";

import { Add, Save, Cancel } from "@mui/icons-material";

import { GlobalStyles, Models, SampleData } from "@config";

import { useNavigate, useParams } from "react-router-dom";

import { fetchIpSeriesGetAll, fetchIpSeriesGet, fetchIpSeriesAdd, fetchIpSeriesUpdate } from "@api";

import { clsUtility } from "@utility";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Index(props) {

    const { IpSeriesId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const [ipAsset, setIpAsset] = useState([]);

    const { field: ipField, schema: ipSchema, initial: ipInitial = {} } = Models.IpSeries;
    const { control, handleSubmit, reset: loadIpData, formState: { isDirty: isIpChanged } } = useForm({ resolver: zodResolver(ipSchema) });
    const resetIpData = _ => loadIpData(ipInitial);

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
                    name: x.name,
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
                loadIpData(data);
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
            <Box component={"form"} onSubmit={handleSubmit(onSave)}>
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
                                disabled={!isIpChanged}
                                startIcon={<Save />}>Save</Button>
                        </Grid2>
                    }
                />
                <Grid2 container>
                    <Box sx={GlobalStyles.bordered}>
                        <BpForm
                            hasLabel={true}
                            field={ipField}
                            control={control}>
                            <BpFormItem
                                hasLabel={true}
                                name={"parent"}
                                type={"dropdown"}
                                selection={ipAsset}
                                control={control}
                            />
                        </BpForm>
                    </Box>
                </Grid2>
            </Box>
        </>
    )
}

export default Index;