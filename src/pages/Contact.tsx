import React from "react";
import ReusableButton from "../components/ReusableButton.tsx";
import { FaAddressCard } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full h-[200vh] bg-primary">
      <div className="relative text-center pt-10">
        <p className="absolute text-[8vh] text-customGray font-black top-[80%] left-[20%] transform -translate-x-[50%] -translate-y-[50%] whitespace-nowrap z-0 sm:top-[50%] sm:left-[50%]">
          GET IN TOUCH
        </p>

        <p className="relative text-[3.8vh] font-black z-10 mr-[25vh] sm:mr-0 sm:text-center">
          <span className="text-white sm:text-[8vh] font-black">GET</span>
          <span className="text-secondary px-1 sm:text-[8vh] font-black">
            IN TOUCH
          </span>
        </p>
      </div>


      <div className="lg:flex ">


      <div className="h-auto w-full mt-16 px-3 lg:w-[40%] lg:ml-8">
        <h1 className="text-[3vh] text-white font-bold">DON'T BE SHY!</h1>
        <p className="text-white font-thin text-md mt-4">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.{" "}
        </p>

        <div className="w-full h-[40vh] ">
          <div className="flex gap-3 mt-5">
            <FaAddressCard size={40} className="text-secondary" />

            <div className="">
              <h1 className="text-white text-sm">ADDRESS POINT</h1>
              <p className="text-gray-600">
                123 Stree New York City , United States Of America 750065.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <FaAddressCard size={40} className="text-secondary" />

            <div className="">
              <h1 className="text-white text-sm">MAIL ME</h1>
              <p className="text-gray-600">
              steve@mail.com
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <FaAddressCard size={40} className="text-secondary" />

            <div className="">
              <h1 className="text-white text-sm">CALL ME</h1>
              <p className="text-gray-600">
              +216 21 184 010
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-12 px-4 lg:w-[50%]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="subject" className="text-white font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className="p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="text-white font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Enter your message"
              className="p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex ">
            <ReusableButton initialText=" SEND MESSAGE" doneText="COMPLETED" />
          </div>
        </form>
      </div>


      </div>

     
    </div>
  );
};

export default Contact;
