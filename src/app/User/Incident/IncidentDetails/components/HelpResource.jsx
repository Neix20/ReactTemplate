import { Box, Grid2, Card, CardContent, Typography, Button, Avatar, styled } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Security";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import HeadsetIcon from "@mui/icons-material/Headset";

import style from "./style";

const ResourceCard = ({ icon: Icon, title, details, contact }) => (
    <Card sx={style.card}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Box sx={{ width: 48, height: 48, backgroundColor: "rgba(56, 189, 248, 0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon sx={{ color: "#38BDF8", fontSize: 28 }} />
            </Box>
            <Typography variant="body1" fontWeight="medium" color="white">{title}</Typography>
        </Box>
        <Typography variant="body2" color="gray" mb={1}>{details}</Typography>
        <Typography variant="body2" color="gray" mb={1}>Contact:</Typography>
        <Typography sx={style.cardTitle}>{contact}</Typography>
    </Card>
);

const HelpResource = () => {
    return (

        <>

            {/* Left Column */}
            <Grid2 item xs={12} md={4} container spacing={1}>
                <Card>

                    <CardContent>
                        <Typography sx={style.cardTitle}>Help & Support Resources</Typography>
                        <Grid2 container spacing={2} mt={2}>
                            <Grid2 item xs={12} sm={6}>
                                <ResourceCard icon={ShieldIcon} title="National Scam Response Centre (NSRC)" details="Mon-Sun 8:00am - 8:00pm" contact="997" />
                            </Grid2>
                            <Grid2 item xs={12} sm={6}>
                                <ResourceCard icon={PhoneIcon} title="Touch N Go eWallet Hotline" details="Mon-Sun 7:00am - 10:00pm" contact="603-5022 3888" />
                            </Grid2>
                            <Grid2 item xs={12} sm={6}>
                                <ResourceCard icon={ChatIcon} title="BigPay Support Team" details="You can chat through the BigPay app or email" contact="support.my@bigpayme.com" />
                            </Grid2>
                            <Grid2 item xs={12} sm={6}>
                                <ResourceCard icon={HeadsetIcon} title="Boost Support Team" details="You can contact them through email only" contact="support@myboost.com.my" />
                            </Grid2>
                        </Grid2>
                    </CardContent>

                </Card>

                <Card sx={{ position: "relative", overflow: "hidden" }}>
                    <Box sx={{ position: "absolute", top: 0, right: 0, width: "33%", height: "100%", background: "linear-gradient(to left, rgba(56, 189, 248, 0.1), transparent)" }} />
                    <CardContent>
                        <Typography sx={style.cardTitle}>Need Immediate Help?</Typography>
                        <Typography color="gray" mb={3}>Don't face this alone. Reach out to our community.</Typography>
                        <Box display="flex" alignItems="center" gap={2} mb={3}>
                            <Avatar sx={{ bgcolor: "#38BDF8" }} />
                            <Avatar sx={{ bgcolor: "#3B82F6" }} />
                            <Avatar sx={{ bgcolor: "#2563EB" }} />
                            <Typography color="white">150 people joined</Typography>
                        </Box>
                        <Button variant="contained" sx={{ backgroundColor: "#38BDF8" }}>Join our support community</Button>
                    </CardContent>
                </Card>
            </Grid2>

        </>

    );
};

export default HelpResource;
