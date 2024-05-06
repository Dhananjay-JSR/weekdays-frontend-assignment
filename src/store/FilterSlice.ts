import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
  MinExperience: string; // Done
  CompanyName: string | null; //Done
  Location: string;
  Remote: string;
  //   TechStack: string[];
  Role: string[]; //DONE
  MinBaseSalary: string | undefined; //DONE
}

const initialState: FilterState = {
  MinExperience: "",
  CompanyName: null,
  Location: "",
  Remote: "",
  Role: [],
  MinBaseSalary: undefined,
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
