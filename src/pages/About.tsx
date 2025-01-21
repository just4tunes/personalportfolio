import React from "react";
import img1 from "../assets/WhatsApp Image 2025-01-11 at 12.21.20.jpeg";
import ReusableButton from "../components/ReusableButton.tsx";

const About = () => {
  return (
    <div className="w-full bg-primary h-[200vh]">
      <div class="relative text-center pt-10">
        <p class="absolute text-[8vh] text-customGray  font-back  top-[80%] left-[20%] transform -translate-x-[50%] -translate-y-[50%] whitespace-nowrap z-0">
          RESUME
        </p>

        <p class="relative text-[5vh] font-black z-10 mr-[25vh]">
          <span class="text-white font-mono">ABOUT</span>
          <span class=" text-secondary px-1 font-mono">ME</span>
        </p>
      </div>

      <p className="mt-10 text-[4vh] pl-2 font-bold text-white font-mono">
        PERSONAL INFO{" "}
      </p>

      <div className="items-center justify-center  flex ">
        <div className="w-52 h-52 rounded-full overflow-hidden mt-8  ">
          <img
            className="w-full h-full object-cover lg:w-[80%]   "
            src={img1}
            alt="Profile"
          />
        </div>
      </div>

      <div>

           {/* texts */}
      <div className=" flex gap-12 mt-7">
        <div className="ml-2">
          <h1 className="text-white font-mono text-[2.5vh]">First Name:</h1>
          <p className="text-customGray2 text-[2.5vh]">Fortune</p>
        </div>
        <div>
          <h1 className="text-white font-mono text-[2.5vh]">Last Name:</h1>
          <p className="text-customGray2 text-[2.5vh]">Ken-Osuh</p>
        </div>
      </div>
       {/* texts */}
       <div className=" flex gap-[17vh] mt-7">
        <div className="ml-2">
          <h1 className="text-white font-mono">Age:</h1>
          <p className="text-customGray2">21</p>
        </div>
        <div>
          <h1 className="text-white font-mono">Nationality:</h1>
          <p className="text-customGray2">Nigerian</p>
        </div>
      </div>
       {/* texts */}
       <div className=" flex gap-[9vh] mt-7">
        <div className="ml-2">
          <h1 className="text-white font-mono">Freelance:</h1>
          <p className="text-green-500">Available</p>
        </div>
        <div>
          <h1 className="text-white font-mono">Address:</h1>
          <p className="text-customGray2">Glim Estate connerstone</p>
        </div>
      </div>
       {/* texts */}
       <div className=" flex gap-12 mt-7">
        <div className="ml-2">
          <h1 className="text-white font-mono">Phone:</h1>
          <p className="text-customGray2">09041329588</p>
        </div>
        <div>
          <h1 className="text-white font-mono">Email:</h1>
          <p className="text-customGray2">fortuneosuh04@gmail.com</p>
        </div>

        
      </div>




      </div>

      <div className="w-[60%] pt-8 ml-2">
      <ReusableButton initialText="DOWNLOAD CV" doneText="COMPLETED" />

      </div>

   
     
    

    </div>
  );
};

export default About;
