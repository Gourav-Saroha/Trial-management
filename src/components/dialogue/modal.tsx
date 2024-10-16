import React, { ReactNode } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const GenericDialog: React.FC<Props> = ({ open, onClose, title, children, actions, maxWidth, fullWidth }) => {
    return (
      <Dialog open={open} onClose={onClose} maxWidth={maxWidth||'sm'} fullWidth={fullWidth}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    );
  };
  
  export default GenericDialog;

  export {};