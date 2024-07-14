import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { format } from "date-fns";

const BookingConfirmation = () => {
  const booking = useSelector((state) => state.booking);

  //console.log("Booking details:", booking);

  if (!booking.bookingConfirmed) {
    return null;
  }

  const formattedDate = format(new Date(booking.date), "dd-MM-yyyy");

  return (
    <motion.div
      className="booking-confirmation p-8 border shadow-lg bg-white mt-1 overflow-auto"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-lg font-medium">
        Thank you for booking with us,{" "}
        <span className="text-blue-500 cursor-pointer">{booking.name}</span>!
      </p>
      <p className="text-lg font-medium">
        You have booked a ride with{" "}
        <span className="text-blue-500 cursor-pointer">{booking.horse}</span> on{" "}
        <span className="text-blue-500 cursor-pointer">{formattedDate}</span> at{" "}
        <span className="text-blue-500 cursor-pointer">{booking.time}</span>.
      </p>
      <p className="text-lg font-medium">
        A confirmation email has been sent to{" "}
        <span className="text-blue-500 cursor-pointer">{booking.email}</span>.
      </p>
    </motion.div>
  );
};

export default BookingConfirmation;
