import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import GenericDataGrid from "../components/data-grid";
import MultiSelect from "../components/selectionType/MultiSelect";
import { PaginationModel } from "../utils/interface";

const TrialManagementOverview: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [randomizationFilter, setRandomizationFilter] = useState<string>("All");
  const [productsFilter, setProductsFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedColumns, setSelectedColumns] = useState<string[]>([
    "trial",
    "location",
    "randomization",
    "replications",
    "products",
    "status",
  ]); 
  const [paginationModel, setPaginationModel] = useState<PaginationModel>({
    page: Number(process.env.REACT_APP_INITIAL_PAGE),
    pageSize: Number(process.env.REACT_APP_INITIAL_PAGE_SIZE),
  });

  const rows = [
    {
      id: 1,
      trial: "Trial 1",
      location: "Menomonie, WI",
      randomization: "RCB",
      replications: 3,
      products: 10,
      status: "In progress",
    },
    {
      id: 2,
      trial: "Trial 2",
      location: "Downsville, WI",
      randomization: "RCB with nesting",
      replications: 4,
      products: 8,
      status: "Completed",
    },
    {
      id: 3,
      trial: "Trial 3",
      location: "Menomonie, WI",
      randomization: "RCB",
      replications: 2,
      products: 5,
      status: "Not Started",
    },
    {
      id: 4,
      trial: "Trial 4",
      location: "Downsville, WI",
      randomization: "RCB with nesting",
      replications: 5,
      products: 12,
      status: "Blessed",
    },
  ];

  const allColumns = [
    { field: "trial", headerName: "Trial", flex: 1 },
    { field: "location", headerName: "Locations", flex: 1 },
    { field: "randomization", headerName: "Randomization", flex: 1 },
    { field: "replications", headerName: "Replications", flex: 1 },
    {
      field: "products",
      headerName: "Products",
      flex: 1,
      renderCell: (params: any) => (
        <Button variant="outlined">{`${params.value} Products`}</Button>
      ),
    },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "details",
      headerName: "Details",
      flex: 1,
      renderCell: (params: any) => (
        <Button variant="contained">View Details</Button>
      ),
    },
  ];

  // Filter columns based on selected columns
  const filteredColumns = allColumns.filter((col) =>
    selectedColumns.includes(col.field)
  );

  return (
    <Box mt={2}>
      <Typography variant="h4">Trial Management Overview</Typography>

      <Grid container spacing={2} alignItems="center" mt={2}>
       
        <Grid item xs={12} sm={6} md={3}>
          <MultiSelect
            label="Select Columns"
            items={selectedColumns}
            setItems={setSelectedColumns}
            listOfItems={allColumns}
            itemLabel="headerName"
            itemValue="field"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Trial"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Select
              fullWidth
              multiple
              displayEmpty
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value as string[])}
              renderValue={(selected) =>
                selected.length ? selected.join(", ") : "Location"
              }
            >
              <MenuItem value="Menomonie">Menomonie</MenuItem>
              <MenuItem value="Downsville">Downsville</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Select
              fullWidth
              value={randomizationFilter}
              onChange={(e) => setRandomizationFilter(e.target.value as string)}
            >
              <MenuItem value="All">Randomization All</MenuItem>
              <MenuItem value="RCB">RCB</MenuItem>
              <MenuItem value="RCB with nesting">RCB with nesting</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Select
              fullWidth
              value={productsFilter}
              onChange={(e) => setProductsFilter(e.target.value as string)}
            >
              <MenuItem value="All">Products All</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Select
              fullWidth
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as string)}
            >
              <MenuItem value="All">Status All</MenuItem>
              <MenuItem value="In progress">In progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Not Started">Not Started</MenuItem>
              <MenuItem value="Blessed">Blessed</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" mt={2}>
          
      </Grid>

      <Box mt={2}>
        <GenericDataGrid
          rows={rows}
          columns={filteredColumns}
          paginationMode="client"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default TrialManagementOverview;
