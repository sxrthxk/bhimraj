import Link from "next/link";
import React, { useState } from "react";
import DropDownLink from "./DropDownLink";
import logo from "../assets/logo_compressed.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

const Navbar = () => {
  const [mobileDropDown, setMobileDropDown] = useState(false);
  const [roomDropDown, setRoomDropDown] = useState(false);
  const [featureDropDown, setfeatureDropDown] = useState(false);

  const toggleDropDown = () => {
    setMobileDropDown((x) => !x);
  };

  const featuresDropDownHandler = () => {
    setfeatureDropDown((x) => !x);
  };

  const roomDropDownHandler = () => {
    setRoomDropDown((x) => !x);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between w-full bg-white text-white h-[27.5vh] md:h-[12vh] relative md:sticky top-0 z-50 shadow-lg">
      <Link href="/" passHref>
        <div className="relative w-full md:w-2/12 h-24 md:h-full p-5 flex justify-center bg-black cursor-pointer">
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            alt="Logo"
          />
        </div>
      </Link>
      <div className="w-full text-black hidden md:flex justify-evenly items-center uppercase px-12">
        <Link href="/" passHref>
          <span className="hover:text-khaki transition-all cursor-pointer">
            home
          </span>
        </Link>
        <Link href="/about-us" passHref>
          <span className="hover:text-khaki transition-all cursor-pointer">
            about us
          </span>
        </Link>
        <DropDownLink href="/rooms" linkText="Rooms">
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
              <Link href={"/gallery"}>gallery</Link>
            </span>
          </div>
        </DropDownLink>
        <Link href="/contact" passHref>
          <span className="hover:text-khaki transition-all cursor-pointer">
            contact
          </span>
        </Link>
      </div>
      <BookNow />
      <button className="m-auto mb-4 block md:hidden" onClick={toggleDropDown}>
        <FaBars className="fill-current text-black w-6 h-6 mb-3" />
      </button>
      {mobileDropDown && (
        <div
          className={
            "bg-black text-center absolute top-full w-full overflow-hidden ease-out transition-all h-auto uppercase"
          }
        >
          <ul className=" flex flex-col justify-evenly items-start h-full space-y-3 p-3 w-full">
            <Link href="/" passHref>
              <span className="flex justify-between w-full">Home</span>
            </Link>

            <Link href="/about-us" passHref>
              <span className="flex justify-between w-full">About Us</span>
            </Link>
            <span
              className={`flex justify-between w-full ${
                roomDropDown ? "text-khaki" : "text-white"
              }`}
            >
              <Link href={"/rooms"}>Rooms</Link>
              <FaCaretRight onClick={roomDropDownHandler} />
            </span>
            {roomDropDown && (
              <span className="pl-4 w-full text-left">
                <ul className="flex flex-col space-y-3">
                  <Link href="/rooms/deluxe">Deluxe</Link>
                  <Link href="/rooms/suite">Suite</Link>
                  <Link href="/rooms/executive">Executive</Link>
                </ul>
              </span>
            )}
            <span
              onClick={featuresDropDownHandler}
              className="flex justify-between w-full"
            >
              <div
                className={`${featureDropDown ? "text-khaki" : "text-white"}`}
              >
                Features
              </div>
              <FaCaretRight />
            </span>
            {featureDropDown && (
              <span className="pl-4 w-full text-left">
                <ul className="flex flex-col space-y-3">
                  <Link href="/#services">Our Services</Link>
                  <Link href="/events">Events</Link>
                  <Link href="/blogs">Blogs</Link>
                </ul>
              </span>
            )}
            <Link href="/contact" passHref>
              <span className="flex justify-between w-full">Contact</span>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

export const BookNow = () => {
  return (
    <Link href={"/contact"} passHref>
      <div className="bg-khaki hover:bg-black p-3 md:p-6 transition-all flex justify-center items-center min-w-max px-12 cursor-pointer w-2/12 m-auto my-3 md:my-0">
        <h1>BOOK NOW</h1>
      </div>
    </Link>
  );
};
