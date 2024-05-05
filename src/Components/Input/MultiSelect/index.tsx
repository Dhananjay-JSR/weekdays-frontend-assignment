import { Theme } from "@emotion/react";
import {
  SelectChangeEvent,
  SxProps,
  ListSubheader,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function MultiSelect({
  CategoryOption,
  sx,
  label,
  onChange,
  value,
  multiSelect,
  checkMark,
}: {
  checkMark?: boolean;
  multiSelect?: boolean;
  value?: string[];
  onChange?: (event: SelectChangeEvent<string[]>) => void;
  label: string;
  sx?: SxProps<Theme>;
  CategoryOption?: {
    name: string;
    children: {
      value: string;
      label: string;
    }[];
  }[];
}) {
  const [Loc_value, setLoc_Value] = React.useState<string[]>(
    value ? [...value] : []
  );

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setLoc_Value(typeof value === "string" ? value.split(",") : value);
    if (onChange) onChange(event);
  };

  return (
    <>
      <Box>
        <FormControl sx={sx}>
          <InputLabel htmlFor={label + "for-html"}>{label}</InputLabel>
          <Select
            multiple={multiSelect}
            value={Loc_value}
            id={label + "for-html"}
            label={label}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {CategoryOption?.map((category) => [
              <ListSubheader>{category.name}</ListSubheader>,
              category.children.map((option) => (
                <MenuItem value={option.value}>
                  {checkMark ? (
                    <>
                      <Checkbox
                        checked={Loc_value.indexOf(option.value) > -1}
                      />
                      <ListItemText primary={option.label} />
                    </>
                  ) : (
                    option.label
                  )}
                </MenuItem>
              )),
            ])}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
