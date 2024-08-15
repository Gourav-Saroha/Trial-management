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

export default function MultiSelect(props: any) {
  const theme = useTheme();
  const { items, setItems, listOfItems, label, itemLabel, itemValue } = props;

  function getStyles(name: string, items: string[], theme: Theme) {
    return {
      fontWeight:
        items.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event: SelectChangeEvent<typeof items>) => {
    const {
      target: { value },
    } = event;
    setItems(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl fullWidth style={props.style}>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          size="small"
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={items}
          defaultValue={items}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          {listOfItems.map((item: any) => (
            <MenuItem
              key={item.id}
              value={item[itemValue]}
              style={getStyles(item[itemValue], items, theme)}
            >
              {item[itemLabel]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
