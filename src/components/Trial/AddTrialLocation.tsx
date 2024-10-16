import { Grid, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { FC } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Trial from "./SelectTrial";
import Location from "./SelectLocation";


import { Footerdiv, Headerdiv, StyledBox, ToggleButton } from "./Style";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
 
interface AddTrialLocationProps {
  initialCount?: number; // Optional prop for initial count
}
 
const AddTrialLocation: FC = () => {
  const [alignment, setAlignment] = useState("Select Location");
 
  const [visible, setvisible] = useState(false);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
 
 
 
 
  const [cnt1, setcnt1] = useState<number>(0);
  const [cnt2, setcnt2] = useState<number>(0);
 
  return (
    <StyledBox>
      <Headerdiv>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          onClick={() => {
            setvisible(!visible);
          }}
          aria-label="Platform"
        >
          <ToggleButton
            value="Select Trials"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setvisible(!visible);
            }}
          >
            Select Trials
          </ToggleButton>
          <ToggleButton value="Select Location" sx={{ cursor: "pointer" }}>
            <FmdGoodIcon /> Select Location
          </ToggleButton>
        </ToggleButtonGroup>
      </Headerdiv>
      {visible === true ? (
        <Trial ></Trial>
      ) : (
        <Location ></Location>
      )}
      <hr></hr>
      <Footerdiv>
       
        <Grid item lg={3} marginRight={45}>
          Selected :{visible === true ? cnt1 : cnt2}
        </Grid>
        <Grid
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "space-between", // Spreads buttons evenly across the space
            gap: 2, // Adds spacing between the buttons (optional)
          }}
        >
          <Button
            sx={{
              border: "1px navy solid",
            }}
          >
            Cancel
          </Button>
{visible===true?<Button
            variant="contained"
            sx={{
              bgcolor: "navy",
            }}
          >
            Next
          </Button>:<Button
            variant="contained"
            sx={{
              bgcolor: "navy",
            }}
          >
            Back
          </Button>}
         
          <Button
            variant="contained"
            sx={{
              bgcolor: "navy",
            }}
          >
            Finish
          </Button>
        </Grid>
      </Footerdiv>
    </StyledBox>
  );
};
 
export default AddTrialLocation;