import React, { useState } from "react";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { PiCubeFill } from "react-icons/pi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      {/* Logo and Navigation Links */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <div className="flex flex-row items-center">
          <PiCubeFill className="my-auto transform rotate-[-118deg] text-2xl" />
          <span className="ml-1 text-lg font-bold">Cloudhub</span>
        </div>

        {/* Large screen (lg and above) Navigation Links */}
        <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-1">
            <a href="#" className="hover:text-black">
              Product
            </a>
            <IoIosArrowDown className="my-auto" />
          </div>
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black">
            Shop
          </a>
          <a href="#" className="hover:text-black">
            Pages
          </a>
          <a href="#" className="hover:text-black">
            Integrations
          </a>
          <a href="#" className="hover:text-black">
            Developers
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex space-x-4">
        <button className="text-sm font-medium text-gray-700 hover:text-black">
          Login
        </button>
        <button className="flex justify-center items-center px-5 py-2.5 gap-1 w-32 h-11 bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white text-sm font-medium rounded-full hover:opacity-90">
          Start for free
        </button>
      </div>

      {/* Hamburger Menu Button (visible on medium and small screens) */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Menu (visible only on medium and small screens) */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 lg:hidden">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Product
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Integrations
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Developers
          </a>
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            Login
          </button>
          <button className="flex justify-center items-center px-5 py-2.5 gap-1 w-full bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white text-sm font-medium rounded-full hover:opacity-90">
            Start for free
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
