import React from "react";
import { Typography, Link } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        This document serves as a simple template to showcase a sample layout and format. It is solely created for demonstration
        purposes and is not intended for any official use.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Please review at:{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          <Link href="https://example.com/privacy" underline="hover" color="primary.main">
            example.com/privacy
          </Link>
        </Typography>
      </Typography>
    </>
  );
};

export default PrivacyPolicy;
