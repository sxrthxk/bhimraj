import React from "react";

import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  const urls = {
    fb: "https://www.facebook.com/brrc123/",
    address: "https://goo.gl/maps/6WrPAVfVyLToz69B9",
    phone1: "tel:+918819920202",
    phone2: "tel:+918818880310",
    phone3: "tel:+919343871771",
    ig: "https://www.instagram.com/brresorts/",
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="m-auto w-3/4 flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-around px-12">
        <div className="space-y-4 w-[200px]">
          <h1 className="font-semibold text-xl uppercase">Contact us</h1>
          <ul className="space-y-4">
            <li>
              <a
                href={urls.address}
                className="flex items-center space-x-3 hover:text-khaki transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <GoLocation className="min-w-[1rem] min-h-[1rem]"/>
                <span className="max-w-sm">
                  Indore - Bhopal Highway, Arniya Village near Sonkatch, Dist.
                  Dewas 455118 (M.P.)
                </span>
              </a>
            </li>
            <li>
              <div className="flex items-center space-x-3 ">
                <AiOutlinePhone className="min-w-[1rem] min-h-[1rem]"/>
                <div className="flex flex-col space-y-2">
                <a
                  href={urls.phone1}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-khaki transition-all"
                >
                  88199-20202{" "}
                </a>
                <a
                  href={urls.phone2}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-khaki transition-all"
                >
                  88188-80310{" "}
                </a>
                <a
                  href={urls.phone3}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-khaki transition-all"
                >
                  9343871771
                </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-4 w-[200px]">
          <h1 className="font-semibold text-xl uppercase">QUICK LINKS</h1>
          <ul className="space-y-2">
            <li>
              <a
                href={urls.fb}
                className="flex items-center space-x-3 hover:text-khaki transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="min-h-[1rem] min-w-[1rem]"/>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href={urls.ig}
                className="flex items-center space-x-3 hover:text-khaki transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className="min-h-[1rem] min-w-[1rem]"/>
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
