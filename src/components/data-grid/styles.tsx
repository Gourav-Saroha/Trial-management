import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-root": {
    backgroundColor: theme.palette.background.paper,
  },
  "& .MuiDataGrid-cell": {
    textAlign: "center",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.grey[200],
  },
  "& .MuiDataGrid-footerContainer": {
    justifyContent: "center",
  },
}));