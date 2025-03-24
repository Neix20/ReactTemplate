import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { GlobalStyles } from "@config";

import SearchFilter from "./components/SearchFilter";
import InfoCard from "./components/InfoCard";

import { SampleData } from "@config";

import { BpGridMasonry } from "@components";

import { useCusMedia } from "@hooks";

function Index(props) {

    const [data, setData] = useState([]);

    const { value: colSize, setValue: setColSize } = useCusMedia({ xs: 1, sm: 2, md: 3, lg: 3 });

    useEffect(() => {
        setData(_ => SampleData.Incident);
    }, []);

    return (
        <Container maxWidth={"lg"} sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, sm: 4 },
            pt: { xs: 4, sm: 4 }
        }}>
            {/* Title Section */}
            <Grid2>
                <Typography variant="h1" sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Incident Reports</Typography>
                <Typography variant="body1">Browse and filter reported scam incidents</Typography>
            </Grid2>

            {/* Search System */}
            <SearchFilter />

            {/* Card System */}
            <BpGridMasonry key={`grid-masonry-${colSize}`} numCols={colSize}>
                {data.map((item, index) => (
                    <InfoCard key={item.PK || index} {...item} />
                ))}
            </BpGridMasonry>
        </Container>

    )
}

export default Index;