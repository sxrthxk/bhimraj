import React from "react";
import Navbar from "../components/Navbar";

import Image from "next/image";

import img1 from "../assets/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";
import img2 from "../assets/WhatsApp Image 2022-01-11 at 4.54.23 PM.jpeg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[90vh] w-full">
        <Image src={img2} layout="fill" objectFit="cover" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-2xl drop-shadow-2xl">
          FINEST HOTEL COLLECTION
        </h1>
      </div>
      <section className="text-center w-full py-12">
        <div>
          <header className="relative">
            <h1 className="text-4xl max-w-lg font-thin m-auto">WONDERFUL HOTEL IN THE HEART OF ATHENS, GREECE.</h1>
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
        <a href="#" className="m-auto text-khaki text-xl hover:text-black transition-all">View our Services</a>
      </section>
    </div>
  );
};

export default Home;
