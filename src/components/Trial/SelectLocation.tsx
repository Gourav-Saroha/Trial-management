import {
    Box,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import Button from "@mui/material/Button";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
 
 
const Div = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Stacks content vertically */
  margin-bottom: 325px; /* Apply margin-bottom */
`;
const Location = () => {
    const Btn = () => {
        const [Active, setActive] = useState(false);
        const CircleButton = styled(IconButton)(({ theme }) => ({
          backgroundColor: "white", // Background color of the button
          color: "navy", // Icon color
          width: "30px", // Width of the circle
          height: "30px", // Height of the circle (to make it circular)
          borderRadius: "50%", // Full circle
        }));
        const handleClick = () => {
          setActive(!Active); // Toggle the value of Active
        };
     
        return (
          <>
            <CircleButton
              sx={{
                bgcolor: "lightgray",
              }}
            >
              <IconButton onClick={handleClick}>
                {Active ? <CheckCircleIcon /> : <FmdGoodIcon />}
              </IconButton>
              {/* Add your icon here */}
            </CircleButton>
          </>
        );
      };
    const buttonData = [
      { id: 1, label: "Belgrade" },
      { id: 2, label: "Claremont" },
      { id: 3, label: "Danube" },
      { id: 4, label: "Mardock" },
      // Add more buttons here
    ];
   
    const buttonData2 = [
      { id: 1, label: "Santiago" },
      { id: 2, label: "Wanamingo" },
      { id: 3, label: "Truman" },
 
      // Add more buttons here
    ];
     const StyledButton = styled(Button)`
  border-radius: 40px ;
  margin-left:30px;
  margin-right:50px
  min-height: 20px;
 
 
`;
 
    return (
      <>
      <Div>
        <Grid container spacing={3} >
          {buttonData.map((button) => (
            <Grid item >
              <StyledButton
               
                               variant="outlined"
                startIcon={<Btn />} // Use your icon component here
                size="small"
               
              >
                {button.label}
              </StyledButton>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={2}
         
        >
          {buttonData2.map((button) => (
            <Grid item key={button.id} margin="2px 0px  0px 60px" gap={1}>
              <StyledButton
                aria-label="outlined"
                variant="outlined"
                startIcon={<Btn />} // Use your icon component here
                size="small"
              >
                {button.label}
              </StyledButton>
            </Grid>
          ))}
        </Grid>
        </Div>
      </>
    );
  };
 
  export default Location