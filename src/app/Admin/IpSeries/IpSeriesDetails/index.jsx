import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { BpLoading, BpForm, BpFormItem, BpHeader, BpImageGallery, BpImageUpload } from "@components";
import { useToggle, useForm, useCusMedia } from "@hooks";

import { Add, Save, Cancel } from "@mui/icons-material";

import { GlobalStyles, Models, SampleData } from "@config";

import { useNavigate, useParams } from "react-router-dom";

import { fetchIpSeriesGetAll, fetchIpSeriesGet, fetchIpSeriesAdd, fetchIpSeriesUpdate } from "@api";

import { clsUtility } from "@utility";

function Index(props) {

    const { IpSeriesId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const [ipAsset, setIpAsset] = useState([]);

    const {
        key: ipKey,
        data: ipData,
        field: ipField,
        updateData: updateIpJson,
        updateDataHtml: updateIpData,
        resetData: resetIpData,
        isChanged: isIpChanged,
        loadData: loadIpData
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

    const addData = () => {
        setLoadingTrue();
        fetchIpSeriesAdd(ipData)
            .then(_ => {
                setLoadingFalse();
                goBack();
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const updateData = () => {
        setLoadingTrue();
        fetchIpSeriesUpdate({
            PK: IpSeriesId,
            ...ipData
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

    const onSave = () => {
        const _func = (IpSeriesId == "0") ? () => addData() : () => updateData();
        _func();
    };
    // #endregion

    return (
        <>
            <BpLoading loading={loading} />
            <BpHeader
                start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{clsUtility.capitalize(Models.IpSeries.key)}</Typography>}
                end={
                    <Grid2 container spacing={1}>
                        <Button
                            variant={"contained"}
                            onClick={resetIpData}
                            startIcon={<Add />}>New</Button>
                        <Button
                            variant={"contained"}
                            onClick={onSave}
                            disabled={isIpChanged}
                            startIcon={<Save />}>Save</Button>
                    </Grid2>
                }
            />
            <Grid2 container>
                <Box sx={{ ...GlobalStyles.bordered, borderColor: (theme) => theme.palette.grey[200] }}>
                    <BpForm
                        hasLabel={true}
                        key={ipKey} idx={ipKey}
                        data={ipData} field={ipField}
                        onUpdate={updateIpData}>
                        <BpFormItem
                            hasLabel={true}
                            type={"dropdown"} placeholder={"Select Parent"}
                            name={"parent"} value={ipData["parent"]}
                            selection={ipAsset}
                            onChange={updateIpData}
                        />
                    </BpForm>
                </Box>
            </Grid2>
        </>
    )
}

export default Index;