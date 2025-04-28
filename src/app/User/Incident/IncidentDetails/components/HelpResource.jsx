import { Box, Grid2, Card, CardContent, Typography, Button, Avatar, styled } from "@mui/material";

import { Security, Phone, Chat, Headset } from "@mui/icons-material";

import style from "./style";

const ResourceCard = ({ icon: Icon, title, details, contact }) => (
    <Card sx={{ p: 2 }}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Box sx={{ width: 48, height: 48, 
                backgroundColor: "rgba(56, 189, 248, 0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon sx={{ color: "#38BDF8", fontSize: 28 }} />
            </Box>
            <Typography variant="body1" fontWeight="medium" color="white">{title}</Typography>
        </Box>
        <Typography variant="body2" color="gray" mb={1}>{details}</Typography>
        <Typography variant="body1">Contact:</Typography>
        <Typography sx={style.cardTitle}>{contact}</Typography>
    </Card>
);

const HelpResource = () => {
    return (
        <>
            <Card sx={{ backgroundColor: "#1E293B" }}>
                <CardContent>
                    <Typography sx={style.cardTitle}>Help & Support Resources</Typography>
                    <Grid2 container spacing={1.5} mt={1}>
                        <Grid2 item size={{ xs: 12, sm: 6 }}>
                            <ResourceCard icon={Security} title="National Scam Response Centre (NSRC)" details="Mon-Sun 8:00am - 8:00pm" contact="997" />
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 6 }}>
                            <ResourceCard icon={Phone} title="Touch N Go eWallet Hotline" details="Mon-Sun 7:00am - 10:00pm" contact="603-5022 3888" />
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 6 }}>
                            <ResourceCard icon={Chat} title="BigPay Support Team" details="You can chat through the BigPay app or email" contact="support.my@bigpayme.com" />
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 6 }}>
                            <ResourceCard icon={Headset} title="Boost Support Team" details="You can contact them through email only" contact="support@myboost.com.my" />
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>

            <Card sx={{ position: "relative", overflow: "hidden" }}>
                <CardContent>
                    <Typography sx={style.cardTitle}>Need Immediate Help?</Typography>
                    <Typography color="gray" mb={3}>Don't face this alone. Reach out to our community.</Typography>
                    <Grid2 container alignItems="center" gap={2} mb={3}>
                        <Avatar sx={{ bgcolor: "#38BDF8" }} />
                        <Avatar sx={{ bgcolor: "#3B82F6" }} />
                        <Avatar sx={{ bgcolor: "#2563EB" }} />
                        <Typography color="white">150 people joined</Typography>
                    </Grid2>
                    <Button variant="contained" sx={{ backgroundColor: "#38BDF8" }}>Join our support community</Button>
                </CardContent>
            </Card>
        </>
    );
};

export default HelpResource;
