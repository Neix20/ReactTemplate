import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, Box, Tooltip, Collapse, TextField, Link as MuLink } from "@mui/material";

import { Images } from "@config";
import { clsUtility } from "@utility";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

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

import { useToggle, useForm } from "@hooks";
import { BpLoading, BpInput } from "@components";

import { fetchScammerAttrQuery, fetchUserDashboard } from "@api";
import { Search } from "@mui/icons-material";

import { z } from "zod";

const template = {
    Scammer: {
        key: "Scammer",
        field: [
            {
                "name": "query",
                "type": "text"
            }
        ],
        initial: {
            query: ""
        },
        schema: z.object({
            query: z.string().min(1, "Query is required")
        })
    }
}

function SearchSection(props) {

    const { setLoadingTrue, setLoadingFalse } = props;

    const { flag, open, close } = useToggle();
    const { flag: isScammer, open: setScammerTrue, close: setScammerFalse } = useToggle();

    const { control, handleSubmit, resetData } = useForm(template.Scammer);

    const { PK: userId } = useSelector(Selectors.userSelect);

    const [inc, setInc] = useState({});

    const onSearch = (data) => {

        const _data = {
            userId,
            ...data
        }

        setLoadingTrue();
        close();

        fetchScammerAttrQuery(_data)
            .then(res => {
                open();
                setLoadingFalse();
                resetData();
                const { scammer = {}, incident = {} } = res;

                if (Object.keys(scammer).length > 0) {
                    setScammerTrue();
                    setInc(_ => incident.at(0));
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
            display: "flex",
            gap: 1,
            width: { xs: "100%", sm: "80%", md: "60%" },
        },
        txtInput: {
            flex: .8,
            flexGrow: 1,
            borderRadius: 0
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
                <MuLink href={`/Incident/${inc.PK}`} underline={"hover"} sx={{ color: "inherit" }}>
                    <Typography variant={"h3"} sx={{ fontSize: { xs: "0.75rem", sm: "1.75rem" } }}>{inc.title}</Typography>
                </MuLink>
            </Grid2>
        )
    }

    const SearchResult = isScammer ? SearchFail : SearchSuccess;

    return (
        <>
            <Grid2 container alignItems={"center"} justifyContent={"center"}
                sx={{
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    pt: { xs: 4, sm: 4 }
                }}>

                <Box component={"form"} onSubmit={handleSubmit(onSearch)} sx={style.search}>
                    <BpInput
                        name={"query"} type={"text"}
                        placeholder={"Social Media Ids, Bank Account..."}
                        control={control}
                        sx={style.txtInput} />
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"warning"}
                        endIcon={<Search />}
                        sx={{ flex: .2, maxWidth: "100px", minWidth: "100px" }}>Search</Button>
                </Box>
            </Grid2>
            <Collapse in={flag} sx={{ display: flag ? "block" : "none" }}>
                <SearchResult />
            </Collapse>
        </>
    )
}

function AnalyticSection(props) {

    const { data = {} } = props;

    data["total_amount_scammed"] = clsUtility.formatCurrency(data["total_amount_scammed"]);

    const renderItem = ({ key, value }) => (
        <Grid2 container spacing={1} flexDirection={"column"} alignItems={"center"}>
            <Typography variant={"h2"} sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>{value}</Typography>
            <Typography variant={"body"} color={"text.secondary"} sx={{ fontSize: { xs: "0.6rem", sm: "1rem" } }}>{clsUtility.capitalize(key)}</Typography>
        </Grid2>
    );

    const arr = Object.entries(data).map(([key, value]) => ({ key, value }));

    return (
        <Grid2 container alignItems={"center"} justifyContent={"center"}
            sx={{
                gap: { xs: 2, sm: 5 },
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: { xs: 4, sm: 4 }
            }}>
            {arr.map(renderItem)}
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

// #endregion

function Index(props) {

    const { flag: loadingFlag, open: setLoadingTrue, close: setLoadingFalse } = useToggle();

    const [analytics, setAnalytics] = useState([]);

    const getAnalytics = () => {
        setLoadingTrue();
        fetchUserDashboard()
        .then(res => {
            setLoadingFalse();

            const { data = [] } = res;
            setAnalytics(_ => data);
        })
        .catch(err => {
            setLoadingFalse();
        })
    }

    useEffect(() => {
        getAnalytics();
    }, [])

    return (
        <Container maxWidth={"xl"} sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 5, sm: 5 },
            pt: { xs: 4, sm: 8 },
        }}>
            <BpLoading loading={loadingFlag} />
            <TitleSection />
            <SearchSection loading={{ setLoadingTrue, setLoadingFalse }} />
            <AnalyticSection data={analytics} />
            <SourceSection />
        </Container>
    )
}

export default Index;