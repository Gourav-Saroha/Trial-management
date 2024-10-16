import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridColDef,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
  GridPaginationModel,
  GridFilterModel,
} from '@mui/x-data-grid';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { CombinedToolbar } from '../toolBar/combinedToolBar'; // Import CombinedToolbar

interface CustomDataGridProps {
  loading?: boolean;
  columns: GridColDef[];
  initialRows: GridRowsProp;
  style?: React.CSSProperties;
  disableRowSelectionOnClick?: boolean;
  checkboxSelection?: boolean;
  paginationMode?: "client" | "server";
  paginationModel?: GridPaginationModel;
  onPaginationModelChange?: (model: GridPaginationModel) => void;
  primaryButtonAction?: any;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  secondaryButtonAction?: any;
  primaryButtonIcon?: any;
  primaryButtonTooltip?: string;
  secondaryButtonIcon?: any;
  shouldShowActionButtons?: boolean;
  shouldShowEditButton?: boolean;
}

const pageSizeOptions = process.env.REACT_APP_PAGE_SIZE_OPTIONS
  ? JSON.parse(process.env.REACT_APP_PAGE_SIZE_OPTIONS)
  : [2, 5, 10];

export const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  columns,
  initialRows,
  loading,
  style,
  disableRowSelectionOnClick,
  checkboxSelection,
  paginationMode = "client",
  paginationModel,
  onPaginationModelChange,
  primaryButtonAction,
  primaryButtonLabel,
  secondaryButtonLabel,
  secondaryButtonAction,
  primaryButtonIcon,
  primaryButtonTooltip,
  secondaryButtonIcon,
  shouldShowActionButtons,
  shouldShowEditButton,
}) => {
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={[
          ...columns,
          {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
              const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

              if (isInEditMode) {
                return [
                  <GridActionsCellItem
                    icon={<SaveIcon />}
                    label="Save"
                    sx={{
                      color: 'primary.main',
                    }}
                    onClick={handleSaveClick(id)}
                  />,
                  <GridActionsCellItem
                    icon={<CancelIcon />}
                    label="Cancel"
                    className="textPrimary"
                    onClick={handleCancelClick(id)}
                    color="inherit"
                  />,
                ];
              }

              return [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleEditClick(id)}
                  color="inherit"
                />,
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={handleDeleteClick(id)}
                  color="inherit"
                />,
              ];
            },
          },
        ]}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) =>
          setFilterModel(newFilterModel)
        }
        slots={{
          toolbar: (props) => (
            <CombinedToolbar
              setRows={setRows}
              setRowModesModel={setRowModesModel}
              {...props}
            />
          ),
        }}
        // slotProps={{
        //   toolbar: { setRows, setRowModesModel },
        // }}
        style={style || { minHeight: 500, width: "100%" }}
        pagination={true}
        paginationMode={paginationMode}
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationModelChange}
      />
    </Box>
  );
};
