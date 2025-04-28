import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Chip } from "@mui/material";

import { Card, Avatar, CardContent } from "@mui/material";

import { GlobalStyles, Images, Models } from "@config";

import { useParams } from "react-router-dom";
import { useToggle } from "@hooks";

import { BpLoading, BpJsonDataTable, BpImageGallery, BpHeader, BpTab } from "@components";

import { clsUtility } from "@utility";

import BodyWrapper from "./components/BodyWrapper";

import ScamReport from "./components/ScamReport";
import CommunitySupport from "./components/CommunitySupport";
import HelpResource from "./components/HelpResource";

import { fetchIncidentGetUser } from "@api";

function Index(props) {

    const { IncidentId = "" } = useParams();
    
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();

    const style = {
        img: {
            width: {
                xs: "64px",
                sm: "96px"
            },
            height: {
                xs: "64px",
                sm: "96px"
            }
        },
        scammerTitle: {
            fontSize: {
                xs: "1.125rem",
                sm: "1.5rem"
            },
            fontWeight: "bold"
        }
    }

    const [data, setData] = useState({});

    const { header = {}, scammer_details, ipSeries, otherIncidents, scam_statistic, comment } = data;

    const getIncidentDetails = () => {
        setLoadingTrue();
        fetchIncidentGetUser({
            PK: IncidentId
        })
            .then(res => {
                setLoadingFalse();
                setData(_ => res);
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    useEffect(() => {
        if (IncidentId.length > 0) {
            getIncidentDetails();
        }
    }, [IncidentId])

    const renderPlatformItem = (item, ind) => (
        <Typography key={`platform-item-${ind}`} sx={(theme) => ({
            backgroundColor: theme.palette.grey[200],
            px: 1,
            borderRadius: .5,
            fontWeight: "bold",
            color: "#000"
        })}>{clsUtility.capitalize(item)}</Typography>
    );

    const TitleSection = () => (
        <Grid2 container spacing={2}>
            {/* Image */}
            <Box component="img" src={Images.bgStock01} alt="Background" sx={style.img} />

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1
            }}>
                <Grid2 container alignItems={"center"} spacing={1}>
                    <Typography sx={style.scammerTitle}>{header.scammer_name}</Typography>
                    <Typography sx={{
                        backgroundColor: "error.main",
                        p: .5,
                        borderRadius: .5,
                        fontWeight: "bold",
                        fontSize: {
                            xs: "0.75rem",
                            sm: "1rem"
                        },
                        color: "#FFF"
                    }}>High Risk</Typography>
                </Grid2>
                <Typography sx={{
                    fontWeight: "600"
                }}>Reported by {header.no_reported} people</Typography>
                {/* Platform Lists */}
                <Grid2 container spacing={1}>
                    {header.scammer_platform?.map(renderPlatformItem)}
                </Grid2>
            </Box>
        </Grid2>
    )

    const tabPages = [
        {
            title: "SCAM REPORTS",
            element: (
            <BodyWrapper details={scammer_details} statistic={scam_statistic} ipSeries={ipSeries}>
                <ScamReport incident={otherIncidents} />
            </BodyWrapper>)
        },
        {
            title: "COMMUNITY SUPPORT",
            element: (
                <BodyWrapper details={scammer_details} statistic={scam_statistic} ipSeries={ipSeries}>
                    <CommunitySupport comment={comment} />
                </BodyWrapper>
            )
        },
        {
            title: "HELP RESOURCES",
            element: (
                <BodyWrapper details={scammer_details} statistic={scam_statistic} ipSeries={ipSeries}>
                    <HelpResource />
                </BodyWrapper>
            )
        },
    ];

    return (
        <>
            <BpLoading loading={loading} />
            <Box sx={{ py: 3 }}>
                <Container maxWidth={"xl"}>
                    {/* Title */}
                    <TitleSection />
                </Container>
            </Box>
            <Box sx={(theme) => ({
                py: 1,
                backgroundColor: "#f7fcfc",
                ...theme.applyStyles('dark', { backgroundColor: "#1a2332"})
            })}>
                <Container maxWidth={"xl"}>
                    <BpTab
                        tabPages={tabPages}
                        sx={{
                            tabHeadItem: {
                                mr: 2
                            },
                            tabBody: {
                                py: 2
                            }
                        }} />
                </Container>
            </Box>
        </>
    )
}

export default Index;