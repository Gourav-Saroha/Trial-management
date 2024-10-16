export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string; 
    variant?: 'primary' | 'secondary' | 'contained' | 'outlined'; 
    disabled?: boolean;
  }
  