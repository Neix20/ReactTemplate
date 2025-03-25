import { useState, useEffect, useRef } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Modal, Tooltip, Box } from "@mui/material";

import { BpLoading, BpForm, BpFormItem, BpHeader, BpImageGallery, BpImageUpload } from "@components";
import { useToggle, useForm, useCusMedia } from "@hooks";

import { Add, Save, Cancel } from "@mui/icons-material";

import { GlobalStyles, Models, SampleData } from "@config";

import { useNavigate, useParams } from "react-router-dom";

import { fetchIncidentGet, fetchIncidentAdd, fetchIncidentUpdate, fetchIncidentUploadImg, fetchScammerGetAll } from "@api";

import SearchMenuList from "./components/SearchMenuList";

function UploadModal(props) {

    const { open, onClose, ImageGallery = (<></>), ..._props } = props;

    const style = {
        modalMain: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 2,
            maxWidth: "90vw",
            maxHeight: "90vh",
            width: "90%",
            padding: 2,
            backgroundColor: "background.paper",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            rowGap: 2
        },
        closeBtn: {
            position: "absolute",
            top: 8,
            right: 8
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Grid2 sx={style.modalMain}>

                {/* Close Button */}
                <Grid2 sx={style.closeBtn}>
                    <Tooltip title={"Close"}>
                        <IconButton onClick={onClose}>
                            <Cancel />
                        </IconButton>
                    </Tooltip>
                </Grid2>

                {/* Title */}
                <Box>
                    <Typography variant={"h6"}>Upload Images</Typography>
                    <Typography variant={"body2"}>Drag and drop your images here or click to browse</Typography>
                </Box>

                {/* Make it Draggable */}
                <BpImageUpload {..._props} sx={{ height: "400px" }} />

                {/* Show Images */}
                <ImageGallery />
            </Grid2>
        </Modal>
    )
}

function Index(props) {

    const { IncidentId = "0" } = useParams();

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    const { flag: refresh, toggle: toggleRefresh } = useToggle();

    const [imgAsset, setImgAsset] = useState([]);
    const [scammer, setScammer] = useState([]);

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
        navigate(`/Admin/Incident`);
    }

    // #region Action
    const getData = () => {
        setLoadingTrue();
        fetchIncidentGet({
            PK: IncidentId
        })
            .then(res => {
                setLoadingFalse();

                const { incident, incidentAsset } = res;
                loadIncData(incident);
                setImgAsset(_ => incidentAsset);
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

                setScammer(_ => _arr);
            })
            .catch(() => {
                setLoadingFalse();
            })
    }
    // #endregion

    useEffect(() => {
        getAllScammer();
        if (IncidentId != "0") {
            getData();
        }
    }, [refresh])

    const onSave = () => {
        const _data = {
            incident: incData,
            incidentAsset: imgAsset
        }

        const _func = (IncidentId == "0") ? () => addData(_data) : () => updateData(_data);
        _func();
    };

    const { flag: uploadModal, open: openUploadModal, close: closeUploadModal } = useToggle(false);

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

    const ImageGallery = () => (
        <BpImageGallery images={imgAsset} onDelete={deleteImgAsset} />
    );
    // #endregion

    const Body = () => (
        <Grid2 container spacing={2}>
            {/* Incident */}
            {/* All We need to do is Modify it To Accept Child Item */}
            <BpForm
                key={incKey} idx={incKey}
                data={incData} field={incField}
                onUpdate={updateIncData} />

            {/* Multiple Scammer */}
            <SearchMenuList selection={scammer.map(x => x.name)} sx={{ width: "100%" }} />

            {/* Multi-Form */}
            <Grid2 container spacing={2} flexDirection={"column"} sx={{ width: "100%" }}>
                <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="h4" sx={{ color: "#FFF" }}>Image Asset</Typography>
                    <Grid2 container spacing={1}>
                        <Button variant={"contained"} onClick={uploadImgAsset} disabled={imgAsset.length == 0}>Upload</Button>
                        <Button variant={"contained"} onClick={openUploadModal}>Add New</Button>
                    </Grid2>
                </Grid2>

                {/* Images */}
                <ImageGallery />
            </Grid2>
        </Grid2>
    );

    const { value: bpFormObj } = useCusMedia({
        xs: {
            cols: 1,
            spacing: 1
        },
        sm: {
            cols: 2,
            spacing: 2
        }
    })

    return (
        <>
            <UploadModal open={uploadModal} onClose={closeUploadModal} ImageGallery={ImageGallery} onAddImage={addImgAsset} />
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
                <Box sx={{ ...GlobalStyles.bordered, borderColor: (theme) => theme.palette.grey[200] }}>
                    <BpForm
                        numCols={bpFormObj?.cols}
                        colSpacing={bpFormObj?.spacing}
                        hasLabel={true}
                        key={incKey} idx={incKey}
                        data={incData} field={incField}
                        onUpdate={updateIncData}>
                        <BpFormItem
                            hasLabel={true} size={bpFormObj?.cols}
                            type={"dropdown"} placeholder={"Select Platform"}
                            name={"platform"} value={incData["platform"]}
                            selection={SampleData.Platform}
                            onChange={updateIncData}
                        />
                    </BpForm>
                </Box>

                {/* Multiple Scammer */}
                <SearchMenuList selection={scammer.map(x => x.name)} />

                <Grid2 container spacing={2} flexDirection={"column"} sx={{ width: "100%" }}>
                    <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                        <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>Image Asset</Typography>
                        <Grid2 container spacing={1}>
                            <Button variant={"contained"} onClick={uploadImgAsset} disabled={imgAsset.length == 0}>Upload</Button>
                            <Button variant={"contained"} onClick={openUploadModal}>Add New</Button>
                        </Grid2>
                    </Grid2>

                    {/* Images */}
                    <ImageGallery />
                </Grid2>

            </Grid2>
        </>
    )
}

export default Index;