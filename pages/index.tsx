import React from "react";
import Navbar from "../lib/components/Navbar";

import Image from "next/image";

import img1 from "../lib/assets/carousel/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";
import img2 from "../lib/assets/carousel/WhatsApp Image 2022-01-11 at 4.54.23 PM.jpeg";

import service1 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 3.54.18 PM (1).jpeg"
import service2 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 3.54.19 PM.jpeg"
import service3 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 4.21.59 PM.jpeg"

import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[90vh] w-full">
        <Image placeholder="blur" src={img2} layout="fill" objectFit="cover" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-3xl drop-shadow-2xl">
          FINEST HOTEL COLLECTION
        </h1>
      </div>
      <section className="text-center w-full py-12">
        <div>
          <header className="relative">
            <h1 className="text-4xl max-w-lg font-thin m-auto">
              WONDERFUL HOTEL IN THE HEART OF ATHENS, GREECE.
            </h1>
          </header>
          <p className="max-w-lg text-center m-auto my-8 text-base">
            Hotel LUX is an oasis in the heart of the historic and business
            center of Athens. Here the Greek art of hospitality complements the
            legendary passion for service of the Spanish chain, creating a
            unique living experience. Located in the heart of Athens, only 200 m
            away from the central metro station. Enjoy a comfortable stay in our
            Luxury Room.
          </p>
        </div>
        <a
          href="#"
          className="m-auto text-khaki text-xl hover:text-black transition-all"
        >
          View our Services
        </a>
        <div className="w-3/4 m-auto flex space-evenly gap-12 my-12">
          <div className="w-full relative min-h-[30rem]">
            <Image placeholder="blur" src={img1} objectFit="cover" layout="fill"></Image>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image placeholder="blur" src={img1} objectFit="cover" layout="fill"></Image>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image placeholder="blur" src={img1} objectFit="cover" layout="fill"></Image>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] text-center w-full py-12">
        <div>
          <header className="relative">
            <h1 className="text-6xl max-w-lg font-thin m-auto">ROOMS</h1>
          </header>
          <div className="m-auto w-4/5 bg-white flex my-12 h-[60vh]">
            <div className="w-1/2 relative">
              <Image placeholder="blur" src={img1} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col items-start justify-evenly w-1/2 px-20 text-left">
              <header className="">
                <h1 className="text-4xl m-auto">LUXURY DOUBLE ROOM SUITE</h1>
                <span className="text-lg italic text-gray-400">
                  A quality room with sea or mountain view
                </span>
              </header>
              <p>
                Luxury Single Room Art Suite has a comfortable queen size or
                twin bed, a sitting area, separate desk and bathroom with
                walk-in rain dance shower or a bath and shower and modern art
                and neutral colors.
              </p>
              <div className="flex justify-between w-full">
                <span className="text-khaki text-lg">400/Night</span>
                <a
                  href=""
                  className="text-black hover:text-khaki transition-all text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-center w-full py-12">
        <header className="relative">
          <h1 className="text-6xl max-w-lg font-thin m-auto uppercase">
            Services
          </h1>
        </header>
        <div className="w-[90%] m-auto flex space-evenly gap-12 my-12">
          <div className="w-full relative min-h-[30rem]">
            <Image placeholder="blur" src={service1} objectFit="cover" layout="fill"></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Restaurant
            </a>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image placeholder="blur" src={service2} objectFit="cover" layout="fill"></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Spa
            </a>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image placeholder="blur" src={service3} objectFit="cover" layout="fill"></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Pool
            </a>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image placeholder="blur" src={service1} objectFit="cover" layout="fill"></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Activities
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-12">
        <div className="m-auto w-3/4 flex justify-around px-12">
          <div>
            <h1 className="font-semibold text-xl">ABOUT</h1>
          </div>
          <div className="space-y-4">
            <h1 className="font-semibold text-xl">QUICK LINKS</h1>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      <div className="w-full h-px bg-gray-700 my-12"></div>
      <div className="w-1/4 m-auto flex justify-around">
        <AiOutlineInstagram className="w-8 h-8 fill-current text-khaki"/>
        <AiOutlineTwitter className="w-8 h-8 fill-current text-khaki"/>
        <FaFacebookF className="w-8 h-8 fill-current text-khaki"/>
      </div>
      </footer>
    </div>
  );
};

export default Home;
