import React from "react";
import styled from "styled-components";
import Button from "./button/button";
import TextField from "./textfield/textField";


interface StepProps {
  handleNext: () => void;
  handleBack: () => void;
}

const Fourth: React.FC<StepProps> = ({ handleNext, handleBack }) => {
  return (
    <>
      <Container>
        <Row>
          <Column>
            <TextField label="Field 1" isDropdown={true} options={dropdownOptions} />
            <TextField label="Field 2" isDropdown={true} options={dropdownOptions} />
            <TextField label="Field 3" isDropdown={true} options={dropdownOptions} />
            <TextField label="Field 4" isDropdown={true} options={dropdownOptions} />
          </Column>
          <Column>
            <TextField label="Field 5" isDropdown={false} placeholder="Enter text" />
            <TextField label="Field 6" isDropdown={false} placeholder="Enter text" />
            <TextField label="Field 7" isDropdown={false} placeholder="Enter text" />
          </Column>
        </Row>
      </Container>

      <ButtonWrapper>
        <Button label="Cancel" variant="outlined" onClick={() => console.log("Cancel")} />
        <Button label="Back" variant="outlined" onClick={handleBack} />
        <Button label="Next" variant="primary" onClick={handleNext} />
        <Button label="Finish" variant="primary" onClick={() => console.log("Finish")} />
      </ButtonWrapper>
    </>
  );
};

const dropdownOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default Fourth;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center-aligns horizontally
  justify-content: center;
  width: 50%; // 50% of the screen width
  margin: 0 auto; // Center align on the screen
  padding: 16px;
  background-color: #f0f0f0; // Light gray background
  border: 1px solid #b0b0b0; // Slightly darker gray border
  border-radius: 8px; // Rounded corners for better aesthetics
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%; // Take up the full width of the container
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%; // Take 48% of the row width for each column
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; // Center the buttons
  padding: 16px;
  margin-top: 20px;

  button {
    margin: 0 10px; // Margin between each button
  }
`;