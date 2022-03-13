import React from "react";
import Hero from "../lib/components/Hero";
import Layout from "../lib/components/Layout";
import hero from "../lib/assets/contact/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";
import FancyText from "../lib/components/FancyText";
import Image from "next/image";

import goibibo from "../lib/assets/contact/goibibo.png";
import booking from "../lib/assets/contact/booking.png";
import Head from "next/head";
import Link from "next/link";

const contact = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Hero src={hero} text="contact us" darken />
      <section className="w-full py-24">
        <FancyText bgText="Connect" className="text-6xl">
          Get In Touch
        </FancyText>
        <div className="flex flex-col md:flex-row justify-evenly items-center py-12">
          <a
            href={"https://www.goibibo.com/hotels/br-resort-and-club-hotel-in-sonkach-8288936628790380610/"}
            target="_blank"
            rel="noreferrer"
            className="w-2/6 md:w-1/6 my-6 cursor-pointer"
          >
            <Image src={goibibo} objectFit="cover" alt="GoIbibo Logo" />
          </a>
          <a
            href={"https://www.booking.com/hotel/in/br-resort-amp-club.en-gb.html"}
            target="_blank"
            rel="noreferrer"
            className="w-2/6 md:w-1/6 my-6 cursor-pointer"
          >
            <Image src={booking} objectFit="cover" alt="Booking Logo" />
          </a>
        </div>
        <FancyText bgText="location" className="mb-12">
          Visit Us
        </FancyText>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9779532451357!2d76.25973701472026!3d22.987838184970638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963301500000001%3A0x146129c53a3a0915!2sBR%20Resort%20%26%20Club!5e0!3m2!1sen!2sin!4v1646483277460!5m2!1sen!2sin"
          className="w-full px-12 md:px-24 max-w-3xl mx-auto h-96"
          loading="lazy"
        ></iframe>
      </section>
    </Layout>
  );
};

export default contact;
