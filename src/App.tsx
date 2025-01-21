import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import { FaHome, FaSearch, FaPlusCircle, FaUserAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";

const BottomNavbar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Set active index based on location
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/about":
        setActiveIndex(1);
        break;
      case "/portfolio":
        setActiveIndex(2);
        break;
      case "/contact":
        setActiveIndex(3);
        break;
      default:
        setActiveIndex(0);
    }
  }, [location.pathname]);

  return (
    <div
      className="fixed lg:right-0 lg:top-0 lg:bottom-0 lg:h-screen lg:w-[8vw] bg-customGray shadow-lg z-10 
               mt-6 lg:mt-0 h-[8vh] w-full flex lg:flex-col lg:justify-between lg:bg-primary 
               bottom-0 left-0  lg:left-auto"
    >
     <div className="relative flex lg:flex-col justify-around items-center space-x-16 lg:space-x-0 lg:space-y-20">
  {/* Home Icon */}
  <div className="relative flex flex-col items-center ml-7 lg:ml-0 lg:mt-40 group hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Link to="/" className="relative">
      {/* Icon with bg-secondary */}
      <FaHome className="text-2xl text-gray-500 group-hover:text-secondary transition-colors duration-300" />
      {/* Circular Background */}
      {activeIndex === 0 && (
        <div className="absolute w-10 h-10 border-2 border-secondary rounded-full shadow-lg transition-all duration-300 ease-in-out top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"></div>
      )}
    </Link>
  </div>

  {/* Search Icon */}
  <div className="relative flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Link to="/about" className="relative">
      <FaSearch
        className={`text-2xl ${
          activeIndex === 1 ? "text-secondary" : "text-gray-500"
        } group-hover:text-secondary transition-colors duration-300`}
      />
      {activeIndex === 1 && (
        <div className="absolute w-10 h-10 border-2 border-secondary rounded-full shadow-lg top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out"></div>
      )}
    </Link>
  </div>

  {/* Portfolio Icon */}
  <div className="relative flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Link to="/portfolio" className="relative">
      <MdWork
        className={`text-2xl ${
          activeIndex === 2 ? "text-secondary" : "text-gray-500"
        } group-hover:text-secondary transition-colors duration-300`}
      />
      {activeIndex === 2 && (
        <div className="absolute w-10 h-10 border-2 border-secondary rounded-full shadow-lg top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out"></div>
      )}
    </Link>
  </div>

  {/* Contact Icon */}
  <div className="relative flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Link to="/contact" className="relative">
      <RiMessage3Fill
        className={`text-2xl ${
          activeIndex === 3 ? "text-secondary" : "text-gray-500"
        } group-hover:text-secondary transition-colors duration-300`}
      />
      {activeIndex === 3 && (
        <div className="absolute w-10 h-10 border-2 border-secondary rounded-full shadow-lg top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out"></div>
      )}
    </Link>
  </div>
</div>

    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Bottom Navbar */}
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
