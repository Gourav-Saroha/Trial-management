import React from 'react';
import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary', 
  label, 
  onClick, 
  disabled = false, 
  ...props 
}) => {
  return (
    <ButtonContainer 
      variant={variant} 
      onClick={onClick} 
      disabled={disabled} 
      {...props}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
