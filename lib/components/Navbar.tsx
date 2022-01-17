import Link from "next/link";
import React from "react";
import DropDownLink from "./DropDownLink";

const Navbar = () => {
  return (
    <header className="flex justify-between w-full bg-white text-white h-[10vh] sticky top-0 z-50">
      <div className="bg-black p-6 flex justify-center items-center min-w-max px-12">
        <h1>HOTEL LUX</h1>
      </div>
      <div className="w-full text-black flex justify-evenly items-center uppercase px-12">
        <Link href="/">
          <span className="hover:text-khaki transition-all cursor-pointer">
            home
          </span>
        </Link>
        <Link href="/about-us">
          <span className="hover:text-khaki transition-all cursor-pointer">
            about us
          </span>
        </Link>
        <DropDownLink href="#" linkText="Rooms">
          <div className="flex flex-col text-gray-400 space-y-2 font-semibold">
            <span className="hover:text-khaki transition-all">
              <Link href={"/rooms/suite"}>suite</Link>
            </span>
            <span className="hover:text-khaki transition-all">
              <Link href={"/rooms/executive"}>executive</Link>
            </span>
            <span className="hover:text-khaki transition-all">
              <Link href={"/rooms/deluxe"}>deluxe</Link>
            </span>
          </div>
        </DropDownLink>

        <DropDownLink href="#" linkText="Features">
          <div className="flex flex-col text-gray-400 space-y-2 font-semibold">
            <span className="hover:text-khaki transition-all">
              <Link href={"/#services"}>our services</Link>
            </span>
            <span className="hover:text-khaki transition-all">
              <Link href={"/events"}>events</Link>
            </span>
            <span className="hover:text-khaki transition-all">
              <Link href={"/blogs"}>blogs</Link>
            </span>
          </div>
        </DropDownLink>
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
