import { Box, Grid2, Card, Typography } from "@mui/material";

// #1a2332
// #1E293B

// #38BDF8
// #5096d1

import { Images } from "@config";

import style from "./style";

function Index(props) {
    const { children } = props;

    return (
        <Grid2 container spacing={2}>
            {/* Left Column */}
            <Grid2 item size={{ xs: 12, sm: 4 }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Scammer Details */}
                <Card sx={style.card}>
                    <Typography sx={style.cardTitle}>Scammer Details</Typography>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Known Aliases</Typography>
                        <Typography variant="body1">Jimmy Investments, Jay Rod</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Social Media</Typography>
                        <Typography variant="body1">Facebook: @eliz.parker88</Typography>
                        <Typography variant="body1">Instagram: @eliz_investments</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Payment Methods</Typography>
                        <Typography variant="body1">GXbank: 8888004154126</Typography>
                        <Typography variant="body1">BigPay: 83047584153125</Typography>
                        <Typography variant="body1">Public Bank: 6420013123</Typography>
                    </Box>
                </Card>

                {/* Scam Statistics */}
                <Card sx={style.card}>
                    <Typography sx={style.cardTitle}>Scam Statistics</Typography>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Total Incidents</Typography>
                        <Typography variant="h4">15</Typography>
                        <Typography variant="body2" color="gray">reported cases</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Total Amount Scammed</Typography>
                        <Typography variant="h4" color="red">RM 78,500</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.cardSubTitle}>Active Since</Typography>
                        <Typography variant="h6">January 2025</Typography>
                    </Box>
                </Card>

                {/* Labubu */}
                <Card sx={style.card}>
                <Typography sx={style.cardTitle}>IP Series Involved</Typography>
                    <Box sx={{ backgroundColor: "#243757", borderRadius: 2, display: "flex", gap: 1, p: 2 }}>
                        <Box component={"img"} src={Images.bgStock01} alt="CRYBABY Series" style={{ width: 48, height: 48, borderRadius: 8 }} /> <Box>
                            <Typography variant="body1" fontWeight="medium">CRYBABY Crying For Love Series</Typography>
                            <Typography variant="body2" color="gray">Vinyl Plush Hanging Card</Typography>
                        </Box>
                    </Box>
                </Card>
            </Grid2>

            {/* Right Column */}
            <Grid2 item size={{ xs: 12, sm: 8 }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {children}
            </Grid2>
        </Grid2>
    )
}

export default Index;