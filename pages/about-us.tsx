import React from "react";
import Hero from "../lib/components/Hero";
import Layout from "../lib/components/Layout";
import hero from "../lib/assets/about/hero.jpg";
import FancyText from "../lib/components/FancyText";
import sectionimg from "../lib/assets/about/section.jpg";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <Layout>
      <Hero src={hero} text="Story of Our Hotel" />
      <section className="w-full py-24">
        <FancyText bgText="Our Story" className="my-12">History begins in 1985</FancyText>
        <div className="m-auto relative w-3/5 h-[50vh] mt-24">
            <Image src={sectionimg} placeholder="blur" objectFit="cover" layout="fill" />
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
