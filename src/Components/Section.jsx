import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section = ({ horses }) => {
  return (
    <div className="landing-page p-8">
      <h2 className="text-5xl font-bold mb-8 text-white">Available Horses</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {horses.map((horse, index) => (
          <motion.div
            key={index}
            className="horse-card p-4 border rounded-lg shadow-lg bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={horse.image}
              alt={horse.name}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{horse.name}</h3>
            <Link to={`/booking/${horse.name}`}>
              <button className="mt-4 px-4 py-2 bg-blue-400 hover:bg-blue-600 text-white rounded-md">
                Book Now
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section;
