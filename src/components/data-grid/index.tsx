import React, { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, Grid } from "@mui/material";
import { CustomDataGrid } from "./styles";
import { CustomDataGridEmpty } from "../data-grid-empty";

interface Props {
  loading?: boolean;
  rows: any[];
  columns: GridColDef[];
  style?: React.CSSProperties;
  disableRowSelectionOnClick?: boolean;
  checkboxSelection?: boolean;
  paginationMode?: "client" | "server";
  paginationModel?: GridPaginationModel;
  onPaginationModelChange?: (model: GridPaginationModel) => void;
}

const pageSizeOptions = process.env.REACT_APP_PAGE_SIZE_OPTIONS
  ? JSON.parse(process.env.REACT_APP_PAGE_SIZE_OPTIONS)
  : [2, 5, 10];

const GenericDataGrid: React.FC<Props> = ({
  loading,
  style,
  rows,
  columns,
  disableRowSelectionOnClick,
  checkboxSelection,
  paginationMode = "client",
  paginationModel,
  onPaginationModelChange,
}) => {
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  return (
    <Box mt={2}>
      <Grid container>
        <Grid item xs={12}>
          <CustomDataGrid
            rows={rows}
            loading={loading}
            columns={columns}
            disableRowSelectionOnClick={disableRowSelectionOnClick}
            pageSizeOptions={pageSizeOptions}
            checkboxSelection={checkboxSelection}
            filterModel={filterModel}
            onFilterModelChange={(newFilterModel) =>
              setFilterModel(newFilterModel)
            }
            slots={{
              toolbar: GridToolbar,
            }}
            style={style || { minHeight: 500, width: "100%" }}
            pagination={true}
            paginationMode={paginationMode}
            paginationModel={paginationModel}
            onPaginationModelChange={onPaginationModelChange}
            // slots={{
            //   noRowsOverlay: CustomDataGridEmpty,
            // }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GenericDataGrid;
