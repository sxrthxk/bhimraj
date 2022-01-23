import React from "react";
import Navbar from "../lib/components/Navbar";

import Image from "next/image";

import img1 from "../lib/assets/carousel/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";

import service1 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 3.54.18 PM (1).jpeg";
import service2 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 3.54.19 PM.jpeg";
import service3 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 4.21.59 PM.jpeg";

import HeroCarousel from "../lib/components/HeroCarousel";
import FancyText from "../lib/components/FancyText";
import Footer from "../lib/components/Footer";
import RoomCard from "../lib/components/RoomCard";
import Layout from "../lib/components/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroCarousel />
      <section className="text-center w-full py-12 px-6 md:px-0">
        <div>
          <header className="relative">
            <FancyText bgText="Welcome">
              WONDERFUL HOTEL IN THE HEART OF ATHENS, GREECE.
            </FancyText>
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
        {/* <div className="w-3/4 m-auto flex space-evenly gap-12 my-12">
          <div className="w-full relative min-h-[30rem]">
            <Image
              placeholder="blur"
              src={img1}
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image
              placeholder="blur"
              src={img1}
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image
              placeholder="blur"
              src={img1}
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>
        </div> */}
      </section>
      <section className="bg-[#f5f5f5] text-center w-full py-12">
        <div>
          <header className="relative">
            <FancyText bgText="Luxury" className="text-5xl mt-12">
              Rooms
            </FancyText>
          </header>
          <RoomCard
            link="/rooms/suite/"
            roomData={{
              caption: "A quality room with sea or mountain view",
              description:
                "Luxury Single Room Art Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors.",
              rate: "400/Night",
              title: "LUXURY DOUBLE ROOM SUITE",
            }}
            src={img1}
          />
        </div>
      </section>
      <section
        className="bg-white text-center w-full py-12 pt-28"
        id="services"
      >
        <header className="relative">
          <FancyText bgText="Awesome" className="my-10 text-5xl">
            Services
          </FancyText>
        </header>
        <div className="w-[90%] m-auto grid gap-12 my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="w-full relative min-h-[30rem]">
            <Image
              placeholder="blur"
              src={service1}
              objectFit="cover"
              layout="fill"
            ></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Restaurant
            </a>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image
              placeholder="blur"
              src={service2}
              objectFit="cover"
              layout="fill"
            ></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Spa
            </a>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image
              placeholder="blur"
              src={service3}
              objectFit="cover"
              layout="fill"
            ></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Pool
            </a>
          </div>
          <div className="w-full relative min-h-[30rem]">
            <Image
              placeholder="blur"
              src={service1}
              objectFit="cover"
              layout="fill"
            ></Image>
            <a
              href="#"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg"
            >
              Activities
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
