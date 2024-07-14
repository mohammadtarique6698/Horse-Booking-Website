import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  horse: "",
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  bookingConfirmed: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
        date: action.payload.date.toISOString(),
        bookingConfirmed: false,
      };
    },
    confirmBooking: (state) => {
      state.bookingConfirmed = true;
    },
    resetBooking: () => initialState,
  },
});

export const { setBookingDetails, confirmBooking, resetBooking } =
  bookingSlice.actions;
export default bookingSlice.reducer;
