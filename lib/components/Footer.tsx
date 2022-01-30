import React from "react";

import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Footer = () => {

  const urls = {
    fb: "https://www.facebook.com",
    address: "https://www.google.com/maps",
    phone: "tel:+911234567890",
    ig: "https://www.instagram.com"
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="m-auto w-3/4 flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-around px-12">
        <div className="space-y-4">
          <h1 className="font-semibold text-xl uppercase">Contact us</h1>
          <ul className="space-y-2">
            <li>
              <a href={urls.address} className="flex items-center space-x-3 hover:text-khaki transition-all" target="_blank" rel="noreferrer">
                <GoLocation />
                <span>123, XYZ, ABC</span>
              </a>
            </li>
            <li>
              <a href={urls.phone} className="flex items-center space-x-3 hover:text-khaki transition-all" target="_blank" rel="noreferrer">
                <AiOutlinePhone />
                <span>Phone number</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="font-semibold text-xl uppercase">QUICK LINKS</h1>
          <ul className="space-y-2">
          <li>
              <a href={urls.fb} className="flex items-center space-x-3 hover:text-khaki transition-all" target="_blank" rel="noreferrer">
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href={urls.ig} className="flex items-center space-x-3 hover:text-khaki transition-all" target="_blank" rel="noreferrer">
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px bg-gray-700 my-12"></div>
      <div className="w-3/5 md:w-1/5 m-auto flex justify-around">
        <a href={urls.fb} target="_blank" rel="noreferrer">
        <AiOutlineInstagram className="w-8 h-8 fill-current text-khaki" />
        </a>
        <a href={urls.ig} target="_blank" rel="noreferrer">
        <FaFacebookF className="w-8 h-8 fill-current text-khaki" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
