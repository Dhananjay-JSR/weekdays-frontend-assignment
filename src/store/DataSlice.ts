import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const API_URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";
/**
 @description Thunk middle responsible for Fetch Data with tracker to Current Page
 */
export const fetchAPIData = createAsyncThunk(
  "apiData/fetchAPIData",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    try {
      const response = await axios.post(API_URL, {
        limit: 10,
        offset: state.apiData.currentPage * 10,
      });
      return response.data.jdList as ApiState;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

/**
 * @description Interface for API Structure
 */
export interface ApiState {
  currentPage: number;
  data: {
    jdUid: string;
    jdLink: string;
    jobDetailsFromCompany: string;
    maxJdSalary: number | null;
    minJdSalary: number | null;
    salaryCurrencyCode: string | null;
    location: string | null;
    minExp: number | null;
    maxExp: number | null;
    jobRole: string | null;
    companyName: string | null;
    logoUrl: string | null;
  }[];
  currentState: "IDLE" | "LOADING" | "SUCCESS" | "ERROR";
  error: string | null;
}

const initialState: ApiState = {
  currentPage: 0,
  data: [],
  currentState: "IDLE",
  error: null,
};

export const ApiDataSlice = createSlice({
  name: "ApiDataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAPIData.pending, (state) => {
      // reducer to called when Data is Loading
      state.currentState = "LOADING";
    });
    builder.addCase(fetchAPIData.fulfilled, (state, action) => {
      // reducer to call when Data is finished
      state.currentState = "SUCCESS";
      state.currentPage += 1;
      state.data = state.data.concat(
        action.payload as unknown as ApiState["data"]
      );
    });
    builder.addCase(fetchAPIData.rejected, (state, action) => {
      state.currentState = "ERROR";
      state.error = action.error.message ?? "An error occurred";
    });
  },
});

export default ApiDataSlice.reducer;
