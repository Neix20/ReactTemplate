import { Box, Grid2, Card, Typography, Button, Avatar } from "@mui/material";

// #1a2332
// #1E293B

// #38BDF8
// #5096d1

import style from "./style";

const ScamReport = () => {
    return (
        <>
            {/* Victim Reports */}
            <Card sx={style.card}>
            <Typography sx={style.cardTitle}>Victim Reports</Typography>
                {["2025-03-08", "2025-02-22"].map((date, index) => (
                    <Box key={index} sx={{ borderBottom: "1px solid gray", pb: 2, mb: 2 }}>
                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                            <Avatar sx={{ bgcolor: "gray" }}></Avatar>
                            <Box>
                                <Typography>Anonymous Victim</Typography>
                                <Typography variant="body2" color="gray">{date}</Typography>
                            </Box>
                            <Typography ml="auto" color={index === 0 ? "yellow" : "green"}>
                                {index === 0 ? "Under Investigation" : "Verified"}
                            </Typography>
                        </Box>

                        <Box display={"flex"}>
                            <Typography sx={{ backgroundColor: "rgba(255,0,0,0.2)", color: "red", px: 1, borderRadius: 1 }}>
                                RM {index === 0 ? "15,000" : "12,000"} lost
                            </Typography>
                        </Box>

                        <Typography mt={2}>
                            {index === 0
                                ? "He contacted me through Facebook claiming to be a financial advisor. He showed fake certificates and testimonials."
                                : "Met through a mutual friend who was also scammed. He presented himself as a forex expert."}
                        </Typography>
                    </Box>
                ))}
            </Card>

            {/* Submit Report */}
            <Card sx={style.card}>
                <Typography sx={style.cardTitle}>Submit Your Report</Typography>
                <Typography color="gray">Have you been affected by this scammer? Share your experience to help protect others.</Typography>
                <Button variant="contained" sx={{ backgroundColor: "#5096d1", mt: 2 }}>Submit Report</Button>
            </Card>
        </>
    )
};

export default ScamReport;
