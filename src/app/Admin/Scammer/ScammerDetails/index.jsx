import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, alertTitleClasses } from "@mui/material";

import { BpLoading, BpDataTable, BpTab, BpForm } from "@components";

import { useToggle } from "@hooks";

import { fetchScammerGetAllAttr, fetchScammerAdd, fetchScammerUpdate, fetchScammerAttrDelete } from "@api";

import { useNavigate, Link, useParams } from "react-router-dom";

import { GlobalStyles, Models } from "@config";

import { clsUtility } from "@utility";

import { Add, Save, ArrowBack } from "@mui/icons-material";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Index(props) {

    const { ScammerId = "0" } = useParams();

    const navigate = useNavigate();

    const { flag: refresh, toggle: toggleRefresh } = useToggle(false);
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const { field: scammerField, schema, initial = {} } = Models.Scammer;
    const { control, handleSubmit, reset: loadScammer, formState: { isDirty: isScamChanged } } = useForm({ resolver: zodResolver(schema) });
    const resetScammer = _ => loadScammer(initial);

    const [scammerAttrData, setScammerAttrData] = useState([]);

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        getAllScammerAttr();
    }, [refresh]);

    // #region Scammer Actions
    const addScammer = (data) => {
        setLoadingTrue();
        fetchScammerAdd(data)
            .then(_ => {
                setLoadingFalse();
                toggleRefresh();
                goBack();
            })
            .catch(err => {
                setLoadingFalse();
                alert("Error!");
            })
    }

    const updateScammer = (data) => {
        setLoadingTrue();
        fetchScammerUpdate(data)
            .then(_ => {
                setLoadingFalse();
                toggleRefresh();
                goBack();
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

    const onSaveScammer = (data) => {
        const _func = (ScammerId == "0") ? () => addScammer(data) : () => updateScammer(data);
        _func();
    }

    const tabPages = [
        {
            title: "Details",
            element: (
                <Box component={"form"} onSubmit={handleSubmit(onSaveScammer)}>
                    <Grid2 container
                        spacing={1}
                        alignItems={"center"}
                        justifyContent={"flex-end"}>
                        <Button type={"button"} variant={"outlined"} startIcon={<Add />} onClick={resetScammer}>Reset</Button>
                        <Button type={"submit"} variant={"outlined"} startIcon={<Save />} disabled={!isScamChanged}>Save</Button>
                    </Grid2>
                    <BpForm hasLabel={true} field={scammerField} control={control} />
                </Box>
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
                    enableDefaultAdd={true}
                    onBtnAdd={addScammerAttr}
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