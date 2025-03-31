import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, Box, Tooltip, Collapse, TextField, Link as MuLink } from "@mui/material";

import { Images } from "@config";
import { clsUtility } from "@utility";

// #region Components
function TitleSection() {
    return (
        <Grid2 container flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant={"h1"} sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Is this A Scammer?</Typography>
            <Typography variant={"body1"} color={"text.secondary"} sx={{ fontSize: { xs: 11, sm: "0.875rem" } }}>
                Check to see if the person you're dealing with is a scammer
            </Typography>
        </Grid2>
    );
}

import { useForm, useToggle } from "@hooks";
import { BpLoading } from "@components";

import { fetchScammerAttrQuery } from "@api";
import { Search } from "@mui/icons-material";

const template = {
    Scammer: {
        key: "Scammer",
        field: [
            {
                "name": "query",
                "type": "text"
            }
        ]
    }
}

function SearchSection(props) {
    
    const { flag: loadingFlag, open: setLoadingTrue, close: setLoadingFalse } = useToggle();
    
    const { flag, open, close } = useToggle();
    const { flag: isScammer, open: setScammerTrue, close: setScammerFalse } = useToggle();

    // const flag = true;
    // const isScammer = true;

    const { key, data, field, updateDataHtml, resetData } = useForm(template.Scammer);

    const [inc, setInc] = useState({});

    const onSearch = () => {
        setLoadingTrue();
        close();

        fetchScammerAttrQuery(data)
            .then(res => {
                open();
                setLoadingFalse();
                resetData();
                const { scammer = {}, incident = {} } = res;

                if (Object.keys(scammer).length > 0) {
                    setScammerTrue();
                    setInc(_ => incident);
                } else {
                    setScammerFalse();
                }
            })
            .catch(err => {
                resetData();
                setLoadingFalse();
            })
    }

    const style = {
        success: {
            background: "radial-gradient(ellipse at 50% 50%, #98c390, #2E7D32)",
            minHeight: { xs: 0, sm: 100 },
            p: 2,
        },
        error: {
            background: "radial-gradient(ellipse at 50% 50%, #d96b76, #B71C1C)",
            minHeight: { xs: 0, sm: 100 },
            p: 2
        },
        search: {
            width: { xs: "100%", sm: "80%", md: "60%" },
        },
        txtInput: {
            flex: .8,
            flexGrow: 1,
            borderRadius: 0,
        }
    }

    const SearchSuccess = () => {
        return (
            <Grid2 container alignItems={"center"} justifyContent={"center"} sx={style.success}>
                <Typography variant={"h2"} sx={{ fontSize: { xs: "1rem", sm: "2.25rem" } }}>This person doesn't exists in our database!</Typography>
            </Grid2>
        )
    }

    const SearchFail = () => {

        return (
            <Grid2 container flexDirection={"column"}
                spacing={1}
                alignItems={"center"}
                justifyContent={"center"} sx={style.error}>
                <Typography variant={"h2"} sx={{ fontSize: { xs: "1rem", sm: "2.25rem" } }}>Danger! This person is a scammer</Typography>
                <MuLink href={`/Incident/${inc.PK}`} underline={"hover"} sx={{ color: "inherit"}}>
                    <Typography variant={"h3"} sx={{ fontSize: { xs: "0.75rem", sm: "1.75rem" } }}>{inc.scammer}</Typography>
                </MuLink>
            </Grid2>
        )
    }

    const SearchResult = isScammer ? SearchFail : SearchSuccess;

    return (
        <>
            <BpLoading loading={loadingFlag} />
            <Grid2 container alignItems={"center"} justifyContent={"center"}
                sx={{
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    pt: { xs: 4, sm: 4 }
                }}>
                <Grid2 container spacing={1} sx={style.search}>
                    <TextField
                        placeholder={"Social Media Ids, Bank Account..."}
                        type={"text"}
                        name={"query"}
                        value={data["query"]}
                        onChange={updateDataHtml}
                        sx={style.txtInput}
                    />
                    <Button
                        variant={"contained"}
                        color={"warning"}
                        onClick={onSearch}
                        endIcon={<Search />}
                        sx={{ flex: .2, maxWidth: "100px", minWidth: "100px" }}>Search</Button>
                </Grid2>
            </Grid2>
            <Collapse in={flag} sx={{ display: flag ? "block": "none" }}>
                <SearchResult />
            </Collapse>
        </>
    )
}

function AnalyticSection() {

    const data = [
        {
            "name": "no._scammer",
            "value": "215"
        },
        {
            "name": "no._incidents",
            "value": "666"
        },
        {
            "name": "amount_being_scammed",
            "value": "812.83"
        }
    ]

    const renderItem = ({ name, value }) => (
        <Grid2 container spacing={1} flexDirection={"column"} alignItems={"center"}>
            <Typography variant={"h2"} sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>{value}</Typography>
            <Typography variant={"body"} color={"text.secondary"} sx={{ fontSize: { xs: "0.6rem", sm: "1rem" } }}>{clsUtility.capitalize(name)}</Typography>
        </Grid2>
    )

    return (
        <Grid2 container alignItems={"center"} justifyContent={"center"}
            sx={{
                gap: { xs: 2, sm: 5 },
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: { xs: 4, sm: 4 }
            }}>
            {data.map(renderItem)}
        </Grid2>
    )
}

function SourceSection() {
    const data = [
        {
            "name": "Facebook",
            "src": Images.facebook
        },
        {
            "name": "XiaoHongShu",
            "src": Images.xiaohongshu
        },
        {
            "name": "Instagram",
            "src": Images.instagram
        }
    ]

    const style = {
        img: {
            height: { xs: 32, sm: 48 },
            width: { xs: 32, sm: 48 },
        }
    }

    const renderItem = ({ name, src }) => (
        <Tooltip title={clsUtility.capitalize(name)}>
            <Box component={"img"} alt={name} src={src} sx={style.img} />
        </Tooltip>
    )

    return (
        <Grid2 container flexDirection={"column"} spacing={2}
            alignItems={"center"} justifyContent={"center"}
            sx={{
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: { xs: 4, sm: 4 }
            }}>
            <Typography variant={"h2"} sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>Collected From: </Typography>
            <Grid2 container sx={{ gap: { xs: 2, sm: 5 } }}>
                {data.map(renderItem)}
            </Grid2>
        </Grid2>
    )
}

import Chart from "./components/Chart";

function ChartSection() {
    return (
        <Paper sx={{ p: 2 }}>
            <Chart />
        </Paper>
    )
}
// #endregion

function Index(props) {
    return (
        <Container maxWidth={"lg"} sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 5, sm: 5 },
            pt: { xs: 4, sm: 8 },
        }}>
            <TitleSection />
            <SearchSection />
            <AnalyticSection />
            <SourceSection />
            {/* <ChartSection /> */}
        </Container>
    )
}

export default Index;