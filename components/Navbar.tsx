import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between w-full bg-white text-white h-[10vh] sticky top-0 z-10">
      <div className="bg-black p-6 flex justify-center items-center min-w-max px-12">
        <h1>HOTEL LUX</h1>
      </div>
      <div className="w-full text-black flex justify-evenly items-center uppercase">
        <a href="#" className="hover:text-khaki transition-all">
          Rooms
        </a>
        <a href="#" className="hover:text-khaki transition-all">
          Services
        </a>
        <a href="#" className="hover:text-khaki transition-all">
          banquet
        </a>
        <a href="#" className="hover:text-khaki transition-all">
          Contact
        </a>
      </div>
      <div className="bg-khaki hover:bg-black p-6 transition-all flex justify-center items-center min-w-max px-12">
        <h1>BOOK NOW</h1>
      </div>
    </header>
  );
};

export default Navbar;
