export interface ButtonProps {
    label: string;
    onClick: () => void; // Click handler
    variant?: 'primary' | 'secondary'; // Example variants, adjust as necessary
    disabled?: boolean; 
  }
  
  export interface CountLabelProps {
    label: string;
    count: number; // Count associated with the label
  }
  