import React from "react";
import img1 from "../assets/Bi.png";
import img2 from "../assets/Bi.png";
import img3 from "../assets/Bi.png";
import img4 from "../assets/Bi.png";
import img5 from "../assets/Bi.png";
import img6 from "../assets/Bi.png";

const Portfolio = () => {
  // Define an array of image sources
  const images = [img1, img2, img3, img4 , img5, img6];

  return (
    <div className="bg-primary h-auto w-full ">
      {/* Section Title */}
      <div className="relative text-center pt-10">
        <p className="absolute text-[8vh] text-customGray font-back top-[80%] left-[20%] transform -translate-x-[50%] -translate-y-[50%] whitespace-nowrap z-0 sm:top-[50%] sm:left-[50%]">
          WORKS
        </p>

        <p className="relative text-[5vh] font-black z-10 mr-[25vh] sm:mr-0 sm:text-center">
          <span className="text-white font-mono sm:text-[8vh]">MY</span>
          <span className="text-secondary px-1 font-mono sm:text-[8vh]">
            PORTFOLIO
          </span>
        </p>
      </div>

      {/* Image Grid */} 
      <div className="w-full h-auto px-3 md:px-9 lg:px-36 lg:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[30vh] bg-orange-600 relative rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`A beautiful scenery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

