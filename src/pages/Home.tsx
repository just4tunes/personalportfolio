import React from "react";
import img1 from "../assets/WhatsApp Image 2025-01-11 at 12.21.20.jpeg";
import SlidingButton from "../components/SlidingButton.tsx";

const Home = () => {
  return (
    <div class="w-full h-[95vh]    bg-primary md:h-[100vh] lg:h-[100vh] lg:bg-[linear-gradient(to_bottom_right,theme(colors.secondary)_35%,theme(colors.primary)_30%)]">
      <div class="px-7 flex flex-col items-center justify-center lg:flex-row ">
        <div className="w-52 h-52 rounded-full overflow-hidden mt-5 lg:w-[40%] lg:h-[80vh] lg:mt-20 2xl:w-[35%]">
          <img
            className="w-full h-full object-cover lg:w-[80%]   "
            src={img1}
            alt="Profile"
          />
        </div>

        <div className="flex flex-col items-center justify-center lg:w-[50%] lg:mt-[6vh] lg:items-start ">
          <h1 class="text-secondary mt-6 text-xl font-black   sm:text-[5vh] lg:mt-14 2xl:text-[6vh]">
            I'M FORTUNE KEN-OSUH
          </h1>
          <p className="text-[3vh] text-white font-black  sm:text-[4vh] sm:pt-2 " >WEB DEVELOPER</p>
          <span className='text-center pt-4 text-white text-[2.4vh] leading-7 sm:text-[3vh] sm:px-2 lg:w-[80%] lg:leading-8 lg:text-left '>
            I'm a Nigerian based front-end web-developer focused on crafting
            clean $ and user-friendly experiences, i am also passionate about
            building excellent software that improves the lives of those around
            me{" "}
          </span>

          <div className='pt-4'>
          <SlidingButton/>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
