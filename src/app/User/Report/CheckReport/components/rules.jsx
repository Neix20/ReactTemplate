import { Card, CardContent, Typography, Grid2, Box, List, ListItem, ListItemText } from "@mui/material";
import { ManageSearch } from "@mui/icons-material"; // You can replace this with a closer icon

function Index(props) {
    return (
        <Card
            sx={(theme) => ({
                mt: 2,
                backgroundColor: "#f7fcfc",
                ...theme.applyStyles("dark", {
                    color: "#cbd5e1",
                    backgroundColor: "#0f172a"
                })
            })}
        >
            <CardContent>
                <Box sx={{ mb: 2 }}>
                    <Grid2 container alignItems={"center"} spacing={1}>
                        <ManageSearch sx={(theme) => ({ 
                            color: "#f59e0b", 
                            fontSize: 28,
                            ...theme.applyStyles("dark", {
                                color: "#facc15"
                            })
                        })} />
                        <Typography variant="h5"> What is Check Report?</Typography>
                    </Grid2>
                    <Typography sx={{ color: "grey" }}>
                        Understanding the report verification system
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.85rem" }}>
                    The Check Report feature allows you to:
                </Typography>
                <List dense sx={{ pl: 2 }}>
                    {[
                        "Verify the authenticity of a report",
                        "Check the approval status of your submitted reports",
                        "View details about reported items or transactions",
                        "Access the history and timeline of a specific report"
                    ].map((text, idx) => (
                        <ListItem key={idx} disablePadding>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default Index;