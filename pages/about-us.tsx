import React from "react";
import Hero from "../lib/components/Hero";
import Layout from "../lib/components/Layout";
import hero from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
import FancyText from "../lib/components/FancyText";
import sectionimg from "../lib/assets/about/aboutus.jpg";
import Image from "next/image";
import Head from "next/head";
import { BookNow } from "../lib/components/Navbar";

const AboutUsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | About</title>
      </Head>
      <Hero src={hero} text="Story of Our Hotel" darken />
      <section className="w-full py-24">
        <FancyText bgText="Our Story" className="my-12">
          History begins in 1985
        </FancyText>
        <div className="m-auto relative w-11/12 md:w-3/5  mt-24">
          <Image
            src={sectionimg}
            placeholder="blur"
            objectFit="cover"
            layout="responsive"
            alt="Hotel Image"
          />
        </div>
        <div className="m-auto w-11/12 md:w-3/5 my-6 text-2xl font-serif font-normal">
          Developed on the heritage property of Sardar Sambhaji Chandroji Rao
          Angre on the border of Princely State Gwalior, BR Resort is an oasis
          in the heart of India, Madhya Pradesh. Here the traditional art of
          hospitality complements the legendary passion of service, creating a
          unique living experience. Located on Bhopal-Indore highway covered
          with lush green lawns and hills. Enjoy a comfortable stay in our
          Luxury Room.
        </div>
        <div className="text-white mt-16">
        <BookNow />
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
