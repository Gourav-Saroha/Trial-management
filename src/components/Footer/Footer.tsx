import React from 'react';
import styled from 'styled-components';
import Button from '../button/button'; // Import your Button component
import { ButtonProps } from './types';

interface CountLabel {
  label: string;
  count: number; // Count associated with the label
}

interface FooterProps {
  buttons: ButtonProps[]; // Array of button objects
  counts: CountLabel[];    // Array of label-count pairs
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f0f0f0;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center; // Center items vertically
`;

interface RightContainerProps {
  centerButtons: boolean; // Define the prop type here
}

const RightContainer = styled.div<RightContainerProps>`
  display: flex;
  justify-content: ${({ centerButtons }) => (centerButtons ? 'center' : 'flex-end')}; // Destructure props
  flex-grow: 1;

  button {
    // Additional button styles can be added here
  }
`;

const Footer: React.FC<FooterProps> = ({ buttons, counts }) => {
  // Check if counts are provided
  const hasCounts = counts.length > 0;

  return (
    <FooterContainer>
      {hasCounts ? (
        <LeftContainer>
          {counts.map((item, index) => (
            <div key={index}>
              {item.label}: <strong>{item.count}</strong>&nbsp;&nbsp;
            </div>
          ))}
        </LeftContainer>
      ) : (
        <div /> // Empty div when there are no counts
      )}
      <RightContainer centerButtons={!hasCounts}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            onClick={button.onClick}
          />
        ))}
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;
