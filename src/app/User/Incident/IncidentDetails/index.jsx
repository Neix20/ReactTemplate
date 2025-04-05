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

const sampleData = {
    incident: [
        {
            "reported_date": "2025-03-09",
            "entity_type": "INCIDENT",
            "status": "Pending",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "trade_method": "Shipping",
            "post_date": "2025-03-15",
            "subtitle": "Testing Subtitle",
            "platform": "XiaoHongShu",
            "category": "Scam",
            "SK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "scammer_type": "Seller",
            "description": "Minim nulla id fugiat ut amet fugiat sit mollit aute do fugiat amet.",
            "PK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "total_amount": 12000,
            "title": "Test"
        },
        {
            "reported_date": "2025-03-09",
            "entity_type": "INCIDENT",
            "status": "Pending",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "trade_method": "Shipping",
            "post_date": "2025-01-15",
            "subtitle": "Testing Subtitle",
            "platform": "XiaoHongShu",
            "category": "Scam",
            "SK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "scammer_type": "Seller",
            "description": "Fuck This",
            "PK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "total_amount": 12000,
            "title": "Test"
        },
        {
            "reported_date": "2025-03-09",
            "entity_type": "INCIDENT",
            "status": "Pending",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "trade_method": "Shipping",
            "post_date": "2025-02-15",
            "subtitle": "Testing Subtitle",
            "platform": "XiaoHongShu",
            "category": "Scam",
            "SK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "scammer_type": "Seller",
            "description": "Test",
            "PK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "total_amount": 12000,
            "title": "Test"
        }
    ],
    ip_series: [
        {
            "title": "Crying For Love Series",
            "image": "https://i.imgur.com/lGEPhaA.jpeg",
            "parent": "CRYBABY",
            "type": "Vinyl Plush Hanging Card"
        }
    ],
    scammer: {
        "name": "James Rodriguez",
        "platform": [
            "Facebook",
            "Instagram",
            "WhatsApp",
            "Xiao Hong Shu"
        ]
    },
    scammerAttr: [
        {
            "value": "Jimmy Investments",
            "name": "name",
            "category": "name",
            "type": "string"
        },
        {
            "value": "Jay Rod",
            "name": "name",
            "category": "name",
            "type": "string"
        },
        {
            "value": "@eliz.parker88",
            "name": "Facebook",
            "category": "social_media",
            "type": "string"
        },
        {
            "value": "@eliz_investments",
            "name": "Instagram",
            "category": "social_media",
            "type": "string"
        },
        {
            "name": "GXbank",
            "value": "8888004154126",
            "category": "payment_methods",
            "type": "string"
        },
        {
            "name": "BigPay",
            "value": "83047584153125",
            "category": "payment_methods",
            "type": "string"
        },
        {
            "name": "Public Bank",
            "value": "6420013123",
            "category": "payment_methods",
            "type": "string"
        }
    ]
};

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

    const { incident, ip_series: ipSeries, scammer, scammer_attr: scammerAttr } = sampleData;

    const renderPlatformItem = (item, ind) => (
        <Typography key={`platform-item-${ind}`} sx={(theme) => ({
            backgroundColor: theme.palette.grey[400],
            px: 1,
            borderRadius: .5,
            fontWeight: "bold"
        })}>{item}</Typography>
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
                    <Typography sx={style.scammerTitle}>{scammer.name}</Typography>
                    <Typography sx={{
                        backgroundColor: "error.main",
                        p: .5,
                        borderRadius: .5,
                        fontWeight: "bold",
                        fontSize: {
                            xs: "0.75rem",
                            sm: "1rem"
                        }
                    }}>High Risk</Typography>
                </Grid2>
                <Typography sx={{
                    fontWeight: "600",
                    color: "#d3d3d3"
                }}>Reported by 15 people</Typography>
                {/* Platform Lists */}
                <Grid2 container spacing={1}>
                    {scammer.platform.map(renderPlatformItem)}
                </Grid2>
            </Box>
        </Grid2>
    )

    const tabPages = [
        {
            title: "SCAM REPORTS",
            element: (<BodyWrapper>
                <ScamReport />
            </BodyWrapper>)
        },
        {
            title: "COMMUNITY SUPPORT",
            element: (
                <BodyWrapper>
                    <CommunitySupport />
                </BodyWrapper>
            )
        },
        {
            title: "HELP RESOURCES",
            element: (
                <BodyWrapper>
                    <HelpResource />
                </BodyWrapper>
            )
        },
    ];

    return (
        <>
            <BpLoading loading={loading} />
            <Box sx={{ py: 4 }}>
                <Container maxWidth={"xl"}>
                    {/* Title */}
                    <TitleSection />
                </Container>
            </Box>
            <Box sx={{ backgroundColor: "#1a2332", py: 1 }}>
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