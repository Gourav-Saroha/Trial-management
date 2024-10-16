import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ReusableStepperProps {
  steps: React.ComponentType<any>[]; // Update here
  stepLabels: string[];
  activeStep: number;
}

const ReusableStepper: React.FC<ReusableStepperProps> = ({
  steps,
  stepLabels,
  activeStep,
}) => {
  const StepComponent = steps[activeStep];
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {stepLabels.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
        <Box>
          <StepComponent />
        </Box>
    </Box>
  );
};


export default ReusableStepper;
