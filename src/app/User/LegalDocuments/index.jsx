import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Grid2, Button, Paper, Box, Card, CardContent, List, ListItem, ListItemText, ListItemButton,} from "@mui/material";

import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

const LegalDocs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [content, setContent] = useState("Loading...");
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarItems = [
    { text: "Terms And Conditions", path: "terms-and-conditions" },
    { text: "Privacy Policy", path: "privacy-policy" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Simulate fetching data based on the route
  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();

    // Simulate API call with timeout
    const fetchContent = async () => {
      setContent(`Content loaded for "${currentPath}"`);
    };

    fetchContent();
  }, [location.pathname]);

  const renderContent = (section) => {
    switch (section) {
      case "terms-and-conditions":
        return <TermsAndConditions />;
      case "privacy-policy":
        return <PrivacyPolicy />;
    }
  };
  

  return (
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Grid2 container spacing={4}>
            {/* Sidebar */}
            <Grid2 iitem size={{
                xs: 12,
                sm: 3
              }}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Paper elevation={1} sx={{ p: 2, borderRadius: 2, position: "sticky", top: 90 }}>
                  <List sx={{ p: 0 }}>
                    {sidebarItems.map((item, index) => {
                      const isActive = location.pathname.endsWith(item.path);
                      return (
                        <ListItem key={index} disablePadding>
                          <ListItemButton
                            onClick={() => navigate(`/${item.path}`)}
                            sx={(theme) => ({
                              bgcolor: isActive ? "rgba(59, 130, 246, 0.1)" : "transparent",
                              borderRadius: 1,
                              mb: 0.5,
                              ...theme.applyStyles('dark', { bgcolor: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent', '&:hover': { bgcolor: 'secondary.600' } }),
                              ...theme.applyStyles('light', { bgcolor: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent', '&:hover': { bgcolor: 'secondary.50' } }),
                            })}
                          >
                            <ListItemText
                              primary={item.text}
                              slotProps ={{ primary: {
                                color: isActive ? "primary.main" : "text.primary",
                                fontWeight: isActive ? 500 : 400,
                              }}}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Paper>
              </Box>

              {/* Mobile Menu Toggle */}
              <Box sx={{ display: { lg: "none" }, mb: 4 }}>
                <Button variant="outlined" fullWidth onClick={toggleMobileMenu}>
                  Documentation Menu
                </Button>
              </Box>
            </Grid2>

            {/* Main Content */}
            <Grid2 item size={{
                xs: 12,
                sm: 9
              }}>
              <Card elevation={2} sx={{ borderRadius: 2 }}>
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                {renderContent(location.pathname.split("/").pop())}
              </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
  );
};

export default LegalDocs;
