import { configureStore } from "@reduxjs/toolkit";
import { tripBookingSlice } from "./tripBookingSlice";
import { tripDetailSlice } from "./tripDetailSlice";

export const store = configureStore({
  reducer: {
    tripCart: tripBookingSlice.reducer,
    tripDetail: tripDetailSlice.reducer,
  },
  devTools: true,
});
