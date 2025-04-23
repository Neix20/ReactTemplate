import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { GlobalStyles } from "@config";

import SearchFilter from "./components/SearchFilter";
import InfoCard from "./components/InfoCard";

import { SampleData } from "@config";

import { BpGridMasonry, BpLoading } from "@components";

import { useCusMedia, useToggle } from "@hooks";

import { fetchIncidentGetAll } from "@api";

function Index(props) {

    const [incident, setIncident] = useState([]);

    const { value: colSize, setValue: setColSize } = useCusMedia({ xs: 1, sm: 2, md: 3, lg: 3 });
    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    const getAllIncident = () => {
        setLoadingTrue();
        fetchIncidentGetAll()
        .then(res => {
            setLoadingFalse();
            const { data = {} } = res;
            setIncident(_ => data);
        })
        .catch(err => {
            setLoadingFalse();
            console.error(err);
        });
    }

    useEffect(() => {
        getAllIncident();
    }, []);

    const onChangeIncident = (data) => {
        setIncident(_ => data);
    }

    return (
        <Container maxWidth={"xl"} sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, sm: 4 },
            pt: { xs: 4, sm: 4 }
        }}>
            <BpLoading loading={loading} />
            {/* Title Section */}
            <Grid2>
                <Typography variant="h1" sx={{ fontSize: { xs: "1.875rem", sm: "2.5rem" } }}>Incident Reports</Typography>
                <Typography variant="body1">Browse and filter reported scam incidents</Typography>
            </Grid2>

            {/* Search System */}
            <SearchFilter updateIncident={onChangeIncident} />

            {/* Card System */}
            <BpGridMasonry key={`grid-masonry-${colSize}`} numCols={colSize}>
                {incident.map((item, index) => (
                    <InfoCard key={item.PK || index} {...item} />
                ))}
            </BpGridMasonry>
        </Container>
    )
}

export default Index;