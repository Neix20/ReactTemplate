import { useState, useEffect } from "react";

import { Avatar, Divider, Container, Grid2, Typography, Chip, Box, Card } from "@mui/material";
import { GlobalStyles, Images } from "@config";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { clsUtility } from "@utility";

import { Person, CalendarMonth } from "@mui/icons-material";

import { BpLoading, BpTab, BpPlatformLogo } from "@components";

import { useNavigate } from "react-router-dom";

import { useToggle } from "@hooks";
import { fetchUserProfile } from "@api";

function TitleSection(props) {

    const { user = {} } = props;

    const { name, gender, profile, birthday } = user;

    const style = {
        img: {
            width: {
                xs: "64px",
                sm: "96px"
            },
            height: {
                xs: "64px",
                sm: "96px"
            },
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

function ReportPanel(props) {

    const { data = [] } = props;

    const style = {
        main: (theme) => ({
            p: 2,
            color: "#000",
            backgroundColor: theme.palette.primary["A700"],
            ...theme.applyStyles('dark', {
                color: "#FFF",
                backgroundColor: "#0f172a",
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

    const chipDict = {
        Active: {
            label: "Verified",
            color: "success"
        },
        Pending: {
            label: "Pending",
            color: "warning"
        },
        Inactive: {
            label: "Rejected",
            color: "error"
        }
    }

    const renderItem = ({ images, platform, tag, status, rejected_reason, reported_date }) => (
        <Card sx={style.main}>
            <Grid2 container spacing={2}>
                <Box component="img" src={images} alt="Background" sx={style.img} />
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Grid2 container flexDirection={"row"} spacing={1}>
                        <Typography sx={style.title}>{tag}</Typography>
                        <Chip {...chipDict[status]} />
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
            <Typography variant={"h4"}>Report History</Typography>
            {data.map(renderItem)}
        </Grid2>
    )
}

function CommentPanel(props) {

    const { data = [] } = props;

    const navigate = useNavigate();

    const style = {
        main: (theme) => ({
            p: 2,
            color: "#000",
            backgroundColor: theme.palette.primary["A700"],
            ...theme.applyStyles('dark', {
                color: "#FFF",
                backgroundColor: "#0f172a",
            }),
            cursor: "pointer"
        }),
        title: {
            fontSize: "0.875rem",
            fontWeight: 600,
        },
        img: {
            width: "80px",
            height: "80px",
        }
    };

    const renderItem = ({ title, date, comment, images, reported_by, incident}, index) => {

        const GoToInc = _ => navigate(`/incident/${incident}`);

        return (
            <Card sx={style.main} onClick={GoToInc}>
                <Grid2 container spacing={1.5}>
                    <Box component={"img"} src={images} alt={reported_by} sx={style.img} />
                    <Grid2 container flexDirection={"column"} justifyContent={"space-between"}>
                        <Grid2 container>
                            <Typography sx={style.title}>{title}</Typography>
                        </Grid2>
                        <Grid2 container flexDirection={"column"} spacing={.5}>
                            <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>{date}</Typography>
                            <Typography sx={(theme) => ({ color: "#000", ...theme.applyStyles('dark', { color: "#FFF" }) })}>{comment}</Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Card>
        );
    };


    return (
        <Grid2 container flexDirection={"column"} spacing={1.5}>
            <Typography variant={"h4"}>Comment History</Typography>
            {data.map(renderItem)}
        </Grid2>
    )
}

function HistoryPanel(props) {

    const { data = [] } = props;

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
                backgroundColor: "#0f172a",
            })
        }),
        title: {
            fontSize: "0.875rem",
            fontWeight: 600,
        }
    }

    const renderItem = ({ query, date }) => (
        <Card sx={style.main}>
            <Typography sx={style.title}>{query}</Typography>
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

    const { PK: userId } = useSelector(Selectors.userSelect);

    const [data, setData] = useState({});

    const { user = {}, reports = [], comments = [], history = [] } = data;

    const getUserProfile = () => {
        setLoadingTrue();
        fetchUserProfile({ userId: userId })
            .then((res) => {
                setLoadingFalse();

                setData(_ => res);
            })
            .catch((err) => {
                setLoadingFalse();
                console.log(err);
            });
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    const tabPages = [
        {
            title: "REPORTS",
            element: (<ReportPanel data={reports} />)
        },
        {
            title: "COMMENTS",
            element: (<CommentPanel data={comments} />)
        },
        {
            title: "HISTORY",
            element: (<HistoryPanel data={history} />)
        }
    ];

    return (
        <>
            <BpLoading loading={loading} />
            <Box>
                <Box sx={{ py: 3 }}>
                    <Container maxWidth={"xl"}>
                        <TitleSection user={user} />
                    </Container>
                </Box>
                <Box sx={{ py: 1 }}>
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
            </Box>
        </>
    )
}

export default Index;