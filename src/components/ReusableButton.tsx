import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ReusableButton = ({ initialText, doneText, className }) => {
  // State to toggle the button's animation
  const [isActive, setIsActive] = useState(false);

  // Toggle button state
  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="mr-[6vh] mt-4">
      <button
        onClick={toggleButton}
        className={`relative inline-flex items-center justify-center w-auto h-12 rounded-full overflow-hidden transition-all duration-300 border border-secondary ${className}`}
      >
        {/* Filler animation (Right to Left) */}
        <div
          className={`absolute top-0 right-0 h-full bg-secondary transition-all duration-700 ease-in-out ${
            isActive ? "w-full" : "w-0"
          }`}
        ></div>

        {/* Content inside the button */}
        <div className="relative flex items-center justify-center w-full h-full z-10">
          {/* Animated arrow */}
          <div
            className={`absolute right-0 top-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center transition-all duration-300`}
          >
            <FaArrowRight className="text-white text-xl" />
          </div>

          {/* Text when inactive */}
          <span
            className={`text-white transition-opacity duration-300 text-[2.2vh] ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
          >
            {initialText}
          </span>

          {/* Text when active */}
          <span
            className={`text-white font-semibold transition-opacity duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {doneText}
          </span>
        </div>
      </button>
    </div>
  );
};

export default ReusableButton;

