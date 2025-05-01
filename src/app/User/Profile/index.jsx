import { useState, useEffect } from "react";

import { Avatar, Divider, Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Card } from "@mui/material";
import { GlobalStyles, Images } from "@config";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { clsUtility } from "@utility";

import { Person, CalendarMonth } from "@mui/icons-material";

import { BpLoading, BpTab, BpPlatformLogo } from "@components";

import { useToggle } from "@hooks";

function TitleSection(props) {

    const { name, gender, profile, birthday } = useSelector(Selectors.userSelect);

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
        title: {
            fontSize: {
                xs: "1.125rem",
                sm: "1.5rem"
            },
            fontWeight: "bold"
        },
        main: {
            display: "flex",
            flexDirection: "column",
            gap: 0.5
        }
    }

    return (
        <Grid2 container spacing={2}>
            {/* Image */}
            <Box component="img" src={profile} alt={"Profile"} sx={style.img} />
            <Box sx={style.main}>
                <Typography sx={style.title}>{name}</Typography>
                <Grid2 container alignItems={"center"} spacing={1}>
                    <Person />
                    <Typography>{gender}</Typography>
                </Grid2>
                <Grid2 container alignItems={"center"} spacing={1}>
                    <CalendarMonth />
                    <Typography>{clsUtility.formatDate(birthday)}</Typography>
                </Grid2>
            </Box>
        </Grid2>
    )
}

function PostPanel(props) {

    const data = [
        {
            "reported_date": "2025-04-02",
            "entity_type": "INCIDENT",
            "status": "Active",
            "trade_method": "Shipping",
            "post_date": "2025-04-03",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "subtitle": "Fake crypto investment promising 10x returns.",
            "platform": "Facebook",
            "category": "Scam",
            "SK": "INCIDENT-520d33e3-8653-4bd9-8abc-7ac52d8072d9",
            "scammer_type": "Seller",
            "description": "Fake crypto investment promising 10x returns.",
            "PK": "INCIDENT-520d33e3-8653-4bd9-8abc-7ac52d8072d9",
            "total_amount": 12000,
            "title": "Crypto Scam Warning",
            "images": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-01.jpg"
        },
        {
            "reported_date": "2025-04-06",
            "entity_type": "INCIDENT",
            "status": "Active",
            "trade_method": "Shipping",
            "post_date": "2025-04-06",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "subtitle": "Ponzi scheme disguised as an investment opportunity.",
            "platform": "Instagram",
            "category": "Alert",
            "SK": "INCIDENT-ad96c8ba-dca7-4006-b8ad-757bfcfedb12",
            "scammer_type": "Buyer",
            "description": "Ponzi scheme disguised as an investment opportunity.",
            "PK": "INCIDENT-ad96c8ba-dca7-4006-b8ad-757bfcfedb12",
            "total_amount": 45000,
            "title": "Ponzi Scheme Exposed",
            "images": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-01.jpg"
        },
        {
            "reported_date": "2025-04-27",
            "entity_type": "INCIDENT",
            "status": "Active",
            "social_url": "https://www.facebook.com/JohnGreen",
            "post_date": "2025-04-26",
            "platform": "Facebook",
            "category": "Scam",
            "SK": "INCIDENT-be1a3802-acf8-4b39-be62-641bab6dbcb4",
            "scammer_type": "Seller",
            "description": "asdfasdf",
            "PK": "INCIDENT-be1a3802-acf8-4b39-be62-641bab6dbcb4",
            "total_amount": 123,
            "title": "POP MART Scam",
            "images": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/bg_kl.jpg"
        },
        {
            "reported_date": "2025-03-09",
            "entity_type": "INCIDENT",
            "status": "Active",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "trade_method": "Shipping",
            "post_date": "2025-03-15",
            "subtitle": "Testing Subtitle",
            "platform": "Xiaohongshu",
            "category": "Scam",
            "SK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "scammer_type": "Seller",
            "description": "Test",
            "PK": "INCIDENT-d497e57f-1a64-4173-af8f-56ef3dc27669",
            "total_amount": 12000,
            "title": "PopMart Scam",
            "images": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/inc-det-01.jpg"
        },
        {
            "reported_date": "2025-04-04",
            "entity_type": "INCIDENT",
            "status": "Active",
            "trade_method": "Shipping",
            "post_date": "2025-04-18",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "subtitle": "Ordered an item, never received it.",
            "platform": "Telegram",
            "category": "Alert",
            "SK": "INCIDENT-d692f78f-f944-4d3b-aeb9-bd567f0ed0ad",
            "scammer_type": "Seller",
            "description": "Ordered an item, never received it.",
            "PK": "INCIDENT-d692f78f-f944-4d3b-aeb9-bd567f0ed0ad",
            "total_amount": 34000,
            "title": "Fake Online Store Alert",
            "images": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-01.jpg"
        },
        {
            "reported_date": "2025-03-22",
            "entity_type": "INCIDENT",
            "status": "Active",
            "social_url": "https://www.facebook.com/share/p/GAqBde3Tv5eAv6pk",
            "trade_method": "Shipping",
            "post_date": "2025-03-15",
            "subtitle": "A fake company promising high salary.",
            "platform": "Instagram",
            "category": "Alert",
            "SK": "INCIDENT-ed2c7b05-810e-4b1e-a8a8-e0db1fdd899b",
            "scammer_type": "Buyer",
            "description": "A fake company promising high salary.",
            "PK": "INCIDENT-ed2c7b05-810e-4b1e-a8a8-e0db1fdd899b",
            "total_amount": 36000,
            "title": "Job Scam Alert",
            "images": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/Tan-Xi-En.jpg"
        }
    ];

    const style = {
        main: (theme) => ({
            p: 2,
            color: "#000",
            backgroundColor: theme.palette.primary["A700"],
            ...theme.applyStyles('dark', {
                color: "#FFF",
                backgroundColor: "#1E293B",
            })
        }),
        title: {
            fontSize: "0.875rem",
            fontWeight: 600,
        },
        img: {
            width: "80px",
            height: "80px",
        },
        logo: {
            width: "32px",
            height: "32px",
        }
    };

    const renderItem = ({ images, platform, title, subtitle, reported_date, total_amount }) => (
        <Card sx={style.main}>
            <Grid2 container spacing={2}>
                <Box component="img" src={images} alt="Background" sx={style.img} />
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Grid2 container flexDirection={"column"} spacing={0.5}>
                        <Typography sx={style.title}>{title}</Typography>
                        <Typography variant={"body1"}>{subtitle}</Typography>
                    </Grid2>
                    <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid2 container alignItems={"center"} spacing={1}>
                            <CalendarMonth />
                            <Typography>{clsUtility.formatDate(reported_date)}</Typography>
                        </Grid2>
                        <BpPlatformLogo term={platform} />
                    </Grid2>
                </Box>
            </Grid2>
        </Card>
    )

    return (
        <Grid2 container flexDirection={"column"} spacing={1.5}>
            <Typography variant={"h4"}>Posts History</Typography>
            {data.map(renderItem)}
        </Grid2>
    )
}

function CommentPanel(props) {
    const data = [
        {
            name: "Sarah L.",
            date: "2025-03-10",
            text: "I almost fell for his scheme too! He used the same investment pitch with me. Thankfully I saw this website first. Stay strong everyone.",
            likes: 12,
            images: "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-01.jpg"
        },
        {
            name: "David K.",
            date: "2025-03-09",
            text: "The authorities have been notified about this scammer. If you've been affected, please file a police report and reference case #25783.",
            likes: 27,
            images: "https://order-cart-app-01.s3.us-east-1.amazonaws.com/bg_kl.jpg"
        },
        {
            name: "Michelle T.",
            date: "2025-03-07",
            text: "I lost money to this person last month. I've joined the victim support group that meets virtually every Tuesday. It's helped me cope with the shame and anger. DM me if you want details.",
            likes: 19,
            images: "https://order-cart-app-01.s3.us-east-1.amazonaws.com/inc-det-01.jpg"
        },
    ];


    const renderItem = (comment, index) => (
        <Box key={index}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Box component={"img"} src={comment.images} alt={comment.name} sx={{ width: "48px", height: "48px" }} />
                <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>{comment.date}</Typography>
                    <Typography sx={(theme) => ({ mb: 1, color: "#000", ...theme.applyStyles('dark', { color: "#FFF" }) })}>{comment.text}</Typography>
                </Box>
            </Box>
            {index < data.length - 1 && <Divider sx={{ borderColor: "gray", my: 1 }} />}
        </Box>
    )
    return (
        <Grid2 container flexDirection={"column"} spacing={1.5}>
            <Typography variant={"h4"}>Comment History</Typography>
            {data.map(renderItem)}
        </Grid2>
    )
}

function HistoryPanel(props) {

    const data = [
        {
            "search": "Magna cillum aute nisi nisi culpa adipisicing.",
            "date": "2025-02-18"
        },
        {
            "search": "Do eu magna aliqua dolore enim elit.",
            "date": "2025-11-11"
        },
        {
            "search": "Amet sunt non occaecat sunt sint aliqua.",
            "date": "2025-04-24"
        },
        {
            "search": "Reprehenderit culpa officia exercitation ex sit dolore nisi sit.",
            "date": "2025-02-08"
        },
        {
            "search": "Cillum non et irure cillum minim commodo ex.",
            "date": "2025-07-14"
        },
        {
            "search": "Do ullamco ipsum id cupidatat deserunt eiusmod irure ut ut nulla aliqua voluptate sint dolore.",
            "date": "2025-10-07"
        },
        {
            "search": "Ea velit occaecat enim fugiat elit laboris dolor.",
            "date": "2025-09-24"
        },
        {
            "search": "Officia nulla irure duis veniam do.",
            "date": "2025-08-18"
        },
        {
            "search": "Exercitation ex quis incididunt labore ipsum id in culpa ut officia adipisicing aliquip voluptate.",
            "date": "2025-09-27"
        },
        {
            "search": "Elit tempor excepteur aliquip elit cupidatat non dolore adipisicing non ullamco anim.",
            "date": "2025-06-09"
        }
    ];

    const style = {
        main: (theme) => ({
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            color: "#000",
            backgroundColor: theme.palette.primary["A700"],
            ...theme.applyStyles('dark', {
                color: "#FFF",
                backgroundColor: "#1E293B",
            })
        }),
        title: {
            fontSize: "0.875rem",
            fontWeight: 600,
        }
    }

    const renderItem = ({ search, date }) => (
        <Card sx={style.main}>
            <Typography sx={style.title}>{search}</Typography>
            <Grid2 container alignItems={"center"} spacing={1}>
                <CalendarMonth />
                <Typography>{clsUtility.formatDate(date)}</Typography>
            </Grid2>
        </Card>
    )


    return (
        <Grid2 container flexDirection={"column"} spacing={1.5}>
            <Typography variant={"h4"}>Search History</Typography>
            {data.map(renderItem)}
        </Grid2>
    )
}

function Index(props) {

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();

    const tabPages = [
        {
            title: "POSTS",
            element: (<PostPanel />)
        },
        {
            title: "COMMENTS",
            element: (<CommentPanel />)
        },
        {
            title: "HISTORY",
            element: (<HistoryPanel />)
        }
    ]

    return (
        <>
            <BpLoading loading={loading} />
            <Box sx={{ py: 3 }}>
                <Container maxWidth={"xl"}>
                    <TitleSection />
                </Container>
            </Box>
            <Box sx={(theme) => ({
                py: 1,
                // backgroundColor: "#f7fcfc",
                // ...theme.applyStyles('dark', { backgroundColor: "#1a2332" })
            })}>
                <Container maxWidth={"xl"}>
                    <BpTab tabPages={tabPages}
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