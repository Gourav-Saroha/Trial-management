import React, { useState } from "react";
import { FC } from "react";
import { Grid, Typography, Checkbox } from "@mui/material";

interface AddTrialLocationProps {
  initialCount?: number;
}

const Trial: FC<AddTrialLocationProps> = ({ initialCount = 120 }) => {
  const [cnt, setCnt] = useState(0);

  interface DataItem {
    id: number;
    value: string;
    isChecked: boolean;
    heading: string;
    description: string;
  }

  const initialData: DataItem[] = [
    { id: 1, value: "1", isChecked: false, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 2, value: "2", isChecked: false, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 3, value: "3", isChecked: false, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 4, value: "4", isChecked: false, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 5, value: "5", isChecked: true, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 6, value: "6", isChecked: true, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 7, value: "7", isChecked: false, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 8, value: "8", isChecked: false, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 9, value: "9", isChecked: true, heading: "CPT1", description: "lorem 5 ,hgjhg" },
    { id: 10, value: "10", isChecked: false, heading: "CPT1", description: "lorem 5 ,hgjhg" },
  ];

  const [data, setData] = useState<DataItem[]>(initialData);
  const [checkedCount, setCheckedCount] = useState(() => {
    return initialData.filter((item) => item.isChecked).length;
  });

 
  const handleChange = (id: number, checked: boolean) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isChecked: checked } : item
    );
    setData(updatedData);
    const newCheckedCount = updatedData.filter((item) => item.isChecked).length;
    setCheckedCount(newCheckedCount);
  };

  return (
    <>
      <Typography variant="h6">Checked Count: {checkedCount}</Typography>
      <Grid container spacing={2}>
        {data.map((d, index) => (
          <Grid item xs={12} key={d.id}>
            <Grid container alignItems="center" sx={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}>
              <Grid item xs={1}>
                <Checkbox
                  checked={d.isChecked}
                  onChange={(e) => handleChange(d.id, e.target.checked)}
                  value={d.value}
                  sx={{ color: "navy" }}
                />
              </Grid>
              <Grid item xs={11}>
                <Typography>{d.heading}</Typography>
                <Typography>{d.description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Trial;
