import React, { useState } from "react";
import {
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import { CustomDataGrid } from "./styles";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { CombinedToolbar } from "../toolBar/combinedToolBar";
import CustomToolbar from "../custom-functions/custom";

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
  primaryButtonAction?: any;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  secondaryButtonAction?: any;
  primaryButtonIcon?: any;
  primaryButtonTooltip?: string;
  secondaryButtonIcon?: any;
  shouldShowActionButtons?: boolean;
  shouldShowEditButton?: boolean;
  disableColumnMenu?: boolean;
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
  secondaryButtonAction,
  primaryButtonAction,
  primaryButtonIcon,
  primaryButtonTooltip,
  primaryButtonLabel,
  secondaryButtonLabel,
  disableColumnMenu,
}) => {
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  const isMobile = document.body.clientWidth > 464 ? false : true;

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} mb={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {primaryButtonLabel && (
              <Tooltip title={primaryButtonTooltip || ""}>
                <span>
                  <Button
                    onClick={primaryButtonAction}
                    startIcon={primaryButtonIcon || <AddCircleOutlineOutlined />}
                    variant="contained"
                    size="large"
                    sx={{ textTransform: "none" }}
                  >
                    <Typography variant="body2" noWrap>
                      {primaryButtonLabel}
                    </Typography>
                  </Button>
                </span>
              </Tooltip>
            )}
            {secondaryButtonLabel && (
              <Button
                onClick={secondaryButtonAction}
                startIcon={secondaryButtonAction || <AddCircleOutlineOutlined />}
                variant="contained"
                size="small"
                sx={{ textTransform: "none" }}
              >
                <Typography variant="body2" noWrap>
                  {secondaryButtonLabel}
                </Typography>
              </Button>
            )}
          </Box>
        </Grid>
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
              toolbar: CustomToolbar, 
            }}
            style={style || { minHeight: 500, width: "100%" }}
            pagination={true}
            paginationMode={paginationMode}
            paginationModel={paginationModel}
            onPaginationModelChange={onPaginationModelChange}
            disableColumnMenu={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GenericDataGrid;
