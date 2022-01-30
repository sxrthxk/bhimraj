import React from "react";
import Hero from "../lib/components/Hero";
import Layout from "../lib/components/Layout";
import hero from "../lib/assets/about/hero.jpg";
import FancyText from "../lib/components/FancyText";
import sectionimg from "../lib/assets/about/section.jpg";
import Image from "next/image";
import Head from "next/head";

const AboutUsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | About</title>
      </Head>
      <Hero src={hero} text="Story of Our Hotel" darken/>
      <section className="w-full py-24">
        <FancyText bgText="Our Story" className="my-12">History begins in 1985</FancyText>
        <div className="m-auto relative w-11/12 md:w-3/5 h-[50vh] mt-24">
            <Image src={sectionimg} placeholder="blur" objectFit="cover" layout="fill" alt="Hotel Image"/>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
