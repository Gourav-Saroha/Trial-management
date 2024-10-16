import React, { useState } from "react";
import ReusableStepper from "./GenericStepper";
import stepList from "./tabList";

interface StepperProps {
  isStepOptional?: (step: number) => boolean;
  onNext?: (currentStep: number) => void;
  onFinish?: () => void;
}

const MyComponent: React.FC<StepperProps> =  ({
  isStepOptional = () => false,
  onNext,
  onFinish,
})=>{
  const steps = stepList.map((step) => step.component);
  const labels = stepList.map((step) => step.label); 

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    if (onNext) {
      onNext(activeStep);
    }
  };

  const handleBack = () => {
    if (onFinish) {
      onFinish();
    }
  };


  const StepComponentProps = {
    handleNext,
    handleBack,
  };

  return (
    <ReusableStepper
    steps={steps.map((Step) => (props) => <Step {...props} {...StepComponentProps} />)}
      stepLabels={labels} 
      activeStep={activeStep}
    />
  );
};

export default MyComponent;
