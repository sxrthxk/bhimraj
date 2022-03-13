import React from "react";

import Image from "next/image";

import img1 from "../lib/assets/rooms/suite/photo_2022-01-17_15-37-37.jpg";

import service1 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 3.54.18 PM (1).jpeg";
import service2 from "../lib/assets/services/WhatsApp Image 2022-01-11 at 3.54.19 PM.jpeg";
import service3 from "../lib/assets/services/br pool.jpg";
import service4 from "../lib/assets/services/xuanming-U5epRU6sY_A-unsplash.jpg";

import HeroCarousel from "../lib/components/HeroCarousel";
import FancyText from "../lib/components/FancyText";
import RoomCard from "../lib/components/RoomCard";
import Layout from "../lib/components/Layout";
import Head from "next/head";
import Animate from "../lib/components/Animate";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <HeroCarousel />
      {
        <Animate animateIn="animate__fadeIn">
          <section className="text-center w-full py-12 px-6 md:px-0">
            <div>
              <header className="relative">
                <FancyText bgText="Welcome">
                  Wonderful hotel in the heart of India.
                </FancyText>
              </header>
              <p className="max-w-lg text-center px-4 m-auto my-8 text-base">
                BR Resort is an oasis in the heart of India, Madhya Pradesh.
                Here the traditional art of hospitality complements the
                legendary passion of service, creating a unique living
                experience. Located on Bhopal - Indore highway covered with lush
                green lawns and hills. Enjoy a comfortable stay in our Luxury
                Rooms.
              </p>
            </div>
          </section>
        </Animate>
      }
      <Animate animateIn="animate__fadeIn">
        <section
          className="text-center w-full py-12 bg-[#f5f5f5] "
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
                alt="Restaurant Image"
              ></Image>
              <a
                href="#"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg z-[1]"
              >
                Restaurant
              </a>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            </div>

            <div className="w-full relative min-h-[30rem]">
              <Image
                placeholder="blur"
                src={service2}
                objectFit="cover"
                layout="fill"
                alt="Spa Image"
              ></Image>
              <a
                href="#"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg z-[1]"
              >
                Spa
              </a>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            </div>
            <div className="w-full relative min-h-[30rem]">
              <Image
                placeholder="blur"
                src={service3}
                objectFit="cover"
                layout="fill"
                alt="Pool Image"
              ></Image>
              <a
                href="#"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg z-[1]"
              >
                Pool
              </a>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            </div>
            <div className="w-full relative min-h-[30rem]">
              <Image
                placeholder="blur"
                src={service4}
                objectFit="cover"
                layout="fill"
                alt="Activities Image"
              ></Image>
              <a
                href="#"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-semibold text-xl drop-shadow-lg z-[1]"
              >
                Activities
              </a>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            </div>
          </div>
        </section>
      </Animate>
      <Animate animateIn="animate__fadeIn">
        <section className="text-center w-full py-12">
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
                  "Luxury Suite Room - Luxury Suite Room has a comfortable king size bed, a separate sitting room, separate desk and bathroom with walk-in rain dance shower.",
                rate: "₹3800/Night",
                title: "LUXURY SUITE ROOM",
              }}
              src={img1}
              learnMore={false}
            />
            <Link href={"/rooms"} passHref>
              <span className="flex items-center w-fit m-auto font-sans text-lg space-x-3 cursor-pointer p-3 bg-khaki hover:bg-black text-white  rounded-sm transition-all">
                <span>View More</span>
                <FaChevronRight />
              </span>
            </Link>
          </div>
        </section>
      </Animate>
    </Layout>
  );
};

export default Home;
