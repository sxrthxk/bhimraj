import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { icons } from "./icons";
import { BookNow } from "./Navbar";
import Service from "./Service";

const RoomDetails = ({
  longtext,
  details,
  serviceIconsData,
  price,
}: {
  longtext: string[];
  details: { [value: string]: string };
  serviceIconsData: { name: string; png: StaticImageData }[];
  price: {
    single: string;
    double: string;
  };
}) => {
  const elements = [
    {
      title: "Description",
      el: <Description details={longtext} />,
    },
    {
      title: "Room Services",
      el: <RoomServices />,
    },
    {
      title: "Prices",
      el: <Prices price={price} serviceIconsData={serviceIconsData} />,
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className="w-11/12 md:w-4/5 m-auto">
      <div className="px-6 md:px-8 lg:px-24 m-auto flex flex-wrap justify-evenly my-12">
        {serviceIconsData.map((data, index) => (
          <Service key={index} data={data} />
        ))}
      </div>
      <header className="flex flex-col md:flex-row font-normal text-2xl md:text-3xl uppercase space-x-0 space-y-2 md:space-y-0 md:space-x-8 mt-3 border-b-[1px] border-gray-400 max-w-3xl">
        {elements.map(({ title }, index) => (
          <h1
            className={`cursor-pointer transition-all pb-3 ${
              selected === index ? "text-khaki border-b-[3px] border-khaki" : ""
            }`}
            key={title}
            onClick={() => setSelected(index)}
          >
            {title}
          </h1>
        ))}
      </header>
      <div className="flex justify-center max-w-3xl overflow-hidden font-light my-12">
        <AnimatePresence>{elements[selected].el}</AnimatePresence>
      </div>
      <div>
        <h1 className="font-serif uppercase text-2xl">Room Details</h1>
        <div className="max-w-2xl my-6">
          {Object.keys(details).map((k, index) => (
            <div
              key={index}
              className="w-full border-b-2 border-gray-200 flex justify-between font-sans font-thin text-xl py-1 my-2"
            >
              <span>{k}</span>
              <span>{details[k]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;

const RoomServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "max-content" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        bounce: 0,
        ease: "easeInOut",
      }}
    >
      Other Services
    </motion.div>
  );
};

const Description = ({ details }: { details: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "max-content" }}
      exit={{ opacity: 0, height: 0 }}
      className="w-full text-left text-xl"
      transition={{
        bounce: 0,
        ease: "easeInOut",
      }}
    >
      {details.map((text, index) => (
        <>
          <p key={index}>{text}</p>
          <br />
        </>
      ))}
    </motion.div>
  );
};

const Prices = ({
  price,
  serviceIconsData,
}: {
  price: {
    single: string;
    double: string;
  };
  serviceIconsData: { name: string; png: StaticImageData }[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "max-content" }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-col md:flex-row w-full justify-center m-auto"
      transition={{
        bounce: 0,
        ease: "easeInOut",
      }}
    >
      <PriceCard
        rate={price.single}
        title={"Single Occupancy"}
        data={serviceIconsData}
      />
      <PriceCard
        rate={price.double}
        title={"Double Occupancy"}
        data={serviceIconsData}
      />
    </motion.div>
  );
};

const PriceCard = ({
  title,
  rate,
  data,
}: {
  title: string;
  rate: string;
  data: { name: string; png: StaticImageData }[];
}) => {
  return (
    <div className="w-72 border-2 border-gray-300 rounded-md flex flex-col items-center mx-auto mb-12">
      <span className="text-3xl m-3 mb-0 pb-3 font-serif font-bold border-b-[1.5px] w-full text-center border-gray-400">
        {title}
      </span>
      <span className="text-3xl m-3 mb-0 pb-3 font-serif border-b-[1.5px] w-full text-center border-gray-400 text-khaki">
        {"₹" + rate + "/NIGHT"}
      </span>
      <div className="flex flex-col items-center justify-evenly h-full my-2">
        {data.map((d, index) => (
          <span
            key={index}
            className="uppercase font-xl flex items-center my-2"
          >
            <Image src={d.png} alt="service" />
            <span className="ml-4">{d.name}</span>
          </span>
        ))}
      </div>
      <div className="text-white my-4">
        <BookNow />
      </div>
    </div>
  );
};
