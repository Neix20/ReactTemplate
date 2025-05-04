import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, Box, Tooltip, Collapse, TextField, Link as MuLink } from "@mui/material";

import { Images } from "@config";
import { clsUtility } from "@utility";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { CheckCircle, WarningAmber, ArrowForward } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

// #region Components
function TitleSection() {
    return (
        <Grid2 container flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant={"h1"} sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Is this a Scammer?</Typography>
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
import { use } from "chai";

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

    const { loading = {} } = props;

    const { setLoadingTrue, setLoadingFalse } = loading;

    const { flag, open, close } = useToggle();
    const { flag: isScammer, open: setScammerTrue, close: setScammerFalse } = useToggle();

    const { control, handleSubmit, resetData } = useForm(template.Scammer);

    const { PK: userId } = useSelector(Selectors.userSelect);

    const [inc, setInc] = useState({});

    const navigate = useNavigate();

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
        search: {
            display: "flex",
            gap: 1,
            width: "100%",
        },
        txtInput: {
            flex: .8,
            flexGrow: 1,
            borderRadius: 0
        }
    }

    const SearchSuccess = () => {
        const style = {
            main: {
                p: {
                    xs: 2,
                    sm: 3
                },
                borderRadius: 2,
                backgroundColor: '#16a34a',
                color: "#FFF"
            },
            btnSuccess: {
                color: '#FFF',
                    borderColor: '#FFF',
                    '&:hover': {
                        backgroundColor: '#FFF',
                        color: '#16a34a',
                        borderColor: '#FFF'
                    },
            }
        }

        const GoToReport = () => {
            navigate("/Report");
        }

        return (
            <Grid2 container
                flexDirection={"column"}
                spacing={{ xs: 1, sm: 2}}
                sx={style.main}>
                <Box>
                    <Grid2 container spacing={{ xs: 1, sm: 1.5 }} 
                        alignItems={"center"}
                        sx={{ mb: 1 }}>
                        <CheckCircle sx={{ fontSize: { xs: 20, sm: 28 } }} />
                        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: "1rem"}}}>
                            All Clear! No scam reports found
                        </Typography>
                    </Grid2>

                    <Typography variant="body1" fontSize={{ xs: "1rem", sm: "1.125rem"}}>
                        We haven't received any scam reports matching this identifier. However, always exercise caution when dealing
                        with unknown parties.
                    </Typography>
                </Box>

                <Box>
                    <Button variant="outlined"
                        onClick={GoToReport}
                        sx={style.btnSuccess}>
                        Report a Scammer
                    </Button>
                </Box>
            </Grid2>

        )
    };

    const SearchFail = () => {
        const style = {
            main: {
                p: {
                    xs: 2,
                    sm: 3
                },
                borderRadius: 2,
                backgroundColor: '#dc2626',
            },
            btnError: {
                backgroundColor: '#FFF',
                color: '#dc2626'
            },
            lblError: {
                p: 1.5,
                borderRadius: 1,
                display: 'inline-block',
                backgroundColor: 'rgba(185, 28, 28, 0.5)'
            }
        };

        const GoToIncident = () => {
            navigate(`/Incident/${inc.PK}`);
        }
        return (
            <Box sx={style.main}>
                <Box sx={{ mb: 2 }}>
                    <Grid2 container alignItems={"center"} justifyContent={"space-between"} sx={{ mb: 1}}>
                        <Grid2 container spacing={{ xs: 1, sm: 1.5 }} alignItems={"center"} sx={{ mb: { xs: 1, sm: 0}}}>
                            <WarningAmber sx={{ fontSize: 28 }} />
                            <Typography variant="h5" fontWeight="bold">
                                Danger! This is a scammer
                            </Typography>
                        </Grid2>
                        <Button variant={"outlined"} color={"error"}
                            onClick={GoToIncident}
                            endIcon={<ArrowForward sx={{ fontSize: 20 }} />}
                            sx={style.btnError}>
                            View Details
                        </Button>
                    </Grid2>
                    <Typography variant="body1" fontSize="1.125rem">
                        This identifier has been reported in some incidents.
                    </Typography>
                </Box>
                <Box sx={style.lblError}>
                    <Typography>
                        <strong>Warning Type:</strong> {inc.category}
                    </Typography>
                </Box>
            </Box>
        )
    }

    const SearchResult = isScammer ? SearchFail : SearchSuccess;
    // const SearchResult = isScammer ? SearchFail : SearchFail;

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
                py: 4
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

                // Update Here
                data["total_amount_scammed"] = clsUtility.formatCurrency(data["total_amount_scammed"]);

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
        <Container maxWidth={"lg"} sx={{
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