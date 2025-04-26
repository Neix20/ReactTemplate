import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Grid2, Button, Paper, Box, Card, CardContent, List, ListItem, ListItemText, ListItemButton,} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';

import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

const LegalDocs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [content, setContent] = useState("Loading...");
  const location = useLocation();
  const navigate = useNavigate();
  const menuButtonRef = useRef();

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

  useEffect(() => {
    // Navigate to the correct initial route if needed.
    if (location.pathname === '/') {
      navigate('/terms-and-conditions');
    }
  }, [location.pathname, navigate]);
  
  return (
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Grid2 container spacing={1.5}>
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
              <Box sx={{ display: { lg: "none" }, mb: 1 }}>
                <Button
                  variant="outlined"
                  // fullWidth
                  onClick={toggleMobileMenu}
                  ref={menuButtonRef} // Attach the ref here
                  aria-haspopup="true" // Add aria attributes for accessibility
                  aria-expanded={mobileMenuOpen}
                >
                  <MenuIcon className="mr-2 h-4 w-4" />
                  Documentation Menu
                </Button>
              </Box>

              {/* Mobile Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'fixed',
                      top: menuButtonRef.current ? menuButtonRef.current.offsetTop + menuButtonRef.current.offsetHeight : 64, // Position below the button, with a fallback
                      left: 0,
                      width: '100%',
                      maxHeight: 'calc(100vh - 64px)', // Adjust based on header height.
                      zIndex: 1000,
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '-100%' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{
                        backgroundColor: 'white',
                        width: '80%', // Or any suitable width
                        maxWidth: '320px',
                        height: 'auto',
                        maxHeight: 'calc(100vh - 64px)',
                        overflowY: 'auto',
                        padding: 16,
                        margin: 16,
                        borderRadius: 4,
                        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', // Add a shadow for the dropdown effect
                      }}
                    >
                      <List>
                      {sidebarItems.map((item, index) => {
                        const isActive = location.pathname.endsWith(item.path);
                        return (
                          <ListItem key={index} disablePadding>
                            <ListItemButton
                              onClick={() => {
                                navigate(`/${item.path}`);
                                setMobileMenuOpen(false);
                              }}
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
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
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
