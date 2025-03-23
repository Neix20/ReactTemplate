
import { useState, useEffect, useRef } from "react";
import { Typography, Container, Box } from "@mui/material";

import { GlobalStyles, SampleData } from "@config";

function Index(props) {

    return (
        <Container maxWidth={"lg"} sx={{ py: { xs: 4, sm: 12, md: 14 } }}>
            <Box sx={{
                height: { xs: 200, sm: 150 },
                width: { xs: 100, sm: 200 },
            }}>
                <Typography variant={"h2"}>404 Error Broken Link</Typography>
            </Box>
        </Container>
    )

    return (
        <Grid2 container alignItems={"center"} justifyContent={"center"}
            sx={{
                width: "100%",
                height: "100%"
            }}>
            <Typography variant={"h2"}>404 Error Broken Link</Typography>
        </Grid2>
    )
}

export default Index;