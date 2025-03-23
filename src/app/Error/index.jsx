
import { useState, useEffect, useRef } from "react";
import { Typography, Container, Box, Grid2 } from "@mui/material";

import { GlobalStyles, SampleData } from "@config";

function Index(props) {

    return (
        <Container maxWidth={"lg"} sx={{ py: { xs: 12, sm: 16, md: 20 } }}>
            <Grid2 container justifyContent={"center"}>
                <Typography variant={"h2"}>404 Error Broken Link</Typography>
            </Grid2>
        </Container>
    )
}

export default Index;