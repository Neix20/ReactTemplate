import { Box, Grid2, Card, Typography, Button, Avatar, Chip } from "@mui/material";

// #1a2332
// #0f172a

// #38BDF8
// #5096d1

import style from "./style";

import { clsUtility } from "@utility";

import { useNavigate } from "react-router-dom";

const ScamReport = (props) => {

    const { incident = [] } = props;

    const navigate = useNavigate();

    const GoToReport = () => {
        navigate("/Report");
    }

    const chipDict = {
        Active: {
            label: "Verified",
            color: "success"
        },
        Pending: {
            label: "Pending",
            color: "warning"
        },
        Inactive: {
            label: "Rejected",
            color: "error"
        }
    }

    const renderReport = (obj, index) => (
        <Box sx={{ borderBottom: "1px solid gray", pb: 2, mb: 2 }}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Avatar sx={{ bgcolor: "gray" }}></Avatar>
                <Box>
                    <Typography>Anonymous Victim</Typography>
                    <Typography variant="body2" color="gray">{clsUtility.formatDate(obj.reported_date)}</Typography>
                </Box>
                <Chip {...chipDict[obj.status]} sx={{ ml: "auto" }} />
            </Box>

            <Box display={"flex"}>
                <Typography sx={{ backgroundColor: "rgba(255,0,0,0.2)", color: "red", px: 1, borderRadius: 1 }}>
                    {clsUtility.formatCurrency(obj.total_amount)} lost
                </Typography>
            </Box>

            <Typography mt={2}>
                {obj.description}
            </Typography>
        </Box>
    );

    return (
        <>
            {/* Victim Reports */}
            <Card sx={style.card}>
                <Typography sx={style.cardTitle}>Victim Reports</Typography>
                {incident.map(renderReport)}
            </Card>

            {/* Submit Report */}
            <Card sx={style.card}>
                <Typography sx={style.cardTitle}>Submit Your Report</Typography>
                <Typography color="gray">Have you been affected by this scammer? Share your experience to help protect others.</Typography>
                <Button variant="contained" onClick={GoToReport} sx={{ mt: 2 }}>Submit Report</Button>
            </Card>
        </>
    )
};

export default ScamReport;
