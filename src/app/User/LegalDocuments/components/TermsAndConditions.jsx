import React from "react";
import { Typography, Link } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <>
        <Typography variant="h1" component="h1" gutterBottom>
            Welcome to Startup Documentation
        </Typography>
        
        <Typography variant="body1" color="text.secondary" gutterBottom>
            This document serves as a simple template to showcase a sample layout and format. It is solely created for demonstration
            purposes and is not intended for any official use.
        </Typography>
        
        <Typography variant="body1" color="text.secondary">
            Please visit:{" "}
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
            <Link href="https://nextjstemplates.com/docs" underline="hover" color="primary.main">
                nextjstemplates.com/docs
            </Link>
            </Typography>{" "}
            to check out the real docs, setup guide and even video instructions
        </Typography>
    </>
  );
};

export default TermsAndConditions;
