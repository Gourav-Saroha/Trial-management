// import React, { useState } from 'react';
// import { CustomDataGrid } from '../components/dynamic-data-grid/dynamic';
// import { GridColDef } from '@mui/x-data-grid';
// import { PaginationModel } from '../utils/interface';

// const SecondPage: React.FC = () => {
//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Name', width: 200, editable: true },
//     { field: 'age', headerName: 'Age', width: 100 },
//     { field: 'city', headerName: 'City', width: 150},
//   ];
//   const [paginationModel, setPaginationModel] = useState<PaginationModel>({
//     page: Number(process.env.REACT_APP_INITIAL_PAGE),
//     pageSize: Number(process.env.REACT_APP_INITIAL_PAGE_SIZE),
//   });

//   const initialRows = [
//     { id: 1, name: 'John Doe', age: 25, city: 'New York' },
//     { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco' },
//   ];

//   return <CustomDataGrid columns={columns} initialRows={initialRows}
//   paginationMode="server"
//           paginationModel={paginationModel}
//           onPaginationModelChange={setPaginationModel}
//           />;
// };

// export default SecondPage;

// import React, { useState } from "react";
// import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
// import GenericDataGrid from "../components/data-grid/datagrid";
// import { Menu, MenuItem, IconButton, TextField } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const SecondPage = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [selectedRow, setSelectedRow] = useState(null);
//   console.log(selectedRow,"this is selected row");

//   const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>, params: GridRenderCellParams) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedRow(params.row);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const columns: GridColDef[] = [
//     { field: "productName", headerName: "Product Name", flex: 1 },
//     { field: "mpName", headerName: "MP Name", flex: 1 },
//     { field: "source", headerName: "Source", flex: 1 },
//     { field: "rm", headerName: "RM", flex: 1 },
//     { field: "height", headerName: "Height", flex: 1 },
//     { field: "trait", headerName: "Trait", flex: 1 },
//     {
//       field: "dateRec",
//       headerName: "Date Rec",
//       flex: 1,
//       renderCell: (params: GridRenderCellParams) => (
//         <TextField
//           variant="outlined"
//           size="small"
//           defaultValue={params.value}
//         />
//       ),
//     },
//     {
//       field: "datePrinted",
//       headerName: "Date Printed",
//       flex: 1,
//       renderCell: (params: GridRenderCellParams) => (
//         <TextField
//           variant="outlined"
//           size="small"
//           defaultValue={params.value}
//         />
//       ),
//     },
//     { field: "quantity", headerName: "Quantity", flex: 1 },
//     { field: "qtyAvailable", headerName: "Qty Available", flex: 1 },
//     { field: "qtyReceived", headerName: "Qty Received", flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       flex: 0.5,
//       renderCell: (params: GridRenderCellParams) => (
//         <>
//           <IconButton
//             onClick={(event) => handleMenuClick(event, params)}
//           >
//             <MoreVertIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={() => { /* Handle Assign to Trial */ }}>Assign to Trial</MenuItem>
//             <MenuItem onClick={() => { /* Handle Edit */ }}>Edit</MenuItem>
//             <MenuItem onClick={() => { /* Handle Delete */ }}>Delete</MenuItem>
//           </Menu>
//         </>
//       ),
//     },
//   ];

//   const rows = [
//     {
//       id: 1,
//       productName: "ARMB188VT2P",
//       mpName: "ARMB188VT2P",
//       source: "Armor",
//       rm: 95,
//       height: "Medium Tall",
//       trait: "VTDoublePRO",
//       dateRec: "04/07/2024",
//       datePrinted: "04/09/2024",
//       quantity: -405676,
//       qtyAvailable: 123566,
//       qtyReceived: 526890,
//     },
//   ];

//   return (
//     <GenericDataGrid
//       rows={rows}
//       columns={columns}
//       checkboxSelection
//       disableColumnMenu
//     />
//   );
// };

// export default SecondPage;

// import React, { useState } from 'react';
// import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from '@mui/x-data-grid';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

// interface RowData {
//   id: number;
//   name: string;
//   description: string;
//   editableField1: string;
//   editableField2: string;
// }

// const initialRows: GridRowsProp<RowData> = [
//   { id: 1, name: 'Row 1', description: 'Description 1', editableField1: '', editableField2: '' },
//   { id: 2, name: 'Row 2', description: 'Description 2', editableField1: '', editableField2: '' },
//   { id: 3, name: 'Row 3', description: 'Description 3', editableField1: '', editableField2: '' },
// ];

// export default function SecondPage() {
//   const [rows, setRows] = useState<RowData[]>([...initialRows]);
//   const [copies, setCopies] = useState(1);
//   const [open, setOpen] = useState(false);
//   const [params, setParams] = useState<any>(null);

//   const handleCopyClick = (params: any) => {
//     setParams(params);
//     setOpen(true);
//   };

//   const handleCopyConfirm = () => {
//     setRows((prevRows) => [
//       ...prevRows,
//       ...Array.from({ length: copies }, (_, index) => ({
//         id:  index,
//         name: `${params.row.name}`,
//         description: `${params.row.description}`,
//         editableField1: '',
//         editableField2: ''
//       }))
//     ]);
//     setOpen(false);
//   };

//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'description', headerName: 'Description', width: 200 },
//     { field: 'editableField1', headerName: 'Editable Field 1', width: 150, editable: true },
//     { field: 'editableField2', headerName: 'Editable Field 2', width: 150, editable: true },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 150,
//       renderCell: (params) => (
//         <Button variant="contained" onClick={() => handleCopyClick(params)}>
//           Copy
//         </Button>
//       )
//     }
//   ];

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} />

//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>How many copies?</DialogTitle>
//         <DialogContent>
//           <TextField
//             type="number"
//             label="Number of Copies"
//             value={copies}
//             onChange={(e) => setCopies(parseInt(e.target.value, 10))}
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleCopyConfirm} variant="contained">OK</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import styled from "styled-components";

// import Button from "../components/button/button";
// import TextField from "../components/textfield/textField";
// import GenericStepper from "../components/stepper/GenericStepper";

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #f5f5f5;
// `;

// const FormContainer = styled.div`
//   width: 600px;
//   background-color: white;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
//   margin-top: 20px;
// `;

// const Header = styled.h2`
//   margin-bottom: 20px;
//   color: #333;
// `;

// const Row = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-bottom: 20px;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   resize: none;
//   min-height: 100px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;

//   align-items: center;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const StepperContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Step = styled.div<{ active: boolean }>`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   background-color: ${(props) => (props.active ? "#004466" : "#ccc")};
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 14px;
//   margin-right: 10px;
// `;

// const StepLabel = styled.div`
//   font-size: 14px;
//   margin-right: 20px;
//   color: #666;
// `;

// const HorizontalLine = styled.div`
//   width: 100px;
//   height: 2px;
//   background-color: #ccc;
//   margin: 0 10px;
// `;

// const SecondPage = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const handleNext = () => {
//     if (activeStep < 4) setActiveStep(activeStep + 1);
//   };

//   const handleCancel = () => {
//     setActiveStep(1);
//   };

//   return (
//     <Container>
//       <StepperContainer>
//         <Step active={activeStep === 1}>1</Step>
//         <StepLabel>Trial Properties</StepLabel>
//         <HorizontalLine />
//         <Step active={activeStep === 2}>2</Step>
//         <StepLabel>Treatment</StepLabel>
//         <HorizontalLine />
//         <Step active={activeStep === 3}>3</Step>
//         <StepLabel>Randomization</StepLabel>
//         <HorizontalLine />
//         <Step active={activeStep === 4}>4</Step>
//         <StepLabel>Additional Attributes</StepLabel>
//       </StepperContainer>

//       <FormContainer>
//         {activeStep === 1 && (
//           <>
//             <Header>Trial Properties</Header>
//             <Row>
//               <TextField label="Trial Name" value="CPT-100" fullWidth marginRight="20px" />
//               <TextField
//                 label="RM Range Min"
//                 isDropdown
//                 options={[
//                   { value: "option1", label: "Option 1" },
//                   { value: "option2", label: "Option 2" },
//                 ]}
//                 fullWidth
//               />
//               <TextField
//                 label="Max"
//                 isDropdown
//                 options={[
//                   { value: "option1", label: "Option 1" },
//                   { value: "option2", label: "Option 2" },
//                 ]}
//                 fullWidth
//               />
//             </Row>

//             <Row>
//               <TextField
//                 label="Principal Investigator"
//                 value="Roger Smith"
//                 width="50%"
//               />
//             </Row>

//             <Row>
//               <TextArea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin vehicula nulla, at ornare ante commodo vitae" />
//             </Row>
//           </>
//         )}

//         {activeStep === 2 && (
//           <>
//             <Header>Treatment</Header>
//             <Row>
//               <TextField
//                 label="Treatment Name"
//                 value="Treatment A"
//                 fullWidth
//               />
//             </Row>
//           </>
//         )}

//         {activeStep === 3 && (
//           <>
//             <Header>Randomization</Header>
//           </>
//         )}

//         {activeStep === 4 && (
//           <>
//             <Header>Additional Attributes</Header>

//           </>
//         )}

//         <ButtonContainer>
//         <Button onClick={handleCancel} variant="outlined" label={"Cancel"} />
// <Button onClick={handleNext} variant="primary" label={"Next"} />

//         </ButtonContainer>
//       </FormContainer>
//     </Container>
//   );
// };

// export default SecondPage;

// import React from "react";

// import stepList from "../components/stepper/tabList";
// import ReusableStepper from "../components/stepper/GenericStepper";

// const SecondPage = () => {
//   const steps = stepList.map((step) => step.component);
//   const labels = stepList.map((step) => step.label);

//   const handleNext = (currentStep: number) => {
//     console.log(`Moving to step ${currentStep + 1}`);
//   };

//   const handleFinish = () => {
//     console.log("Stepper completed!");
//   };

//   return (
//     <ReusableStepper
//       steps={steps}
//       stepLabels={labels}
//       isStepOptional={(step) => step === 1}
//       onNext={handleNext}
//       onFinish={handleFinish}
//     />
//   );
// };

// export default SecondPage;



import React, { useState } from "react";
import stepList from "../components/stepper/tabList";
import ReusableStepper from "../components/stepper/GenericStepper";

interface StepperProps {
  isStepOptional?: (step: number) => boolean;
  onNext?: (currentStep: number) => void;
  onFinish?: () => void;
}

const SecondPage: React.FC<StepperProps> =  ({
  isStepOptional = () => false,
  onNext,
  onFinish,
})=>{
  const steps = stepList.map((step) => step.component);
  const labels = stepList.map((step) => step.label); 

  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    if (onNext) {
      onNext(activeStep);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };


  const StepComponentProps = {
    handleNext,
    handleBack,
  };

  return (
    <ReusableStepper
    steps={steps.map((Step) => (props) => <Step {...props} {...StepComponentProps} />)}
      stepLabels={labels} 
      activeStep={activeStep}
    />
  );
};

export default SecondPage;







