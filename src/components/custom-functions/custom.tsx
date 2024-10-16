import React, { useState, useEffect, useCallback } from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { useGridApiContext } from '@mui/x-data-grid';
import styled from '@emotion/styled';

// Create a styled component for positioning
const IconContainer = styled.div`
  position: relative;
`;

const CustomToolbar = () => {
  const apiRef = useGridApiContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({});

  // Handle settings icon click
  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  // Handle menu item click
  const handleMenuItemClick = useCallback((field: string) => {
    setColumnVisibility(prev => {
      const newVisibility = { ...prev, [field]: !prev[field] };
      apiRef.current.setColumnVisibilityModel(newVisibility); // Update the Data Grid visibility model
      return newVisibility;
    });
    setAnchorEl(null); // Close the menu
  }, [apiRef]);

  // Close menu when clicking outside
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu open state
  const open = Boolean(anchorEl);

  // Get columns for the menu items
  const columns = apiRef.current.getAllColumns();

  // Update column visibility state on component mount
  useEffect(() => {
    // Initialize visibility state with all columns visible
    const initialVisibility = columns.reduce((acc, column) => {
      acc[column.field] = true; // Default all columns to be visible
      return acc;
    }, {} as Record<string, boolean>);
    setColumnVisibility(initialVisibility);
    apiRef.current.setColumnVisibilityModel(initialVisibility); // Set initial visibility model
  }, [apiRef, columns]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
      <IconContainer>
        <IconButton
          size="small"
          aria-label="Column Selector"
          onClick={handleSettingsClick}
        >
          <SettingsIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 300, // Limit menu height
              width: 200, // Menu width
            },
          }}
        >
          {columns.map((column) => (
            <MenuItem
              key={column.field}
              onClick={() => handleMenuItemClick(column.field)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={!!columnVisibility[column.field]}
                  tabIndex={-1}
                  disableRipple
                />
                <ViewColumnIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={column.headerName} />
            </MenuItem>
          ))}
        </Menu>
      </IconContainer>
    </div>
  );
};

export default CustomToolbar;
