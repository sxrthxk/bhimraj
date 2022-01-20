import Link from "next/link";
import React, { useState } from "react";
import DropDownLink from "./DropDownLink";
import logo from "../assets/logo_compressed.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const [dropdownHeight, setDropdownHeight] = useState<'h-0' | 'h-48'>('h-0')

  const toggleDropDown = () => {
     dropdownHeight === "h-0" && setDropdownHeight('h-48')
     dropdownHeight === "h-48" && setDropdownHeight('h-0')
  }

  return (
    <header className="flex flex-col md:flex-row justify-between w-full bg-white text-white h-auto md:h-[12vh] relative md:sticky top-0 z-50">
      <Link href="/">
        <div className="relative w-full md:w-2/12 h-24 md:h-full p-5 flex justify-center bg-black cursor-pointer">
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
          />
        </div>
      </Link>
      <div className="w-full text-black hidden md:flex justify-evenly items-center uppercase px-12">
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
        <Link href="/contact">
          <span className="hover:text-khaki transition-all cursor-pointer">
            contact
          </span>
        </Link>
      </div>
      <Link href={"/contact"}>
        <div className="bg-khaki hover:bg-black p-3 md:p-6 transition-all flex justify-center items-center min-w-max px-12 cursor-pointer w-2/12 m-auto my-6 md:my-0">
          <h1>BOOK NOW</h1>
        </div>
      </Link>
      <button className="m-auto mb-6" onClick={toggleDropDown}>
        <FaBars className="fill-current text-black w-6 h-6" />
      </button>
      {true && (
        <div className={"bg-black text-center absolute top-full w-full overflow-hidden ease-out transition-all " + dropdownHeight}>
          <ul className=" flex flex-col justify-evenly items-center h-full">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Rooms</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Events</Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
