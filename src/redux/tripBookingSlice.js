import { createSlice } from "@reduxjs/toolkit";

const initialTripBookingState = JSON.parse(
  localStorage.getItem("tripCart")
) ?? { date: "", countOf5OrLess: 0, countOf5OrMore: 0, totalAmount: 0 };
// console.log("InitialState => " + JSON.stringify(initialTripBookingState));

export const tripBookingSlice = createSlice({
  name: "tripCart",
  initialState: initialTripBookingState,
  reducers: {
    addToCart(state, action) {
      state.date = action.payload.date;
      state.totalAmount =
        action.payload.price *
        (state.countOf5OrLess + 1 + state.countOf5OrMore);
      // state.countOf5OrLess = action.payload.countOf5OrLess;
      // state.countOf5OrMore = action.payload.countOf5OrMore;
    },
    incrementQuantity(state, action) {
      // if (state.date === "" || state.date === action.payload.date) {
      state.countOf5OrLess += 1;
      // state.totalAmount = action.payload.price * state.countOf5OrLess;
      // }
    },
    decrementQuantity(state, action) {
      if (state.countOf5OrLess > 0) {
        state.countOf5OrLess -= 1;
      }
    },
    incrementQuantityFor5plus(state, action) {
      // if (state.date === "" || state.date === action.payload.date) {
      state.countOf5OrMore += 1;
      // state.totalAmount = action.payload.price * state.countOf5OrLess;
      // }
    },
    decrementQuantityFor5plus(state, action) {
      if (state.countOf5OrMore > 0) {
        state.countOf5OrMore -= 1;
      }
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  incrementQuantityFor5plus,
  decrementQuantityFor5plus,
} = tripBookingSlice.actions;

export default tripBookingSlice.reducer;
