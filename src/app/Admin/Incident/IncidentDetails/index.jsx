import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { BpLoading, BpForm, BpFormItem, BpHeader, BpImageGallery, BpImageUpload } from "@components";
import { useToggle, useForm, useCusMedia } from "@hooks";

import { Add, Save, Cancel } from "@mui/icons-material";

import { GlobalStyles, Models, SampleData } from "@config";

import { useNavigate, useParams } from "react-router-dom";

import { fetchIncidentGet, fetchIncidentAdd, fetchIncidentUpdate, fetchIncidentUploadImg, fetchScammerGetAll, fetchIpSeriesGetAll } from "@api";

import SearchMenuList from "./components/SearchMenuList";

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

function Index(props) {

    const { IncidentId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const [imgAsset, setImgAsset] = useState([]);

    const { data: scammer, setData: setScammer,
        handleAddData: handleAddScammer, handleRemoveData: handleRemoveScammer } = useFilterData();
    const [scammerSelection, setScammerSelection] = useState([]);

    const { data: ipSeries, setData: setIpSeries,
        handleAddData: handleAddIpSeries, handleRemoveData: handleRemoveIpSeries } = useFilterData();
    const [ipSeriesSelection, setIpSeriesSelection] = useState([]);

    const {
        key: incKey,
        data: incData,
        field: incField,
        updateData: updateIncDataJson,
        updateDataHtml: updateIncData,
        resetData: resetIncData,
        isChanged: isIncChanged,
        loadData: loadIncData
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
        fetchIncidentGet({
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

        // Add "Status" to "Pending"
        data["incident"]["status"] = "Pending";

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

    const onSave = () => {
        const _data = {
            incident: incData,
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
            <BpHeader
                start={<Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{Models.Incident.key}</Typography>}
                end={
                    <Grid2 container spacing={1}>
                        <Button
                            variant={"contained"}
                            onClick={resetIncData}
                            startIcon={<Add />}>New</Button>
                        <Button
                            variant={"contained"}
                            onClick={onSave}
                            startIcon={<Save />}>Save</Button>
                    </Grid2>
                }
            />
            <Grid2 container spacing={1}>
            <Box sx={GlobalStyles.bordered}>
                    <BpForm
                        hasLabel={true}
                        key={incKey} idx={incKey}
                        data={incData} field={incField}
                        onUpdate={updateIncData}>
                        <BpFormItem
                            hasLabel={true}
                            type={"dropdown"} placeholder={"Select Platform"}
                            name={"platform"} value={incData["platform"]}
                            selection={SampleData.Platform}
                            onChange={updateIncData}
                        />
                    </BpForm>
                </Box>

                {/* Multiple Scammer */}
                <SearchMenuList searchField={"scammer"} selection={scammerSelection}
                    data={scammer} handleAddData={handleAddScammer} handleRemoveData={handleRemoveScammer}
                />

                {/* Multiple Ip Series */}
                <SearchMenuList searchField={"ip_series"} selection={ipSeriesSelection}
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
        </>
    )
}

export default Index;