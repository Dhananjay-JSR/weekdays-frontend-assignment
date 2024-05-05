import { configureStore } from "@reduxjs/toolkit";
import { ApiDataSlice } from "./DataSlice";

export const store = configureStore({
  reducer: {
    apiData: ApiDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
