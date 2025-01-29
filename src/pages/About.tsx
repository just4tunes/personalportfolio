import React from "react";
import img1 from "../assets/WhatsApp Image 2025-01-11 at 12.21.20.jpeg";
import ReusableButton from "../components/ReusableButton.tsx";
import Experience from "../components/Experience.tsx";
import Skills from "../components/Skills.tsx";

const About = () => {
  return (
    <div className="w-full bg-primary h-auto]">
    <div className="relative text-center pt-10">
        <p className="absolute text-[8vh] text-customGray font-black top-[80%] left-[20%] transform -translate-x-[50%] -translate-y-[50%] whitespace-nowrap z-0 sm:top-[50%] sm:left-[50%]">
         RESUME
        </p>

        <p className="relative text-[3.8vh] font-black z-10 mr-[25vh] sm:mr-0 sm:text-center">
          <span className="text-white sm:text-[8vh] font-black">ABOUT</span>
          <span className="text-secondary px-1 sm:text-[8vh] font-black">
             ME 
          </span>
        </p>
      </div>

      <p className="mt-10 text-[4vh] pl-2 font-bold text-white  lg:ml-2 xl:ml-[20vh]">
        PERSONAL INFO{" "}
      </p>

      <div className="items-center justify-center flex sm:hidden ">
        <div className="w-52 h-52 rounded-full overflow-hidden mt-8">
          <img
            className="w-full h-full object-cover block sm:hidden"
            src={img1}
            alt="Profile"
          />
        </div>
      </div>

      <div className="lg:flex lg:px-3 xl:px-36">
  {/* Left Section */}
  <div className="lg:w-[50%]">
    {/* Text Rows */}
    <div className="flex gap-12 mt-7 sm:gap-15">
      <div className="ml-2 sm:flex sm:gap-3">
        <h1 className="text-white  text-[2.5vh]">First Name:</h1>
        <p className="text-customGray2 text-[2.5vh]">Fortune</p>
      </div>
      <div className="sm:flex sm:gap-3">
        <h1 className="text-white  text-[2.5vh]">Last Name:</h1>
        <p className="text-customGray2 text-[2.5vh]">Ken-Osuh</p>
      </div>
    </div>
    {/* Second Row */}
    <div className="flex gap-[15.4vh] mt-7 sm:gap-[15.2vh] lg:gap-[21.2vh]">
      <div className="ml-2 sm:flex sm:gap-3">
        <h1 className="text-white  text-[2.5vh]">Age:</h1>
        <p className="text-customGray2 text-[2.5vh]">21</p>
      </div>
      <div className="sm:flex">
        <h1 className="text-white  text-[2.5vh] sm:ml-[6vh] lg:ml-0">
          Nationality:
        </h1>
        <p className="text-customGray2 text-[2.5vh]">Nigerian</p>
      </div>
    </div>
    {/* Third Row */}
    <div className="flex gap-[7vh] mt-7">
      <div className="ml-2 sm:flex">
        <h1 className="text-white  text-[2.5vh]">Freelance:</h1>
        <p className="text-green-500 text-[2.5vh]">Available</p>
      </div>
      <div className="sm:flex">
        <h1 className="text-white text-[2.5vh] sm:ml-1">Address:</h1>
        <p className="text-customGray2 text-[2.5vh]">
          Glim Estate connerstone
        </p>
      </div>
    </div>
    {/* Fourth Row */}
    <div className="flex gap-12 mt-7">
      <div className="ml-2 sm:flex">
        <h1 className="text-white  text-[2.5vh]">Phone:</h1>
        <p className="text-customGray2 text-[2.5vh]">09041329588</p>
      </div>
      <div className="sm:flex">
        <h1 className="text-white  text-[2.5vh] sm:ml-4">Email:</h1>
        <p className="text-customGray2 max-w-10 text-[2.5vh]">
          fortuneosuh0
        </p>
      </div>
    </div>

    {/* Button */}
    <div className="w-[60%] pt-8 ml-2">
      <ReusableButton initialText=" View more" doneText="COMPLETED" />
    </div>
  </div>

  {/* Right Section */}
  <div className="lg:w-[50%] ">
    <Experience />
  </div>
</div>


      <div className=" h-auto md:h-auto w-full">
        <Skills />
      </div>
    </div>
  );
};

export default About;
