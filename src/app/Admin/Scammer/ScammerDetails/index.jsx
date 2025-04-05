import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

import { BpLoading, BpDataTable, BpTab, BpForm } from "@components";

import { useToggle, useForm } from "@hooks";

import { fetchScammerGetAllAttr, fetchScammerAdd, fetchScammerUpdate, fetchScammerAttrDelete } from "@api";

import { useNavigate, Link, useParams } from "react-router-dom";

import { GlobalStyles, Models } from "@config";

import { clsUtility } from "@utility";

import { Add, Save, ArrowBack } from "@mui/icons-material";

function Index(props) {

    const { ScammerId = "0" } = useParams();

    const navigate = useNavigate();

    const { flag: refresh, toggle: toggleRefresh } = useToggle(false);
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const {
        key: scammerKey,
        data: scammerData,
        field: scammerField,
        updateDataHtml: updateScammerHtml,
        loadData: loadScammer,
        resetData: resetScammer,
        isChanged: isScamChanged,
    } = useForm(Models.Scammer);

    const [scammerAttrData, setScammerAttrData] = useState([]);

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        getAllScammerAttr();
    }, [refresh]);

    // #region Scammer Actions
    const addScammer = () => {
        setLoadingTrue();
        fetchScammerAdd(scammerData)
            .then(_ => {
                setLoadingFalse();
                toggleRefresh();
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const updateScammer = () => {
        setLoadingTrue();
        fetchScammerUpdate(scammerData)
            .then(_ => {
                setLoadingFalse();
                toggleRefresh();
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }
    // #endregion

    // #region Scammer Attribute Actions
    const getAllScammerAttr = () => {
        setLoadingTrue();
        fetchScammerGetAllAttr({
            PK: ScammerId
        })
            .then(data => {
                setLoadingFalse();

                const { scammer, scammerAttr } = data;
                loadScammer(scammer);
                setScammerAttrData(scammerAttr);
            })
            .catch(err => {
                setLoadingFalse();
            })
    }

    const addScammerAttr = () => {
        navigate(`/Admin/Scammer/${ScammerId}/ScammerAttr/0`);
    }

    const updateScammerAttr = ({ row }) => {
        const id = scammerAttrData[row.id].SK;
        navigate(`/Admin/Scammer/${ScammerId}/ScammerAttr/${id}`)
    }

    const deleteScammerAttr = ({ row }) => {
        const id = scammerAttrData[row.id].SK;
        setLoadingTrue();
        fetchScammerAttrDelete({
            PK: ScammerId,
            SK: id
        })
            .then(_ => {
                setLoadingFalse();
                toggleRefresh();
            })
            .catch(err => {
                setLoadingFalse();
            })
    }
    // #endregion

    const style = {
        main: {
            mb: 2
        }
    }

    const scammerProps = { key: scammerKey, idx: scammerKey, data: scammerData, field: scammerField, onUpdate: updateScammerHtml };
    const loadingProps = { loading, setLoadingTrue, setLoadingFalse };

    const onSaveScammer = () => {
        const _func = (ScammerId == "0") ? () => addScammer() : () => updateScammer();
        _func();
    }

    const tabPages = [
        {
            title: "Details",
            element: (
                <>

                    <Grid2 container
                        spacing={1}
                        alignItems={"center"}
                        justifyContent={"flex-end"}>
                        <Button variant={"outlined"} startIcon={<Add />} onClick={resetScammer}>Reset</Button>
                        <Button variant={"outlined"} startIcon={<Save />} disabled={isScamChanged} onClick={onSaveScammer}>Save</Button>
                    </Grid2>
                    <BpForm hasLabel={true} {...scammerProps} />

                </>
            )
        },
        {
            title: "Attributes",
            element: (
                <BpDataTable
                    data={scammerAttrData}
                    field={Models.ScammerAttr.field}
                    enableRowAction={true}
                    enableTopAction={true}
                    onPreAdd={addScammerAttr}
                    onUpdate={updateScammerAttr}
                    onDelete={deleteScammerAttr}
                />
            )
        }
    ];

    return (
        <>
            <BpLoading loading={loading} />
            <Grid2 container alignItems={"center"} justifyContent={"space-between"} sx={style.main}>
                <Grid2 container alignItems={"center"} spacing={1}>
                    <IconButton onClick={goBack}><ArrowBack /></IconButton>
                    <Typography variant={"h2"} sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>{Models.Scammer.key}</Typography>
                </Grid2>
            </Grid2>

            <Paper sx={{ p: 1 }}>
                <Container maxWidth={"xl"}>
                    <BpTab
                        tabPages={ScammerId == "0" ? tabPages.slice(0, 1) : tabPages}
                        sx={{
                            tabHeadItem: {
                                mr: 2
                            },
                            tabBody: {
                                py: 2
                            }
                        }} />
                </Container>
            </Paper>

        </>
    )
}

export default Index;