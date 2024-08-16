import React, { useState } from "react";
import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { Box, Button, Grid, TextField, MenuItem } from "@mui/material";
import GenericDataGrid from "../components/data-grid";

const SecondPage: React.FC = () => {
  const [role, setRole] = useState<string>("All Roles");
  const [status, setStatus] = useState<string>("All Status");

  const columns: GridColDef[] = [
    { field: "slNo", headerName: "Sl No", width: 90 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color={params.value === "Active" ? "success" : "error"}
        >
          {params.value}
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      slNo: 1,
      name: "Ralph Edwards",
      email: "ralphe@landolakes.com",
      role: "System Admin",
      status: "Active",
    },
    {
      id: 2,
      slNo: 2,
      name: "Jacob Jones",
      email: "jacob.j@landolakes.com",
      role: "System Admin",
      status: "Active",
    },
    {
      id: 3,
      slNo: 3,
      name: "Wade Warren",
      email: "wadew@landolakes.com",
      role: "Field Admin",
      status: "Active",
    },
    {
      id: 4,
      slNo: 4,
      name: "Darrell Steward",
      email: "darrels@landolakes.com",
      role: "Field Admin",
      status: "Active",
    },
    {
      id: 5,
      slNo: 5,
      name: "Albert Flores",
      email: "albertf@landolakes.com",
      role: "Field Admin",
      status: "Active",
    },
    {
      id: 6,
      slNo: 6,
      name: "Devon Lane",
      email: "devonlane@landolakes.com",
      role: "Field Admin",
      status: "Active",
    },
    {
      id: 7,
      slNo: 7,
      name: "Ronald Richards",
      email: "ronald.richard@landolakes.com",
      role: "Field Associate",
      status: "Inactive",
    },
    {
      id: 8,
      slNo: 8,
      name: "Ralph Edwards",
      email: "ralph.e@landolakes.com",
      role: "Field Associate",
      status: "Active",
    },
    {
      id: 9,
      slNo: 9,
      name: "Jacob Jones",
      email: "jacob.jg@landolakes.com",
      role: "Field Associate",
      status: "Active",
    },
    {
      id: 10,
      slNo: 10,
      name: "Albert Flores",
      email: "albert1@landolakes.com",
      role: "Field Associate",
      status: "Inactive",
    },
  ];

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 0,
  });

  // Filter the rows based on the selected role
  const filteredRows = rows.filter((row) => {
    return role === "All Roles" || row.role === role;
  });

  return (
    <Box p={3}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Search" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Role"
            value={role}
            onChange={handleRoleChange}
            variant="outlined"
            size="small"
          >
            <MenuItem value="All Roles">All Roles</MenuItem>
            <MenuItem value="System Admin">System Admin</MenuItem>
            <MenuItem value="Field Admin">Field Admin</MenuItem>
            <MenuItem value="Field Associate">Field Associate</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Status"
            value={status}
            onChange={handleStatusChange}
            variant="outlined"
            size="small"
          >
            <MenuItem value="All Status">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <GenericDataGrid
        rows={filteredRows} // Pass the filtered rows to the Data Grid
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => setPaginationModel(model)}
        checkboxSelection
      />
    </Box>
  );
};

export default SecondPage;
