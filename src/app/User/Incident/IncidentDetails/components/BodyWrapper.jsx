import { Box, Grid2, Card, Typography } from "@mui/material";

// #1a2332
// #0f172a

// #38BDF8
// #5096d1import { Images } from "@config";

import { clsUtility } from "@utility";

import { BpImageGallery } from "@components";

import style from "./style";
import { useNavigate } from "react-router-dom";

function Index(props) {
    const { details = {}, statistic = {}, ipSeries = [], incidentAssets = [], children = (<></>) } = props;

    const navigate = useNavigate();

    const renderIpSeries = (obj) => {

        const GoToIncident = _ => navigate(obj.link);

        return (
            <Box onClick={GoToIncident} sx={(theme) => ({ 
                borderRadius: 2, display: "flex", gap: 1, p: 2,
                backgroundColor: theme.palette.primary["0"],
                ...theme.applyStyles('dark', { backgroundColor: "#243757"}),
                cursor: "pointer"
            })}>
                <Box component={"img"} src={obj.image} alt="CRYBABY Series" style={{ width: 48, height: 48, borderRadius: 8 }} />
                <Box>
                    <Typography variant="body1" fontWeight="medium">{obj.name}<Typography sx={{ fontStyle: "italic"}}>{obj.parent}</Typography></Typography>
                    <Typography variant="body2" color="gray">{obj.description}</Typography>
                </Box>
            </Box>
        )
    }

    return (
        <Grid2 container spacing={1.5}>
            {/* Left Column */}
            <Grid2 item size={{ xs: 12, sm: 4 }} sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {/* Scammer Details */}
                <Card sx={style.card}>
                    <Typography sx={style.cardTitle}>Scammer Details</Typography>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Known Aliases</Typography>
                        {details.known_alias?.map(x => (
                            <Typography variant="body1">{x}</Typography>
                        ))}
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Social Media</Typography>
                        {details.social_media?.map(x => (
                            <Typography variant="body1">{x.name}: @{x.value}</Typography>
                        ))}
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Payment Methods</Typography>
                        {details.payment_method?.map(x => (
                            <Typography variant="body1">{x.name}: @{x.value}</Typography>
                        ))}
                    </Box>
                </Card>

                {/* Scam Statistics */}
                <Card sx={style.card}>
                    <Typography sx={style.cardTitle}>Scam Statistics</Typography>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Total Incidents Reported</Typography>
                        <Typography variant="h4">{statistic.total_incident}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Total Amount Scammed</Typography>
                        <Typography variant="h4" color="red">{clsUtility.formatCurrency(statistic.total_amount_scammed)}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Active Since</Typography>
                        <Typography variant="h6">{clsUtility.formatDate(statistic.start_active, "LLLL yyyy")}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Last Saw</Typography>
                        <Typography variant="h6">{clsUtility.formatDate(statistic.last_active, "LLLL yyyy")}</Typography>
                    </Box>
                </Card>

                {/* Incident Assets */}
                <Card sx={style.card}>
                    <Typography sx={style.cardTitle}>Incident Assets</Typography>
                    <BpImageGallery data={incidentAssets} readOnly={true} />
                </Card>

                {/* Labubu */}
                <Card sx={style.card}>
                    <Typography sx={style.cardTitle}>IP Series</Typography>
                    {ipSeries.map(renderIpSeries)}
                </Card>
                
            </Grid2>

            {/* Right Column */}
            <Grid2 item size={{ xs: 12, sm: 8 }} sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {children}
            </Grid2>
        </Grid2>
    )
}

export default Index;