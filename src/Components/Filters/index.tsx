import { Box, TextField } from "@mui/material";
import MultiSelect from "../Input/MultiSelect";
import SingleSelect from "../Input/SingleSelect";
import {
  JobTypes,
  Experience_Variants,
  Remote_Variants,
  Salary_Variants,
} from "./OptionConstants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  setCompanyName,
  setLocation,
  setMinBaseSalary,
  setMinExperience,
  setRemote,
  setRole,
} from "../../store/FilterSlice";

export default function Filters() {
  const selector = useSelector((state: RootState) => state.filterData);
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          padding: "10px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <MultiSelect
          onChange={(e) => {
            const Value = e.target.value as string[];
            dispatch(setRole(Value));
          }}
          value={selector.Role}
          multiSelect
          sx={{
            minWidth: "100px",
          }}
          checkMark
          label="Roles"
          CategoryOption={JobTypes}
        />
        <SingleSelect
          sx={{
            minWidth: "150px",
          }}
          value={selector.MinExperience}
          onChange={(e) => {
            dispatch(setMinExperience(e.target.value));
          }}
          label="Experience"
          options={Experience_Variants.map((item) => ({
            value: item.toLowerCase(),
            label: item,
          }))}
        />
        <SingleSelect
          value={selector.Remote}
          onChange={(e) => {
            dispatch(setRemote(e.target.value));
          }}
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
          value={selector.MinBaseSalary}
          onChange={(e) => {
            dispatch(setMinBaseSalary(e.target.value));
          }}
          sx={{
            minWidth: "250px",
          }}
          label="Minimum Base Pay Salary"
          options={Salary_Variants}
        />
        <TextField
          disabled={selector.Remote.toLowerCase() === "remote"}
          value={selector.Location}
          onChange={(e) => {
            dispatch(setLocation(e.target.value));
          }}
          label="Search Location"
          variant="outlined"
        />
        <TextField
          value={selector.CompanyName}
          onChange={(e) => {
            dispatch(setCompanyName(e.target.value));
          }}
          label="Search Company Name"
          variant="outlined"
        />
      </Box>
    </>
  );
}
