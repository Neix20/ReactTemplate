import { useState, useEffect, useRef } from "react";

import { Container, Grid2, Typography, Button, IconButton, Box, Tooltip, Paper, Card } from "@mui/material";
import { GlobalStyles, SampleData } from "@config";

import Stepper from "./components/Stepper";

import { BpBasicFormItem, BpImageGallery, BpImageUpload } from "@components";
import { useFormDataLs } from "@hooks";

import { Delete, Add, FileUpload } from "@mui/icons-material";

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

function SocialMediaSection(props) {

    const {
        data,
        addDataHtml: onAdd,
        updateDataHtml: onUpdate,
        deleteData: onDelete
    } = useFormDataLs();

    const renderItem = (item, ind) => {

        const { idx = "" } = item;

        const onUpdateItem = (evt) => onUpdate(evt, idx);
        const onDeleteItem = () => onDelete(idx);

        return (
            <>
                <Grid2 container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Grid2 item size={3} sx={{ display: "flex" }}>
                        <BpBasicFormItem
                            type={"dropdown"} placeholder={"Select Platform"}
                            name={"platform"} value={item["platform"]}
                            selection={SampleData.Platform}
                            onChange={onUpdateItem}
                        />
                    </Grid2>
                    <Grid2 item size={9} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <BpBasicFormItem
                            type={"text"} placeholder={"Enter username / Profile URL"}
                            name={"post_url"} value={item["post_url"]}
                            onChange={onUpdateItem}
                        />
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={1} sx={{ display: { xs: "flex", sm: "none" } }}>

                    <Grid2 item size={10} container spacing={1}>
                        <BpBasicFormItem
                            type={"dropdown"} placeholder={"Select Platform"}
                            name={"platform"} value={item["platform"]}
                            selection={SampleData.Platform}
                            onChange={onUpdateItem}
                        />
                        <BpBasicFormItem
                            type={"text"} placeholder={"Enter username / Profile URL"}
                            name={"post_url"} value={item["post_url"]}
                            onChange={onUpdateItem}
                        />
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

    return (
        <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography>Social Media</Typography>
            {data.map(renderItem)}
            <Grid2 container>
                <Button startIcon={<Add />} onClick={onAdd} variant={"contained"}>Add Social Media</Button>
            </Grid2>
        </Grid2>
    )
}

function PaymentMethod(props) {

    const {
        data,
        addDataHtml: onAdd,
        updateDataHtml: onUpdate,
        deleteData: onDelete
    } = useFormDataLs();

    const renderItem = (item, ind) => {

        const { idx = "" } = item;

        const onUpdateItem = (evt) => onUpdate(evt, idx);
        const onDeleteItem = () => onDelete(idx);

        return (
            <>
                <Grid2 container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Grid2 item size={3} sx={{ display: "flex" }}>
                        <BpBasicFormItem
                            type={"dropdown"} placeholder={"Select Platform"}
                            name={"platform"} value={item["platform"]}
                            selection={SampleData.Platform}
                            onChange={onUpdateItem}
                        />
                    </Grid2>
                    <Grid2 item size={9} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <BpBasicFormItem
                            type={"text"} placeholder={"Enter username / Profile URL"}
                            name={"post_url"} value={item["post_url"]}
                            onChange={onUpdateItem}
                        />
                        <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                            <Delete />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={1} sx={{ display: { xs: "flex", sm: "none" } }}>

                    <Grid2 item size={10} container spacing={1}>
                        <BpBasicFormItem
                            type={"dropdown"} placeholder={"Select Platform"}
                            name={"platform"} value={item["platform"]}
                            selection={SampleData.Platform}
                            onChange={onUpdateItem}
                        />
                        <BpBasicFormItem
                            type={"text"} placeholder={"Enter username / Profile URL"}
                            name={"post_url"} value={item["post_url"]}
                            onChange={onUpdateItem}
                        />
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

    return (
        <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography>Payment Method</Typography>
            {data.map(renderItem)}
            <Grid2 container>
                <Button startIcon={<Add />} onClick={onAdd} variant={"contained"}>Add Payment Method</Button>
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
    }

    // #region Image Asset
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
    // #endregion

    return (
        <Container maxWidth={"xl"} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 2, sm: 2 },
            pt: { xs: 4, sm: 4 }
        }}>

            {/* Header */}
            <Grid2 container flexDirection={"column"} spacing={2}>
                <Typography variant={"h2"} sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Report A Scammer</Typography>
                <Stepper step={step} />
            </Grid2>

            <Paper sx={{ width: "100%", padding: 2 }}>
                {/* First Page */}
                <Grid2 hidden={step !== 0} sx={style.reportBody}>
                    <Grid2 container flexDirection={"column"} spacing={2}>
                        <Grid2 container justifyContent={"center"}>
                            <Box component={"img"} src={Page1} sx={style.img} />
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={1}>
                            <Typography>Name</Typography>
                            <BpBasicFormItem type={"text"} placeholder={"Name"} name={"name"} />
                        </Grid2>
                        <SocialMediaSection />
                        <PaymentMethod />
                    </Grid2>
                </Grid2>

                {/* Second Page */}
                <Grid2 hidden={step !== 1} sx={style.reportBody}>
                    <Grid2 container flexDirection={"column"} spacing={2}>
                        <Grid2 container justifyContent={"center"}>
                            <Box component={"img"} src={Page2} sx={style.img} />
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={1}>
                            <Typography>Pretend to Be</Typography>
                            <BpBasicFormItem type={"dropdown"}
                                placeholder={"What did they pretend to be?"}
                                name={"pretend_to_be"}
                                sx={style.txtInput} />
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={1}>
                            <Typography>Pretend to Sell</Typography>
                            <BpBasicFormItem type={"text"}
                                placeholder={"What did they pretend to sell?"}
                                name={"pretend_to_sell"}
                                sx={style.txtInput} />
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={1}>
                            <Typography>Total Amount Scammed (RM)</Typography>
                            <BpBasicFormItem type={"decimal"}
                                placeholder={"Enter Amount"}
                                name={"total_amount"}
                                sx={style.txtInput} />
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={1}>
                            <Typography>Transaction Date</Typography>
                            <BpBasicFormItem type={"date"}
                                name={"transaction_date"}
                                sx={style.txtInput} />
                        </Grid2>
                    </Grid2>
                </Grid2>

                {/* Third Page */}
                <Grid2 hidden={step !== 2} sx={style.reportBody}>
                    <Grid2 container flexDirection={"column"} spacing={2}>
                        <Grid2 container justifyContent={"center"}>
                            <Box component={"img"} src={Page3} sx={style.img} />
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={1}>
                            <Typography>Comments</Typography>
                            <BpBasicFormItem type={"textarea"}
                                placeholder={"Enter Amount Do you hve anything to comment about this incident?"}
                                name={"total_amount"}
                            />
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={1}>
                            <Typography>Upload Screenshots</Typography>
                            <BpImageUpload onAddImage={addImgAsset} />
                            <BpImageGallery images={imgAsset} onDelete={deleteImgAsset} />
                        </Grid2>
                    </Grid2>

                </Grid2>

                {/* Button */}
                <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                    <Button variant={"outlined"} onClick={minus} sx={{ visibility: step < 1 ? "hidden" : "visible" }}>Previous</Button>
                    <Button variant={"outlined"} sx={{ display: step == 2 ? "block" : "none" }}>Submit</Button>
                    <Button variant={"contained"} onClick={add} sx={{ display: step < 2 ? "block" : "none" }}>Next</Button>
                </Grid2>
            </Paper>
        </Container>
    )
}

export default Index;