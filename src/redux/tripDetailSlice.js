import { createSlice } from "@reduxjs/toolkit";

const initialTripDetailState =
  JSON.parse(localStorage.getItem("tripDetail")) ?? {};
// console.log(initialTripDetailState);

export const tripDetailSlice = createSlice({
  name: "tripDetail",
  initialState: initialTripDetailState,
  reducers: {
    setItem(state, action) {
      return action.payload;
    },
  },
});

export const { setItem } = tripDetailSlice.actions;

export default tripDetailSlice.reducer;
