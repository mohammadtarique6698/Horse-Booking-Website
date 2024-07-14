import React from "react";

import { TypeAnimation } from "react-type-animation";

import Logo from "../Images/logo.jpg";

const NavBar = () => {
  return (
    <div className="max-w-screen">
      <div className="relative h-auto py-7 px-2">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <img src={Logo} alt="logo" className="w-10 h-10 rounded-full"></img>
            <h1 className="font-bold text-2xl">Horse Booking System</h1>
          </div>

          <div className="flex flex-row gap-4 font-semibold text-center">
            <a
              href="https://my-personal-portfolio-website-beta.vercel.app/"
              target="_blank"
            >
              About Me
            </a>
            <a
              href="mailto:mohammadtarique661998@gmail.com"
              className="text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* TypeAnimation */}
      <div className="bg-white py-10 overflow-auto">
        <TypeAnimation
          sequence={[
            "Welcome to the world of horse ride!!!",
            1000,
            "Saddle up and book your ride!!!",
            1000,
            "From stable to saddle: booking made easy.",
            1000,
          ]}
          wrapper="pre"
          speed={50}
          style={{
            display: "inline-block",
          }}
          repeat={Infinity}
          className="px-5 text-2xl"
        />
      </div>
    </div>
  );
};

export default NavBar;
