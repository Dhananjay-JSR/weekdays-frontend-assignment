import { configureStore } from "@reduxjs/toolkit";
import { ApiDataSlice } from "./DataSlice";
import { filterSlice } from "./FilterSlice";

export const store = configureStore({
  reducer: {
    apiData: ApiDataSlice.reducer,
    filterData: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
