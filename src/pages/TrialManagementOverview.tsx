// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,

//   Grid,
//   FormControlLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";
// import GenericDataGrid from "../components/data-grid/datagrid";
// import { SettingsAddOrUpdateModal } from "./SettingsAddOrUpdateModal";
// import { PaginationModel } from "../utils/interface";
// import { useNavigate } from "react-router-dom";
// import MultiSelect from "../components/selectionType/MultiSelect";
// import Button from "../components/button/button";
// import RenderFields from "../utils/commonFunctions.tsx/trailRender";
// import { rows } from "../utils/dummyData";
// import AddTrialLocation from "../components/Trial/AddTrialLocation";


// const TrialManagementOverview: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [locationFilter, setLocationFilter] = useState<string[]>([]);
//   const [randomizationFilter, setRandomizationFilter] = useState<string>("All");
//   const [productsFilter, setProductsFilter] = useState<string>("All");
//   const [statusFilter, setStatusFilter] = useState<string>("All");
//   const [selectedColumns, setSelectedColumns] = useState<string[]>([
//     "trial",
//     "location",
//     "randomization",
//     "replications",
//     "products",
//     "status",
//   ]);
//   const navigate=useNavigate();

//   const [paginationModel, setPaginationModel] = useState<PaginationModel>({
//     page: Number(process.env.REACT_APP_INITIAL_PAGE),
//     pageSize: Number(process.env.REACT_APP_INITIAL_PAGE_SIZE),
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [isForUpdate, setIsForUpdate] = useState(false);

//   const allColumns = [
//     { field: "trial", headerName: "Trial", flex: 1 },
//     { field: "location", headerName: "Locations", flex: 1 },
//     { field: "randomization", headerName: "Randomization", flex: 1 },
//     { field: "replications", headerName: "Replications", flex: 1 },
//     {
//       field: "products",
//       headerName: "Products",
//       flex: 1,
//       renderCell: (params: any) => (
//         <Button >{`${params.value} Products`}</Button>
//       ),
//     },
//     { field: "status", headerName: "Status", flex: 1 },
//     {
//       field: "details",
//       headerName: "Details",
//       flex: 1,
//       renderCell: (params: any) => (
//         <Button>View Details</Button>
//       ),
//     },
//   ];

//   const filteredColumns = allColumns.filter((col) =>
//     selectedColumns.includes(col.field)
//   );

//   const filteredRows = rows.filter((row) => {
//     return statusFilter === "All" || row.status === statusFilter;
//   });

//   const handleSave = async () => {
//   };
 
//   return (
//     <Box mt={2}>
//       <Typography variant="h4">Trial Management Overview</Typography>

//       <Grid container spacing={2} alignItems="center" mt={2}>
//         <Grid item xs={12} sm={6} md={3}>
//           <MultiSelect
//             label="Select Columns"
//             items={selectedColumns}
//             setItems={setSelectedColumns}
//             listOfItems={allColumns}
//             itemLabel="headerName"
//             itemValue="field"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Search Trial"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Select
//               fullWidth
//               multiple
//               displayEmpty
//               value={locationFilter}
//               onChange={(e) => setLocationFilter(e.target.value as string[])}
//               renderValue={(selected) =>
//                 selected.length ? selected.join(", ") : "Location"
//               }
//             >
//               <MenuItem value="Menomonie">Menomonie</MenuItem>
//               <MenuItem value="Downsville">Downsville</MenuItem>
//             </Select>
//           </Grid>
//           <Grid item xs={12} sm={6} md={2}>
//             <Select
//               fullWidth
//               value={randomizationFilter}
//               onChange={(e) => setRandomizationFilter(e.target.value as string)}
//             >
//               <MenuItem value="All">Randomization All</MenuItem>
//               <MenuItem value="RCB">RCB</MenuItem>
//               <MenuItem value="RCB with nesting">RCB with nesting</MenuItem>
//             </Select>
//           </Grid>
//           <Grid item xs={12} sm={6} md={2}>
//             <Select
//               fullWidth
//               value={productsFilter}
//               onChange={(e) => setProductsFilter(e.target.value as string)}
//             >
//               <MenuItem value="All">Products All</MenuItem>
//             </Select>
//           </Grid>
//           <Grid item xs={12} sm={6} md={2}>
//             <Select
//               fullWidth
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value as string)}
//             >
//               <MenuItem value="All">Status All</MenuItem>
//               <MenuItem value="In progress">In progress</MenuItem>
//               <MenuItem value="Completed">Completed</MenuItem>
//               <MenuItem value="Not Started">Not Started</MenuItem>
//               <MenuItem value="Blessed">Blessed</MenuItem>
//             </Select>
//           </Grid>
//           <Grid item xs={12} sm={6} md={2}>
//             <Button  onClick={() => navigate('/second')} label={"navigate"}>
//               Navigate
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} alignItems="center" mt={2}>
          
//       </Grid>

//       <Box mt={2}>
//         <GenericDataGrid
//           rows={filteredRows}
//           columns={filteredColumns}
//           paginationMode="client"
//           paginationModel={paginationModel}
//           onPaginationModelChange={setPaginationModel}
//           disableRowSelectionOnClick
//           primaryButtonAction={() => {
//             setIsForUpdate(false);
//             setShowModal(true);
//           }}
//           primaryButtonLabel="Add Trial"
//         />
//       </Box>
//       <SettingsAddOrUpdateModal
//         showModal={showModal}
//         handleModal={() => setShowModal(!showModal)}
//         isForUpdate={isForUpdate}
//         setIsForUpdate={setIsForUpdate}
//         modalName="Trial"
//         handleSave={handleSave}
//         shouldDisabled={false}
//         renderFields={AddTrialLocation} 
//       />
//     </Box>
//   );
// };

// export default TrialManagementOverview;

import React from 'react';
import Footer from '../components/Footer/Footer';

const TrialManagementOverview: React.FC = () => {
  const buttons = [
    { label: 'Cancel', onClick: () => console.log('Cancelled') },
    { label: 'Add Products', onClick: () => console.log('Products Added') },
  ];

  const counts = [
    { label: 'Selected', count: 10 }, 
    { label: 'Total Entries', count: 20 },
  ];

  return (
    <div>
      <h1>My Application</h1>
      {/* Other components */}
      <Footer
        buttons={buttons}
        counts={counts} // Passing the counts here
      />
    </div>
  );
};

export default TrialManagementOverview;

