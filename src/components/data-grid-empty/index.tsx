import React from "react";
import { Box, Typography } from "@mui/material";

export const CustomDataGridEmpty: React.FC = () => {
  return (
    <Box p={2} textAlign="center">
      <Typography variant="h6">No records to display</Typography>
    </Box>
  );
};