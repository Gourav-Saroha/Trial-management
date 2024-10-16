// styles.ts
import styled from 'styled-components';
import { Colors } from '../../utils/colors';

export const ButtonContainer = styled.button<{
  variant: 'primary' | 'secondary' | 'contained' | 'outlined';
  disabled?: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  /* Default styling for variants */
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return Colors.primaryColor;
      case 'secondary':
        return Colors.secondaryColor;
      // case 'contained':
      //   return Colors.containedColor;
      case 'outlined':
        return 'transparent';
      default:
        return Colors.primaryColor;
    }
  }};
  color: ${({ variant }) =>
    variant === 'outlined' ? Colors.primaryColor : Colors.whiteColor};
  border: ${({ variant }) => (variant === 'outlined' ? `1px solid ${Colors.primaryColor}` : 'none')};

  /* Disabled state */
  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${Colors.lightgrayColor};
    color: ${Colors.grayColor};
    cursor: not-allowed;
  `}

  /* Hover state */
  &:hover {
    ${({ disabled, variant }) =>
      !disabled &&
      variant !== 'outlined' &&
      `
      background-color: ${Colors.primaryHover};
      color: ${Colors.whiteColor};
  `}
  }

  /* Active state */
  &:active {
    transform: scale(0.98); /* Slight press effect */
  }
`;
