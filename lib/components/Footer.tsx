import React from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="m-auto w-3/4 flex justify-around px-12">
        <div className="space-y-4">
          <h1 className="font-semibold text-xl uppercase">Contact us</h1>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="font-semibold text-xl uppercase">QUICK LINKS</h1>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px bg-gray-700 my-12"></div>
      <div className="w-1/5 m-auto flex justify-around">
        <AiOutlineInstagram className="w-8 h-8 fill-current text-khaki" />
        <FaFacebookF className="w-8 h-8 fill-current text-khaki" />
      </div>
    </footer>
  );
};

export default Footer;
