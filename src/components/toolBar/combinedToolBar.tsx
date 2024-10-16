import React from 'react';
import { GridToolbarContainer, GridToolbar, GridRowsProp, GridRowModesModel, GridRowModes } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export function CombinedToolbar(props: {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
      setRowModesModel: (
        newModel: (oldModel: GridRowModesModel) => GridRowModesModel
      ) => void;
    }) {
      const { setRows, setRowModesModel } = props;
      
  console.log('setRows:', setRows);
  console.log('setRowModesModel:', setRowModesModel);
      const handleClick = () => {
        const id = Math.floor(Math.random() * 1000);
        setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
          ...oldModel,
          [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
      };
    
  return (
    <GridToolbarContainer>
      <GridToolbar />
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}


export {};