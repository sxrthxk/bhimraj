import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../lib/components/Layout";
import img1 from "../lib/assets/rooms/hero.jpg";
import Head from "next/head";
import FancyText from "../lib/components/FancyText";
import { GetStaticProps } from "next";
import client from "../lib/client";
import { EntryCollection } from "contentful";

const EventsPage = ({
  data,
}: {
  data: {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: { fields: { file: { url: string } } };
  }[];
}) => {

  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <section className="my-24 mx-auto max-w-6xl">
        <FancyText bgText="Celebration" className="my-12">
          Events
        </FancyText>

        {data.map((event) => (
          <EventCard
            date={event.date}
            description={event.description}
            image={`https://${event.image}`}
            location={event.location}
            title={event.title}
            key={event.id}
          />
        ))}
      </section>
    </Layout>
  );
};

export default EventsPage;

const EventCard = ({
  date,
  title,
  location,
  description,
  image,
}: {
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex py-12 px-6 mx-auto justify-center border-t-2 border-black border-b-2">
      <div className="flex w-full flex-col-reverse md:flex-row">
        <div className="flex flex-col space-y-12 w-[60%]">
          <div className="flex flex-col space-y-4">
            <span className="text-gray-500 font-normal my-2">{date}</span>
            <h1 className="font-normal text-4xl md:text-5xl">{title}</h1>
            <span className="my-2 font-black">{location}</span>
          </div>
          <span>{description}</span>
        </div>
        <div className="relative w-[90%] md:w-[40%] h-[50vh]">
          <Image
            src={image}
            objectFit="cover"
            layout="fill"
            alt="Event Image"
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: EntryCollection<{
    title: string;
    date: string;
    location: string;
    description: string;
    image: { fields: { file: { url: string } } };
  }> = await client.getEntries({
    content_type: "events",
  });

  return {
    props: {
      data: data.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        date: item.fields.date,
        location: item.fields.location,
        description: item.fields.description,
        image: item.fields.image.fields.file.url,
      })),
    },
  };
};
