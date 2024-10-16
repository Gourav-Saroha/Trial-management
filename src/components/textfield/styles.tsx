import styled from "styled-components";
import { Colors } from "../../utils/colors";

interface StyledInputProps {
  width?: string | number;
  marginRight?: string;
}

export const InputContainer = styled.div<{ marginRight?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${(props) => props.marginRight || '0'};
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${Colors.darkgrayColor};
  margin-bottom: 5px;
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${Colors.borderColor};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  width: ${(props) => props.width || '100%'};
  margin-right: ${(props) => props.marginRight || '0'};

  &:focus {
    border-color: ${Colors.primaryColor};
  }

  &:disabled {
    background-color: ${Colors.lightgrayColor};
    cursor: not-allowed;
  }
`;

interface StyledSelectProps {
  width?: string | number;
  marginRight?: string;
}

export const StyledSelect = styled.select<StyledSelectProps>`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${Colors.borderColor};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  width: ${(props) => props.width || '100%'};
  margin-right: ${(props) => props.marginRight || '0'};
  background-color: white;
  appearance: none; /* Remove default dropdown arrow */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6"><path d="M5 6L0 1h10L5 6z" fill="%23333"/></svg>'); /* Custom dropdown arrow */
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;

  &:focus {
    border-color: ${Colors.primaryColor};
  }

  &:disabled {
    background-color: ${Colors.lightgrayColor};
    cursor: not-allowed;
  }
`;
