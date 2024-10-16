import React from "react";
import { InputContainer, StyledInput, Label, StyledSelect } from "./styles";
import { TextFieldProps } from "./types";

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  width = '100%',
  isDropdown = false,
  options = [],
  marginRight,
  ...props
}) => {
  return (
    <InputContainer marginRight={marginRight}>
      {label && <Label>{label}</Label>}
      {isDropdown ? (
        <StyledSelect
          value={value}
          onChange={onChange}
          disabled={disabled}
          width={width}
          marginRight={marginRight}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <StyledInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          width={width}
          marginRight={marginRight}
          {...props}
        />
      )}
    </InputContainer>
  );
};

export default TextField;
