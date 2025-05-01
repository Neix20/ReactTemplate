import { useState, useEffect } from "react";

import { Avatar, Divider, Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Card } from "@mui/material";
import { GlobalStyles, Images } from "@config";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { clsUtility } from "@utility";

import { Search } from "@mui/icons-material";

import { BpLoading, BpInput } from "@components";

import { useToggle, useForm } from "@hooks";

function Index(props) {

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle();

    const { control, handleSubmit } = useForm({});

    const style = {
        search: {
            display: "flex",
            gap: 1,
            width: { xs: "100%", sm: "80%", md: "60%" },
        }
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

            {/* Title */}
            <Grid2 container flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                <Typography variant={"h1"} sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Report Status</Typography>
                <Typography variant={"body1"} color={"text.secondary"} sx={{ fontSize: { xs: 11, sm: "0.875rem" } }}>
                    Check your Report, Has it been approved or not
                </Typography>
            </Grid2>

            {/* Search */}
            <Grid2 container alignItems={"center"} justifyContent={"center"}
                sx={{ width: "100%" }}>

                <Box component={"form"} sx={style.search}>
                    <BpInput
                        name={"query"} type={"text"}
                        placeholder={"Social Media Ids, Bank Account..."}
                        control={control}
                        sx={{ flex: .8, flexGrow: 1 }} />
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"warning"}
                        endIcon={<Search />}
                        sx={{ flex: .2, maxWidth: "100px", minWidth: "100px" }}>Search</Button>
                </Box>
            </Grid2>
        </Container>
    )
}

export default Index;