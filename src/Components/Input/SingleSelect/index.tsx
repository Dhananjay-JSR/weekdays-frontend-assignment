import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

export default function SingleSelect({
  value,
  label,
  options,
  onChange,
  sx,
}: {
  value?: string | undefined;
  onChange?: (event: SelectChangeEvent<string>) => void;
  label: string;
  options?: {
    value: string;
    label: string;
  }[];
  sx?: SxProps<Theme>;
}) {
  return (
    <>
      <Box>
        <FormControl sx={sx}>
          <InputLabel htmlFor={label + "for-html"}>{label}</InputLabel>
          <Select
            value={value}
            onChange={onChange}
            id={label + "for-html"}
            label={label}
          >
            <MenuItem value={""}>None</MenuItem>
            {options?.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
