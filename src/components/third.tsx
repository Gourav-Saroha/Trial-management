import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/button/button";
import Checkbox from "../components/checkbox/checkbox";

const option2 = [
  { label: "1", value: "1", checked: false },
  { label: "2", value: "2", checked: false },
  { label: "3", value: "3", checked: true },
  { label: "4", value: "4", checked: false },
  { label: "5", value: "5", checked: true },
  { label: "6", value: "1", checked: false },
  { label: "1", value: "1", checked: false },
  { label: "2", value: "2", checked: false },
  { label: "3", value: "3", checked: true },
  { label: "4", value: "4", checked: false },
  { label: "5", value: "5", checked: true },
  { label: "6", value: "1", checked: false },
];

interface StepProps {
  handleNext: () => void;
  handleBack: () => void;
}

const Third: React.FC<StepProps> = ({ handleNext, handleBack }) => {
  const [selected, setSelected] = useState<any[]>(option2);

  const handleChange = (index: number, isChecked: boolean) => {
    const updatedSelections = selected.map((item, i) =>
      i === index ? { ...item, checked: isChecked } : item
    );
    setSelected(updatedSelections);
  };

  return (
    <>
      <Container>
        <Heading>Select Attributes</Heading>
        <Row>
          {selected.map((item, index) => (
            <Column key={index}>
              <Checkbox
                label={item.label}
                checked={item.checked}
                value={item.value}
                onChange={(e) => handleChange(index, e.target.checked)}
              />
            </Column>
          ))}
        </Row>
      </Container>
      <ButtonWrapper>
        <Button label="Cancel" variant="outlined" onClick={() => console.log("Cancel")} />
        <Button label="Back" variant="primary" onClick={handleBack}  />
        <Button label="Finish" variant="primary" onClick={() => console.log("Finish")} />
      </ButtonWrapper>
    </>
  );
};

export default Third;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 16px;
  background-color: #f0f0f0;
  border: 1px solid #b0b0b0;
  border-radius: 8px;
`;

const Heading = styled.h1`
  align-self: flex-start;
  margin: 0 0 12px 12px;
  font-size: 16px;
  color: #333;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 21%;
  margin: 0 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  margin-top: 20px;

  button {
    margin: 0 10px;
  }
`;
