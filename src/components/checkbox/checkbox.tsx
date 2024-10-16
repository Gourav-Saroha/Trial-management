import React from "react";
import { CheckboxContainer, StyledCheckbox, Label } from "./styles";
import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  value,
  ...props
}) => {
  return (
    <CheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}   // Pass value prop to the input
        {...props}
      />
      {label && <Label>{label}</Label>}
    </CheckboxContainer>
  );
};

export default Checkbox;
