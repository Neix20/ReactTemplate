import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Chip } from "@mui/material";

import { GlobalStyles, Images, Models } from "@config";

import { useParams } from "react-router-dom";
import { useToggle } from "@hooks";

import { BpLoading, BpJsonDataTable, BpImageGallery, BpHeader, BpTab } from "@components";

import { fetchIncidentGet, fetchScammerGetAllAttr } from "@api";

import { clsUtility } from "@utility";

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

function ScamReport(props) {
    return (
        <Grid2 container>
            <Typography>This is Scam Reports Page</Typography>
        </Grid2>
    )
}

function CommunitySupport(props) {
    return (
        <Grid2 container>
            <Typography>This is Community Support Page</Typography>
        </Grid2>
    )
}

function HelpResource(props) {
    return (
        <Grid2 container>
            <Typography>This is Help Resource Page</Typography>
        </Grid2>
    )
}

import { Card, CardContent } from "@mui/material";

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
            element: (<ScamReport />)
        },
        {
            title: "COMMUNITY SUPPORT",
            element: (<CommunitySupport />)
        },
        {
            title: "HELP RESOURCES",
            element: (<HelpResource />)
        },
    ];

    const TabHead = ({ children }) => (
        <Grid2 container alignItems={"center"} sx={{ px: 1 }}>
            {children}
        </Grid2>
    )

    return (
        <>
            <BpLoading loading={loading} />
            <Container maxWidth={"lg"} sx={{
                pt: { xs: 4, sm: 4 }
            }}>
                {/* Title */}
                <TitleSection />

                <Box sx={{
                    mt: 2
                }}>
                    <BpTab
                        HeadWrapper={TabHead}
                        tabPages={tabPages}
                        sx={{
                            tabHeadItem: {
                                mr: 2
                            },
                            tabBody: {
                                p: 2
                            }
                        }} />
                </Box>

                {/* Scammer Details */}
                <Card variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"h4"}>Scammer Details</Typography>
                        <Box>
                            <Typography variant={"subtitle2"}>Known Aliases</Typography>
                            <Typography variant={"body1"}>Jimmy Investments, Jay Rod</Typography>
                        </Box>
                        <Box>
                            <Typography variant={"subtitle2"}>Social Media</Typography>
                            <Typography variant={"body1"}>Facebook: Test</Typography>
                            <Typography variant={"body1"}>Instagram: Test</Typography>
                        </Box>
                        <Box>
                            <Typography variant={"subtitle2"}>Payment Methods</Typography>
                            <Typography variant={"body1"}>Facebook: Test</Typography>
                            <Typography variant={"body1"}>Instagram: Test</Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* Scam Statistics */}
                <Card variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"h4"}>Scam Statistics</Typography>
                        <Box>
                            <Typography variant={"subtitle2"}>Known Aliases</Typography>
                            <Typography variant={"body1"}>Jimmy Investments, Jay Rod</Typography>
                        </Box>
                        <Box>
                            <Typography variant={"subtitle2"}>Social Media</Typography>
                            <Typography variant={"body1"}>Facebook: Test</Typography>
                            <Typography variant={"body1"}>Instagram: Test</Typography>
                        </Box>
                        <Box>
                            <Typography variant={"subtitle2"}>Payment Methods</Typography>
                            <Typography variant={"body1"}>Facebook: Test</Typography>
                            <Typography variant={"body1"}>Instagram: Test</Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* IP Series Involved */}
                <Card variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"h4"}>IP Series Involved</Typography>
                        <Card>
                            <Grid2 container spacing={1} sx={{ p: 2 }}>
                            <Box component="img" src={Images.bgStock01} alt="Background" sx={style.img} />

                            <Grid2>
                                <Typography variant={"h4"}>CryBaby</Typography>
                                <Typography variant={"body1"}>Nostrud incididunt voluptate esse id laborum exercitation laborum esse minim minim.</Typography>
                            </Grid2>
                            </Grid2>
                        </Card>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Index;