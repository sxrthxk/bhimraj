import React from "react";
import Hero from "../lib/components/Hero";
import Layout from "../lib/components/Layout";
import hero from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
import FancyText from "../lib/components/FancyText";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";

const gallery = ({
  data,
}: {
  data: { id: number; caption: string; url: string }[];
}) => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Gallery</title>
      </Head>
      <Hero src={hero} text="gallery" darken />
      <section className="w-full py-24">
        <FancyText bgText="pictures" className="my-12">
          Gallery
        </FancyText>
        <div className="m-auto flex flex-wrap justify-center relative w-11/12 md:w-4/5  mt-24 gap-4">
          {data.map(({ id, url, caption }) => (
            <div key={id} className="flex flex-col items-center">
              <div className="w-60 h-60 relative">
                <Image
                  src={url}
                  objectFit="cover"
                  layout="fill"
                  alt="Gallery Image"
                />
              </div>
              <span className="w-full font-sans uppercase text-lg mt-2">
              {caption}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default gallery;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const data = await (
    await fetch("https://bhimrajresort.com/wp-json/wp/v2/posts?categories=73&per_page=99")
  ).json();

  return {
    props: {
      data: data.map((d: any) => ({
        id: d.id,
        caption: d.title.rendered,
        url: d.yoast_head_json.og_image[0].url,
      })),
    },
  };
};