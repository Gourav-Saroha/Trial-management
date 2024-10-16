export interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string | number;
  isDropdown?: boolean;
  options?: { value: string; label: string }[];
  marginRight?: string;
}
