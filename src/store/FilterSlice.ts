import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
  MinExperience: string;
  CompanyName: string;
  Location: string;
  Remote: string;
  //   TechStack: string[]; // The Api Doesn't Send TechStack Details
  Role: string[];
  MinBaseSalary: string;
}

const initialState: FilterState = {
  MinExperience: "",
  CompanyName: "",
  Location: "",
  Remote: "",
  Role: [],
  MinBaseSalary: "",
};

export const filterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMinExperience: (state, action: PayloadAction<string>) => {
      state.MinExperience = action.payload;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.CompanyName = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.Location = action.payload;
    },
    setRemote: (state, action: PayloadAction<string>) => {
      state.Remote = action.payload;
    },
    setRole: (state, action: PayloadAction<string[]>) => {
      state.Role = action.payload;
    },
    setMinBaseSalary: (state, action: PayloadAction<string>) => {
      state.MinBaseSalary = action.payload;
    },
  },
});

export const {
  setCompanyName,
  setLocation,
  setMinBaseSalary,
  setMinExperience,
  setRemote,
  setRole,
} = filterSlice.actions;

export default filterSlice.reducer;
