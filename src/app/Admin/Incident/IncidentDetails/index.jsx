import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";
import { Add, Save, Cancel } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";

import { BpLoading, BpForm, BpFormItem, BpInput, BpHeader, BpImageGallery, BpImageUpload } from "@components";
import { useToggle, useForm } from "@hooks";

import { GlobalStyles, Models, SampleData } from "@config";

import { fetchIncidentGetAdmin, fetchIncidentAdd, fetchIncidentUpdate, fetchIncidentUploadImg, fetchScammerGetAll, fetchIpSeriesGetAll } from "@api";

import { useWatch } from "react-hook-form";

function Index(props) {

    const { IncidentId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const [scammerSelection, setScammerSelection] = useState([]);
    const [ipSeriesSelection, setIpSeriesSelection] = useState([]);

    // Fix This for Incident
    const { control: multiSelControl, loadData: loadMultiSel, isDirty: isMultiDirty } = useForm({});

    const scammer = useWatch({ control: multiSelControl, name: "scammer" });
    const ipSeries = useWatch({ control: multiSelControl, name: "ipSeries" });

    const {
        field: incField,
        control: incControl,
        handleSubmit: handleIncSubmit,
        loadData: loadIncData,
        resetData: resetIncData,
        isDirty: isIncDirty
    } = useForm(Models.Incident);

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
                
                loadMultiSel(_ => ({ scammer, ipSeries }));

            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            });
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
            });
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
                    label: x.name,
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
                    image: x.image,
                    label: x.name,
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
    const [imgAsset, setImgAsset] = useState([]);

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

    const formatIpSeriesOptionLabel = ({ label, image }) => {
        return (
            <Grid2 container spacing={1}>
                <Box component={"img"} src={image} alt={label} sx={{ width: "20px", height: "20px" }} />
                <Typography>{label}</Typography>
            </Grid2>
        );
    };

    return (
        <>
            <BpLoading loading={loading} />
            <Box component={"form"} onSubmit={handleIncSubmit(onSave)}>
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
                                disabled={!isIncDirty && !isMultiDirty}
                                startIcon={<Save />}>Save</Button>
                        </Grid2>
                    }
                />
                <Grid2 container spacing={1}>
                    <Box sx={GlobalStyles.bordered}>
                        <BpForm
                            hasLabel={true}
                            field={incField}
                            control={incControl}
                        >
                            <BpFormItem
                                hasLabel={true}
                                name={"platform"}
                                type={"dropdown"}
                                control={incControl}
                                selection={SampleData.Platform}
                            />
                        </BpForm>
                    </Box>

                    {/* Multiple Scammer */}
                    <Grid2 sx={{ width: "100%" }}>
                        <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>
                            Scammer
                        </Typography>
                        <BpInput name={"scammer"} type={"multi-dropdown"} control={multiSelControl} selection={scammerSelection} />
                    </Grid2>

                    {/* Multiple Ip Series */}
                    <Grid2 sx={{ width: "100%" }}>
                        <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>
                            Ip Series
                        </Typography>
                        <BpInput 
                            name={"ipSeries"} type={"multi-dropdown"} 
                            control={multiSelControl} selection={ipSeriesSelection}
                            formatOptionLabel={formatIpSeriesOptionLabel} />
                    </Grid2>

                    {/* Image Asset */}
                    <Grid2 container spacing={2} flexDirection={"column"} sx={{ width: "100%" }}>
                        <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                            <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>Image Asset</Typography>
                            <Button variant={"contained"} onClick={uploadImgAsset} disabled={imgAsset.length == 0}>Upload</Button>
                        </Grid2>

                        {/* Upload Image */}
                        <BpImageUpload onAdd={addImgAsset} error={null} sx={{ height: "180px" }} />
                        <BpImageGallery data={imgAsset} onDelete={deleteImgAsset} />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Index;