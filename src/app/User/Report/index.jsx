import { useState, useEffect, useRef } from "react";

import { Container, Grid2, Typography, Button, IconButton, Box, Tooltip, Paper, Card } from "@mui/material";
import { GlobalStyles, SampleData } from "@config";

import Stepper from "./components/Stepper";

import { BpFormItem, BpInput, BpImageGallery, BpImageUpload, BpLoading } from "@components";

import { useForm, useFormDataLs, useToggle } from "@hooks";

import { Delete, Add } from "@mui/icons-material";

import { fetchIpSeriesGetAll } from "@api";

function useStep() {
    const [step, setStep] = useState(0);

    const add = () => setStep(pVal => pVal + 1);
    const minus = () => setStep(pVal => pVal - 1);

    return {
        step, add, minus
    }
}

import Page1 from "./img/page_1.jpeg";
import Page2 from "./img/page_2.jpeg";
import Page3 from "./img/page_3.jpeg";

import { z } from "zod";

import { Controller } from "react-hook-form";

const template = {
    report: {
        key: "report",
        schema: z.object({
            name: z.string(),
            social_media: z.array(z.object({
                platform: z.string().min(1, "Platform is required"),
                post_url: z.string().min(1, "Post URL is required"),
            })).optional(),
            payment_method: z.array(z.object({
                platform: z.string().min(1, "Platform is required"),
                post_url: z.string().min(1, "Post URL is required"),
            })).optional(),
            nickname: z.array(z.object({
                value: z.string().min(1, "Nickname is required"),
            })).optional(),
            phone_number: z.array(z.object({
                value: z.string().min(1, "Phone Number is required"),
            })).optional(),
            pretend_to_be: z.string().min(1, "Pretend to be is required"),
            pretend_to_sell: z.array(z.object({
                label: z.any(),
                value: z.string()
            })),
            total_amount: z.number(),
            transaction_date: z.string().date("Invalid date"),
            post: z.object({
                platform: z.string().optional(),
                post_url: z.string().optional(),
            })
        }),
        field: [
            {
                "name": "pretend_to_sell",
                "type": "multi-dropdown",
            }
        ],
        initial: {
            name: "",
            social_media: [],
            nickname: [],
            payment_method: [],
            phone_number: [],
            pretend_to_sell: null,
            pretend_to_be: "",
            total_amount: 0,
            transaction_date: "",
            post: {
                platform: "",
                post_url: ""
            },
            comments: ""
        }
    }
}

function NickNameSection(props) {

    const { term = "", control = null } = props;
    const { data, append: onAdd, remove: onDelete } = useFormDataLs({ key: term, control });

    const renderItem = (item, ind) => {
        const onDeleteItem = () => onDelete(ind);
        return (
            <>
                <Grid2 sx={{ display: { xs: "none", sm: "block" } }}>
                    <Grid2 item size={12} sx={{ display: "flex", gap: 1 }}>
                        <BpInput name={`${term}.${ind}.value`} type={"text"} control={control} placeholder={"Enter Nickname"} />
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={1} sx={{ display: { xs: "flex", sm: "none" } }}>
                    <Grid2 item size={10} container spacing={1}>
                        <BpInput name={`${term}.${ind}.value`} type={"text"} control={control} placeholder={"Nickname"} />
                    </Grid2>
                    <Grid2 item size={2}>
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
            </>
        )
    }

    const _onAdd = _ => onAdd({});

    return (
        <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography>Nickname</Typography>
            {data.map(renderItem)}
            <Grid2 container>
                <Button startIcon={<Add />} onClick={_onAdd} variant={"contained"}>Alias</Button>
            </Grid2>
        </Grid2>
    )
}

function SocialMediaSection(props) {

    const { term = "", control = null } = props;
    const { data, append: onAdd, remove: onDelete } = useFormDataLs({ key: term, control });

    const renderItem = (item, ind) => {
        const onDeleteItem = () => onDelete(ind);
        return (
            <>
                <Grid2 container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Grid2 item size={3} sx={{ display: "flex" }}>
                        <BpInput name={`${term}.${ind}.platform`} type={"dropdown"}
                            placeholder={"Platform"} selection={SampleData.Platform}
                            control={control} />
                    </Grid2>
                    <Grid2 item size={9} sx={{ display: "flex", gap: 1 }}>
                        <BpInput name={`${term}.${ind}.post_url`} type={"text"}
                            placeholder={"Enter username / Profile URL"}
                            control={control} />
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={1} sx={{ display: { xs: "flex", sm: "none" } }}>
                    <Grid2 item size={10} container spacing={1}>
                        <BpInput
                            name={`${term}.${ind}.platform`} type={"dropdown"}
                            placeholder={"Platform"} selection={SampleData.Platform}
                            control={control} />
                        <BpInput
                            name={`${term}.${ind}.post_url`} type={"text"}
                            placeholder={"Enter username / Profile URL"}
                            control={control} />
                    </Grid2>
                    <Grid2 item size={2}>
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
            </>
        )
    }

    const _onAdd = _ => onAdd({});

    return (
        <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography>Social Media</Typography>
            {data.map(renderItem)}
            <Grid2 container>
                <Button startIcon={<Add />} onClick={_onAdd} variant={"contained"}>Add Social Media</Button>
            </Grid2>
        </Grid2>
    )
}

function PaymentMethodSection(props) {
    const { term = "", control = null } = props;
    const { data, append: onAdd, remove: onDelete } = useFormDataLs({ key: term, control });

    const renderItem = (item, ind) => {
        const onDeleteItem = () => onDelete(ind);
        return (
            <>
                <Grid2 container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Grid2 item size={3} sx={{ display: "flex" }}>
                        <BpInput name={`${term}.${ind}.platform`} type={"dropdown"}
                            placeholder={"Platform"} selection={SampleData.Platform}
                            control={control} />
                    </Grid2>
                    <Grid2 item size={9} sx={{ display: "flex", gap: 1 }}>
                        <BpInput name={`${term}.${ind}.post_url`} type={"text"}
                            placeholder={"Enter username / Profile URL"}
                            control={control} />
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={1} sx={{ display: { xs: "flex", sm: "none" } }}>
                    <Grid2 item size={10} container spacing={1}>
                        <BpInput
                            name={`${term}.${ind}.platform`} type={"dropdown"}
                            placeholder={"Platform"} selection={SampleData.Platform}
                            control={control} />
                        <BpInput
                            name={`${term}.${ind}.post_url`} type={"text"}
                            placeholder={"Enter username / Profile URL"}
                            control={control} />
                    </Grid2>
                    <Grid2 item size={2}>
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
            </>
        )
    }

    const _onAdd = _ => onAdd({});

    return (
        <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography>Payment Method</Typography>
            {data.map(renderItem)}
            <Grid2 container>
                <Button startIcon={<Add />} onClick={_onAdd} variant={"contained"}>Add Payment Method</Button>
            </Grid2>
        </Grid2>
    )
}

function PhoneNumberSection(props) {

    const { term = "", control = null } = props;
    const { data, append: onAdd, remove: onDelete } = useFormDataLs({ key: term, control });

    const renderItem = (item, ind) => {
        const onDeleteItem = () => onDelete(ind);
        return (
            <>
                <Grid2 sx={{ display: { xs: "none", sm: "block" } }}>
                    <Grid2 item size={12} sx={{ display: "flex", gap: 1 }}>
                        <BpInput name={`${term}.${ind}.value`} type={"text"} control={control} placeholder={"Enter Phone No"} />
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={1} sx={{ display: { xs: "flex", sm: "none" } }}>
                    <Grid2 item size={10} container spacing={1}>
                        <BpInput name={`${term}.${ind}.value`} type={"text"} control={control} placeholder={"Enter Phone No"} />
                    </Grid2>
                    <Grid2 item size={2}>
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
            </>
        )
    }

    const _onAdd = _ => onAdd({});

    return (
        <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography>Phone Number</Typography>
            {data.map(renderItem)}
            <Grid2 container>
                <Button startIcon={<Add />} onClick={_onAdd} variant={"contained"}>Phone No</Button>
            </Grid2>
        </Grid2>
    )
}

function Index(props) {

    const { step, add, minus } = useStep();

    const style = {
        reportBody: (theme) => ({
            mb: 2,

        }),
        img: {
            width: { xs: "180px", sm: "240px" },
            height: { xs: "180px", sm: "240px" }
        }
    };

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();

    // #region Ip Series Actions
    const [ipSeriesSelection, setIpSeriesSelection] = useState([]);

    const getAllIpSeries = () => {
        setLoadingTrue();
        fetchIpSeriesGetAll()
            .then(res => {
                setLoadingFalse();

                const { data = [] } = res;

                const _arr = data.map(x => ({
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

    // #region Image Asset
    const { flag: imgErrFlag, open: setImgErrTrue, close: setImgErrFalse } = useToggle();
    const [imgAsset, setImgAsset] = useState([]);

    const addImgAsset = (item) => {
        setImgAsset((arr) => [...arr, item]);
        setImgErrFalse();
    }

    const deleteImgAsset = (idx) => {
        let arr = [...imgAsset];

        if (idx > -1) {
            arr.splice(idx, 1)
        }

        setImgAsset(_ => arr);
    }
    // #endregion

    useEffect(() => {
        getAllIpSeries();
    }, []);

    const { control, handleSubmit, isDirty } = useForm(template.report);

    const onSubmit = (data) => {
        if (imgAsset.length <= 0) {
            setImgErrTrue();
            alert("Error! Must have at least one image");
            return;
        }

        alert("Success!");
        setImgErrFalse();
        console.log(data);
    }

    return (
        <Container maxWidth={"xl"} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 2, sm: 2 },
            pt: { xs: 4, sm: 4 }
        }}>

            <BpLoading loading={loading} />

            {/* Header */}
            <Grid2 container flexDirection={"column"} spacing={2}>
                <Typography variant={"h2"} sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Report A Scammer</Typography>
                <Stepper step={step} />
            </Grid2>

            <Paper sx={{ width: "100%", padding: 2 }}>
                <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
                    {/* First Page */}
                    <Grid2 hidden={step !== 0} sx={style.reportBody}>
                        <Grid2 container flexDirection={"column"} spacing={2}>
                            <Grid2 container justifyContent={"center"}>
                                <Box component={"img"} src={Page1} sx={style.img} />
                            </Grid2>
                            <BpInput name={"name"} type={"text"}
                                label={"Name"} placeholder={"Name"}
                                control={control} hasLabel={true} />
                            <NickNameSection term={"nickname"} control={control} />
                            <PhoneNumberSection term={"phone_number"} control={control} />
                            <SocialMediaSection term={"social_media"} control={control} />
                            <PaymentMethodSection term={"payment_method"} control={control} />
                        </Grid2>
                    </Grid2>

                    {/* Second Page */}
                    <Grid2 hidden={step !== 1} sx={style.reportBody}>
                        <Grid2 container flexDirection={"column"} spacing={2}>
                            <Grid2 container justifyContent={"center"}>
                                <Box component={"img"} src={Page2} sx={style.img} />
                            </Grid2>
                            <BpInput 
                                name={"pretend_to_be"} 
                                type={"dropdown"} 
                                control={control}
                                label={"Pretend To Be"}
                                placeholder={"What did they pretend to be?"} 
                                selection={SampleData.Seller} />
                            <BpInput
                                name={"pretend_to_sell"} 
                                type={"multi-dropdown"}
                                control={control}
                                selection={ipSeriesSelection}
                                label={"Pretend To Sell"}
                                placeholder={"Labubu"}
                            />

                            <BpInput name={"total_amount"} type={"decimal"} control={control} placeholder={"Enter Amount"} label={"Total Amount Scammed (RM)"} hasLabel={true} />
                            <BpInput name={"transaction_date"} type={"date"} control={control} placeholder={"Enter Date"} label={"Transaction Date"} hasLabel={true} />
                            <Grid2 container flexDirection={"column"} spacing={1}>
                                <Typography>(Optional) Have you ever posted this on your social media?</Typography>
                                <Grid2 container>
                                    <Grid2 item size={3}>
                                        <BpInput name={"post.platform"} type={"dropdown"} control={control} placeholder={"Select Platform"} selection={SampleData.Platform} />
                                    </Grid2>
                                    <Grid2 item size={9}>
                                        <BpInput name={"post.post_url"} type={"text"} control={control} placeholder={"https://www.facebook.com/username"} />
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>

                    {/* Third Page */}
                    <Grid2 hidden={step !== 2} sx={style.reportBody}>
                        <Grid2 container flexDirection={"column"} spacing={2}>
                            <Grid2 container justifyContent={"center"}>
                                <Box component={"img"} src={Page3} sx={style.img} />
                            </Grid2>
                            <BpInput name={"comments"} type={"textarea"} control={control} placeholder={"Do you have anything to comment about this incident?"} label={"(Optional) Comments"} hasLabel={true} />
                            <Grid2 container flexDirection={"column"} spacing={1}>
                                <Typography>Upload Screenshots</Typography>
                                <BpImageUpload onAddImage={addImgAsset} error={imgErrFlag} />
                                <BpImageGallery images={imgAsset} onDelete={deleteImgAsset} />
                            </Grid2>
                        </Grid2>
                    </Grid2>

                    {/* Button */}
                    <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                        <Button type={"button"} variant={"outlined"} onClick={minus} sx={{ visibility: step < 1 ? "hidden" : "visible" }}>Previous</Button>
                        <Button type={"submit"} variant={"outlined"} disabled={!isDirty} sx={{ display: step == 2 ? "block" : "none" }}>Submit</Button>
                        <Button type={"button"} variant={"contained"} onClick={add} sx={{ display: step < 2 ? "block" : "none" }}>Next</Button>
                    </Grid2>
                </Box>
            </Paper>
        </Container>
    )
}

export default Index;