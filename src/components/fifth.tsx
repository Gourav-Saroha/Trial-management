import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../components/checkbox/checkbox";
import SingleSelect from "../components/selectionType/SingleSelect";
import Button from "./button/button";

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
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

const LeftContainer = styled("div")`
  width: 65%; /* Left container width */
  display: flex;
  flex-direction: column; /* Column layout for header and dropdowns */
  border: 1px solid black;
  background-color: #f9f9f9;
`;

const HeaderContainer = styled("span")`
  text-align: left;
  font-size: 18px; /* Adjusted for better visibility */
  margin-bottom: 20px; /* Margin below header */
`;

const DropdownContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DropdownsWrapper = styled("div")`
  display: flex;
  flex-direction: row; /* Align dropdowns horizontally */
  gap: 20px; /* Space between each dropdown item */
`;

const DropdownItem = styled("div")`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: white;
  width: 30%;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const TreatmentTypeContainer = styled("div")`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 25%; /* Adjusted width for the right container */
  background-color: #f9f9f9;
  margin-left: 20px;
`;

const InfoIcon = styled("span")`
  font-size: 18px;
  margin-right: 8px;
`;

const SelectAllContainer = styled("div")`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const CheckboxList = styled("div")`
  margin-top: 10px;
`;

interface StepProps {
  handleNext: () => void;
  handleBack: () => void;
}

type PopulationKey = "high" | "low";
type TreatmentGroupKey = "TRM1" | "TRM2";

interface Option<T extends string> {
  id: T;
  name: string;
}

type TreatmentKeys =
  | "TRM1"
  | "TRM2"
  | "TRM3"
  | "TRM4"
  | "TRM5"
  | "TRM6"
  | "TRM7"
  | "TRM8"
  | "TRM9"
  | "TRM10";
const Fifth: React.FC<StepProps> = ({ handleNext, handleBack }) => {
  const [selectedTreatments, setSelectedTreatments] = useState<
    Record<TreatmentKeys, boolean>
  >({
    TRM1: false,
    TRM2: false,
    TRM3: false,
    TRM4: false,
    TRM5: false,
    TRM6: false,
    TRM7: false,
    TRM8: false,
    TRM9: false,
    TRM10: false,
  });

  const [selectedPopulation, setSelectedPopulation] = useState<
    Record<PopulationKey, boolean>
  >({
    high: false,
    low: false,
  });

  const [selectedTreatmentGroup, setSelectedTreatmentGroup] = useState<
    Record<TreatmentGroupKey, boolean>
  >({
    TRM1: false,
    TRM2: false,
  });

  const keyPopulationOptions: Option<PopulationKey>[] = [
    { id: "high", name: "High" },
    { id: "low", name: "Low" },
  ];

  const treatmentGroupOptions: Option<TreatmentGroupKey>[] = [
    { id: "TRM1", name: "TRM-1" },
    { id: "TRM2", name: "TRM-2" },
  ];

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setSelectedTreatments((prevState) => {
      const updatedState = { ...prevState };
      Object.keys(updatedState).forEach((key) => {
        updatedState[key as TreatmentKeys] = checked;
      });
      return updatedState;
    });
  };

  const handlePopulationCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: PopulationKey
  ) => {
    setSelectedPopulation((prevState) => ({
      ...prevState,
      [key]: e.target.checked,
    }));
  };

  const handleSelectAllPopulation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.target.checked;
    setSelectedPopulation({
      high: isChecked,
      low: isChecked,
    });
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: TreatmentKeys
  ) => {
    setSelectedTreatments((prevState) => ({
      ...prevState,
      [key]: e.target.checked,
    }));
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <HeaderContainer>
            <h3>Treatment Groups</h3>
          </HeaderContainer>

          <DropdownContainer>
            <DropdownsWrapper>
              <DropdownItem>
                <SingleSelect
                  item={selectedTreatmentGroup}
                  setItem={setSelectedTreatmentGroup}
                  listOfItems={treatmentGroupOptions}
                  label="Select Treatment Group"
                  itemLabel="name"
                  itemValue="id"
                  disabled={false}
                />
                <SelectAllContainer>
                  <Checkbox
                    label="Select All"
                    checked={Object.values(selectedTreatments).every(Boolean)}
                    onChange={handleSelectAll}
                  />
                </SelectAllContainer>
                <CheckboxList>
                  {Object.keys(selectedTreatments).map((key) => (
                    <Checkbox
                      key={key}
                      label={key.replace("TRM", "TRM-")}
                      checked={selectedTreatments[key as TreatmentKeys]}
                      onChange={(e) =>
                        handleCheckboxChange(e, key as TreatmentKeys)
                      }
                    />
                  ))}
                </CheckboxList>
              </DropdownItem>

              <DropdownItem>
                <SingleSelect
                  item={keyPopulationOptions}
                  setItem={setSelectedPopulation}
                  listOfItems={keyPopulationOptions}
                  label="Select Key Population"
                  itemLabel="name"
                  itemValue="id"
                  disabled={false}
                />
                <SelectAllContainer>
                  <Checkbox
                    label="Select All Population"
                    checked={Object.values(selectedPopulation).every(Boolean)}
                    onChange={handleSelectAllPopulation}
                  />
                </SelectAllContainer>
                {Object.keys(selectedPopulation).map((key) => (
                  <Checkbox
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    checked={selectedPopulation[key as PopulationKey]}
                    onChange={(e) =>
                      handlePopulationCheckboxChange(e, key as PopulationKey)
                    }
                  />
                ))}
              </DropdownItem>

              <DropdownItem>
                <SingleSelect
                  item={keyPopulationOptions}
                  setItem={setSelectedTreatmentGroup}
                  listOfItems={treatmentGroupOptions}
                  label="Select Treatment Group"
                  itemLabel="name"
                  itemValue="id"
                  disabled={false}
                />
                <CheckboxList>
                  <Checkbox label="TRM-1" checked={true} onChange={() => {}} />
                  <Checkbox label="TRM-2" checked={false} onChange={() => {}} />
                </CheckboxList>
              </DropdownItem>
            </DropdownsWrapper>
          </DropdownContainer>
        </LeftContainer>

        <TreatmentTypeContainer>
          <h3>Treatment Type</h3>
          <SingleSelect
            item={keyPopulationOptions}
            setItem={setSelectedPopulation}
            listOfItems={treatmentGroupOptions}
            label="Select Treatment Group"
            itemLabel="name"
            itemValue="id"
            disabled={false}
          />
          <InfoIcon>ℹ️</InfoIcon>
          <span>Split Plot: Each treatment placed together</span>
          <br />
          <br />
          <span>
            Factorial: Treatments are assigned when randomized. The entries and
            treatments are randomized.
          </span>
        </TreatmentTypeContainer>
      </Container>

      <ButtonWrapper>
        <Button
          label="Cancel"
          variant="outlined"
          onClick={() => console.log("Cancel")}
        />
        <Button label="Back" variant="outlined" onClick={handleBack} />
        <Button label="Next" variant="primary" onClick={handleNext} />
        <Button
          label="Finish"
          variant="primary"
          onClick={() => console.log("Finish")}
        />
      </ButtonWrapper>
    </>
  );
};

export default Fifth;
