import styled from "styled-components";

// Container for the checkbox and label
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Styling the input checkbox
export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
  
  // Custom styles for checked and disabled state
  &:checked {
    background-color: #4caf50;
    border-color: #4caf50;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Label styling
export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;
