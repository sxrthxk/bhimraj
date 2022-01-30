import Image from "next/image";
import React from "react";
import Layout from "../lib/components/Layout";
import img1 from "../lib/assets/rooms/hero.jpg";
import Head from "next/head";

const EventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Events</title>
      </Head>
      <section className="my-24 mx-auto max-w-6xl">
        <header>
          <span className="flex items-center">
            <span className="whitespace-nowrap pr-6">January 2023</span>
            <div className="h-px w-full bg-gray-600"></div>
          </span>
        </header>
        <div className="flex py-12">
          <div className="w-2/12 justify-center text-center">
            SAT
            <h1 className="font-bold text-2xl">14</h1>
          </div>
          <div className="flex flex-col space-y-12 w-6/12">
            <div className="flex flex-col space-y-4">
              <span>JANUARY 14, 2023 - JULY 13, 2024</span>
              <h1 className="font-normal text-5xl">
                WEDDINGS – BRING YOUR VISION TO LIFE
              </h1>
              <span className="">
                <strong>HOTEL LUX</strong> BROOKLYN, NY 10036, NEW YORK, AL
              </span>
            </div>
            <span>
              Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis
              scelerisque porttitor in ac turpis. In nec imperdiet turpis.
              Suspendisse quis orci ut orci pulvinar eleifend.
            </span>
          </div>
          <div className="relative w-4/12 h-30vh">
            <Image src={img1} objectFit="cover" layout="fill" alt="Event Image"/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;
