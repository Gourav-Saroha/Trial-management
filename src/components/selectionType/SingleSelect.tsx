import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function SingleSelect(props: any) {
  const theme = useTheme();
  const { item, setItem, listOfItems, label, itemLabel, itemValue, disabled } =
    props;

  function getStyles(name: any, item: any, theme: Theme) {
    return {
      fontWeight:
        item === name
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      value
    );
  };

  return (
    <div>
      <FormControl
        fullWidth
        style={{ marginTop: 16, marginBottom: 16, ...props.style }}
      >
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          size="small"
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={item}
          defaultValue={item}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
          disabled={disabled}
        >
          {listOfItems.map((item: any) => (
            <MenuItem
              key={item.id}
              value={itemValue ? item[itemValue] : item}
              defaultValue={itemValue ? item[itemValue] : item}
              style={getStyles(item, item, theme)}
            >
              {itemLabel ? item[itemLabel] : item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}