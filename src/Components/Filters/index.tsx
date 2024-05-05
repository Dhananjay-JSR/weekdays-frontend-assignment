import { TextField } from "@mui/material";
import MultiSelect from "../Input/MultiSelect";
import SingleSelect from "../Input/SingleSelect";
import {
  JobTypes,
  Employee_Variants,
  Experience_Variants,
  Remote_Variants,
  Salary_Variants,
} from "./OptionConstants";

export default function Filters() {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "10px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <MultiSelect
          multiSelect
          sx={{
            minWidth: "100px",
          }}
          checkMark
          label="Roles"
          CategoryOption={JobTypes}
        />
        <SingleSelect
          label="Number of Employees"
          sx={{
            minWidth: "200px",
          }}
          options={Employee_Variants.map((item) => ({
            value: item.toLowerCase(),
            label: item,
          }))}
        />
        <SingleSelect
          sx={{
            minWidth: "150px",
          }}
          label="Experience"
          options={Experience_Variants.map((item) => ({
            value: item.toLowerCase(),
            label: item,
          }))}
        />
        <SingleSelect
          sx={{
            minWidth: "120px",
          }}
          label="Remote"
          options={Remote_Variants.map((item) => ({
            value: item.toLowerCase(),
            label: item,
          }))}
        />
        <SingleSelect
          sx={{
            minWidth: "250px",
          }}
          label="Minimum Base Pay Salary"
          options={Salary_Variants}
        />
        <TextField label="Search Company Name" variant="outlined" />
      </div>
    </>
  );
}
