import styled from "styled-components";
import MuiToggleButton from "@mui/material/ToggleButton";
import { Button, IconButton } from "@mui/material";
export const StyledBox = styled.div`
position: relative; /* Ensure it's the reference for absolute positioning */
height: 450px;  /* Overall height of the box */
width: 650px;
text-align: center;
border: 1px solid black;
/* Specify the border color and style */
 
`;
 
 
export const Headerdiv = styled.div`
height: 34px;
padding: 20px;
display: flex;
justify-content: center;  /* Centers content horizontally */
align-items: center;      /* Centers content vertically */
text-align: center;       /* Corrected text alignment */
`;
export const Footerdiv = styled.div`
position: absolute;
bottom:1px;
height: 34px;
padding: 20px;
display: flex;
justify-content: center;  /* Centers content horizontally */
align-items: center;      /* Centers content vertically */
text-align: center;       /* Corrected text alignment */
`;
export const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "navy",
    },
  });
 
  export const CircleButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: "white", // Background color of the button
    color: "navy", // Icon color
    width: "30px", // Width of the circle
    height: "30px", // Height of the circle (to make it circular)
    borderRadius: "50%", // Full circle
  }));
 
 
  export const Scrollbar = styled.div`
  margin-left: 30px;
  margin-right: 10px;
  height: 300px; // Increased height to match the screenshot
  overflow-y: auto;
  margin-bottom: 25px;
  padding-right: 10px;
 
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
 
  &::-webkit-scrollbar-thumb {
    background-color: navy;
    height:150px;
    border-radius: 10px; // Smooth scroll thumb
  }
 
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;
