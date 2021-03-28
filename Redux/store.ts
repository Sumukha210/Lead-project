import { configureStore } from "@reduxjs/toolkit";
import leadSliceReducer from "./Lead/LeadSlice";

export const store = configureStore({
  reducer: {
    leadSlice: leadSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
