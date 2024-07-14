import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBookingDetails, confirmBooking } from "../features/bookingSlice";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSnackbar } from "notistack";

const BookingForm = () => {
  const { horseName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [nameError, setNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [formDetails, setFormDetails] = useState({
    horse: horseName || "",
    date: new Date(),
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (horseName) {
      setFormDetails((prevDetails) => ({ ...prevDetails, horse: horseName }));
    }
  }, [horseName]);

  const handleChange = (name, value) => {
    if (name === "phone" && (value.length !== 10 || !/^\d+$/.test(value))) {
      setPhoneNumberError(true); // Set state to show error message
    } else {
      setPhoneNumberError(false); // Reset state if valid phone number
    }
    setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormDetails((prevDetails) => ({ ...prevDetails, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formDetails.phone.length !== 10 || !/^\d+$/.test(formDetails.phone)) {
      setPhoneNumberError(true); // Set state to show error message
      return;
    }

    if (formDetails.name.length === 0 || formDetails.name.length < 4) {
      setNameError(true);
      return;
    }

    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regex.test(formDetails.email)) {
      setMailError(true);
      return;
    }

    dispatch(
      setBookingDetails({
        ...formDetails,
        date: formDetails.date,
      })
    );
    dispatch(confirmBooking());
    navigate(`/booking/${formDetails.horse}/confirmation`);
    enqueueSnackbar("Booking is Confirmed😃", {
      variant: "success",
    });

    // const subject = "Booking Confirmation";
    // const body = `Hello ${formDetails.name},\n\nYour booking for a ride with ${
    //   formDetails.horse
    // } on ${formDetails.date.toDateString()} at ${
    //   formDetails.time
    // } has been confirmed.\n\nThank you,\nCEO of Horse Riding Booking Team.\nMohammad Tarique`;

    // const mailtoLink = `mailto:${
    //   formDetails.email
    // }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // window.location.href = mailtoLink;
  };

  return (
    <div className="mx-1 py-10">
      <motion.div
        className="booking-form p-4 border rounded-lg shadow-lg max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8">Book Your Ride</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input value={horseName} disabled className="p-2 border rounded" />
          <DatePicker
            selected={formDetails.date}
            onChange={handleDateChange}
            minDate={new Date()}
            required
            className="p-2 border rounded text-lg"
            dateFormat="dd-MM-yyyy"
          />
          <select
            name="time"
            value={formDetails.time}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            className="p-2 border rounded"
          >
            <option value="">Select a Time Slot</option>
            {[...Array(10).keys()].map((i) => {
              const time = `${3 + i}:00 PM`;
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="name"
            value={formDetails.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Your Name"
            className="p-2 border rounded"
          />
          {nameError && (
            <p className="text-red-500 text-sm">Kindly Enter valid Name.</p>
          )}
          <input
            type="email"
            name="email"
            value={formDetails.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Your Email"
            className="p-2 border rounded"
          />
          {mailError && (
            <p className="text-red-500 text-sm">Kindly Enter valid email Id.</p>
          )}
          <input
            type="tel"
            name="phone"
            value={formDetails.phone}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Your Phone Number"
            className="p-2 border rounded"
          />
          {phoneNumberError && (
            <p className="text-red-500 text-sm">
              Phone number must be 10 digits long.
            </p>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingForm;

// import { useDispatch } from "react-redux";
// import { setBookingDetails, confirmBooking } from "../features/bookingSlice";
// import { motion } from "framer-motion";
// import { Link, useParams } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const BookingForm = () => {
//   const { horseName } = useParams();
//   const dispatch = useDispatch();
//   const [formDetails, setFormDetails] = useState({
//     horse: horseName || "",
//     date: new Date(), // Initialize date with current date
//     time: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     if (horseName) {
//       setFormDetails((prevDetails) => ({ ...prevDetails, horse: horseName }));
//     }
//   }, [horseName]);

//   const handleChange = (name, value) => {
//     setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleDateChange = (date) => {
//     setFormDetails((prevDetails) => ({ ...prevDetails, date }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setBookingDetails(formDetails));
//     dispatch(confirmBooking());
//   };

//   // Function to disable dates prior to today
//   const isDateDisabled = (date) => {
//     return date < new Date();
//   };

//   return (
//     <motion.div
//       className="booking-form p-4 border rounded-lg shadow-lg max-w-xl mx-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <h2 className="text-4xl font-bold mb-8">Book Your Ride</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
//         {/* <select
//           name="horse"
//           value={formDetails.horse}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           required
//           className="p-2 border rounded"
//         >
//           <option value="">Select a Horse</option>
//           <option value="American Quarter">American Quarter</option>
//           <option value="Andalusian">Andalusian</option>
//           <option value="Appaloosa">Appaloosa</option>
//           <option value="Arabian">Arabian</option>
//           <option value="Belgian">Belgian</option>
//           <option value="Colt">Colt</option>
//           <option value="Holsteiner">Holsteiner</option>
//           <option value="Iberian">Iberian</option>
//           <option value="Lusitano">Lusitano</option>
//           <option value="Morgan">Morgan</option>
//           <option value="Pasu Fino">Pasu Fino</option>
//           <option value="Percheron">Percheron</option>
//         </select> */}
//         <input value={horseName} disabled className="p-2 border rounded" />
//         <DatePicker
//           selected={formDetails.date}
//           onChange={handleDateChange}
//           minDate={new Date()}
//           required
//           className="p-2 border rounded text-lg" // Increased text size
//           dateFormat="dd-MM-yyyy"
//         />
//         <select
//           name="time"
//           value={formDetails.time}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           required
//           className="p-2 border rounded"
//         >
//           <option value="">Select a Time Slot</option>
//           {[...Array(10).keys()].map((i) => {
//             const time = `${3 + i}:00 PM`;
//             return (
//               <option key={time} value={time}>
//                 {time}
//               </option>
//             );
//           })}
//         </select>
//         <input
//           type="text"
//           name="name"
//           value={formDetails.name}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           required
//           placeholder="Your Name"
//           className="p-2 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formDetails.email}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           required
//           placeholder="Your Email"
//           className="p-2 border rounded"
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formDetails.phone}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           required
//           placeholder="Your Phone Number"
//           className="p-2 border rounded"
//         />
//         <Link
//           to={`/booking/${formDetails.horse}/confirmation`}
//           className="block w-full"
//         >
//           <button
//             type="submit"
//             className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
//           >
//             Submit
//           </button>
//         </Link>
//       </form>
//     </motion.div>
//   );
// };

// export default BookingForm;
