import React from "react";
import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { Stepper, Step, StepLabel, StepIcon, StepConnector } from "@mui/material";

import { styled } from "@mui/material/styles";

const steps = ["Basic Information", "Incident Details", "Evidence Upload"];


const CustomStepper = (props) => {

    const { step = 0 } = props;

    return (
        <Stepper activeStep={step} alternativeLabel>
            {steps.map((label, idx) => (
                <Step key={idx}>
                    <StepLabel slotProps={{
                        stepIcon: {
                            sx: {
                                "&.Mui-active, &.Mui-completed": {
                                    color: "#FF6B00",
                                },
                                fontSize: { xs: "1.5rem", sm: "1.8rem" }
                            },
                        }
                    }}>
                        <Box sx={{ width: { xs: "80px", sm: "100px" } }} />
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export default CustomStepper;
