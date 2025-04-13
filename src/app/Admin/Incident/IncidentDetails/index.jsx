import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { BpLoading, BpForm, BpFormItem, BpHeader, BpImageGallery, BpImageUpload, BpSearchMenuList } from "@components";
import { useToggle } from "@hooks";

import { Add, Save, Cancel } from "@mui/icons-material";

import { GlobalStyles, Models, SampleData } from "@config";

import { useNavigate, useParams } from "react-router-dom";

import { fetchIncidentGetAdmin, fetchIncidentAdd, fetchIncidentUpdate, fetchIncidentUploadImg, fetchScammerGetAll, fetchIpSeriesGetAll } from "@api";

import { useForm } from "react-hook-form";

function useFilterData() {
    const [data, setData] = useState([]);

    const handleAddData = (_data) => {
        setData((prevData) => {
            if (!prevData.includes(_data)) {
                return [...prevData, _data];
            }
            return prevData;
        });
    };

    const handleRemoveData = (obj) => {
        setData((prevData) => prevData.filter((s) => s !== obj));
    };

    return {
        data, setData, handleAddData, handleRemoveData
    }
}

import { zodResolver } from "@hookform/resolvers/zod";

function Index(props) {

    const { IncidentId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const [imgAsset, setImgAsset] = useState([]);

    const { data: scammer, setData: setScammer, handleAddData: handleAddScammer, handleRemoveData: handleRemoveScammer } = useFilterData();
    const [scammerSelection, setScammerSelection] = useState([]);

    const { data: ipSeries, setData: setIpSeries,
        handleAddData: handleAddIpSeries, handleRemoveData: handleRemoveIpSeries } = useFilterData();
    const [ipSeriesSelection, setIpSeriesSelection] = useState([]);

    const { field: incField, schema, initial = {} } = Models.Incident;
    const { control, handleSubmit, reset: loadIncData, formState: { isDirty: isIncChanged } } = useForm({ resolver: zodResolver(schema) });
    const resetIncData = _ => loadIncData(initial);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        getAllIpSeries();
        getAllScammer();
        if (IncidentId != "0") {
            getData();
        }
    }, [refresh]);

    // #region Action
    const getData = () => {
        setLoadingTrue();
        fetchIncidentGetAdmin({
            PK: IncidentId
        })
            .then(res => {
                setLoadingFalse();

                const { incident, incidentAsset, scammer, ipSeries } = res;
                loadIncData(incident);
                setImgAsset(_ => incidentAsset);
                setScammer(_ => scammer);
                setIpSeries(_ => ipSeries);

            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    const addData = (data) => {
        setLoadingTrue();
        fetchIncidentAdd(data)
            .then(res => {
                setLoadingFalse();
                goBack();
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    const updateData = (data) => {
        setLoadingTrue();
        fetchIncidentUpdate({
            PK: IncidentId,
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

    // Change this into An API
    const getAllScammer = () => {
        setLoadingTrue();
        fetchScammerGetAll()
            .then(res => {
                setLoadingFalse();

                const { data = [] } = res;

                const _arr = data.map(x => ({
                    name: x.name,
                    value: x.PK
                }));

                setScammerSelection(_ => _arr);
            })
            .catch(() => {
                setLoadingFalse();
            })
    }

    const getAllIpSeries = () => {
        setLoadingTrue();
        fetchIpSeriesGetAll()
            .then(res => {
                setLoadingFalse();

                const { data = [] } = res;

                const _arr = data.map(x => ({
                    name: x.name,
                    value: x.PK
                }));

                setIpSeriesSelection(_ => _arr);
            })
            .catch(() => {
                setLoadingFalse();
            })
    }
    // #endregion

    const onSave = (data) => {
        const _data = {
            incident: data,
            incidentAsset: imgAsset,
            scammer,
            ipSeries
        };

        const _func = (IncidentId == "0") ? () => addData(_data) : () => updateData(_data);
        _func();
    };

    // #region Images
    const addImgAsset = (item) => {
        setImgAsset((arr) => [...arr, item]);
    }

    const deleteImgAsset = (idx) => {
        let arr = [...imgAsset];

        if (idx > -1) {
            arr.splice(idx, 1)
        }

        setImgAsset(_ => arr);
    }

    const uploadImgAsset = () => {
        // Array of FileName, ContentType and Data
        setLoadingTrue();
        fetchIncidentUploadImg(imgAsset)
            .then(res => {
                const { data } = res;
                setImgAsset(_ => data);

                setLoadingFalse();
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }
    // #endregion
    return (
        <>
            <BpLoading loading={loading} />
            <Box component={"form"} onSubmit={handleSubmit(onSave)}>
                <BpHeader
                    start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{Models.Incident.key}</Typography>}
                    end={
                        <Grid2 container spacing={1}>
                            <Button
                                type={"button"}
                                variant={"contained"}
                                onClick={resetIncData}
                                startIcon={<Add />}>New</Button>
                            <Button
                                type={"submit"}
                                variant={"contained"}
                                disabled={!isIncChanged}
                                startIcon={<Save />}>Save</Button>
                        </Grid2>
                    }
                />
                <Grid2 container spacing={1}>
                    <Box sx={GlobalStyles.bordered}>
                        <BpForm
                            hasLabel={true}
                            field={incField}
                            control={control}
                        >
                            <BpFormItem
                                hasLabel={true}
                                name={"platform"}
                                type={"dropdown"}
                                control={control}
                                selection={SampleData.Platform}

                            />
                        </BpForm>
                    </Box>

                    {/* Multiple Scammer */}
                    <BpSearchMenuList
                        data={scammer} searchField={"scammer"} selection={scammerSelection}
                        handleAddData={handleAddScammer} handleRemoveData={handleRemoveScammer}
                    />

                    {/* Multiple Ip Series */}
                    <BpSearchMenuList
                        searchField={"ip_series"} selection={ipSeriesSelection}
                        data={ipSeries} handleAddData={handleAddIpSeries} handleRemoveData={handleRemoveIpSeries}
                    />

                    {/* Image Asset */}
                    <Grid2 container spacing={2} flexDirection={"column"} sx={{ width: "100%" }}>
                        <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                            <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>Image Asset</Typography>
                            <Button variant={"contained"} onClick={uploadImgAsset} disabled={imgAsset.length == 0}>Upload</Button>
                        </Grid2>

                        {/* Upload Image */}
                        <BpImageUpload onAddImage={addImgAsset} sx={{ height: "180px" }} />

                        {/* Images */}
                        <BpImageGallery images={imgAsset} onDelete={deleteImgAsset} />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Index;