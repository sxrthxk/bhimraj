import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const RoomDetails = ({
  longtext,
  details,
}: {
  longtext: string[];
  details: { [value: string]: string };
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
      el: <Prices />
    }
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className="w-11/12 md:w-4/5 m-auto">
      <header className="flex flex-col md:flex-row font-normal text-2xl md:text-3xl uppercase space-x-0 space-y-2 md:space-y-0 md:space-x-8 my-3">
        {elements.map(({ title }, index) => (
          <h1
            className={`cursor-pointer transition-all ${
              selected === index ? "text-khaki border-b-2 border-khaki" : ""
            }`}
            key={title}
            onClick={() => setSelected(index)}
          >
            {title}
          </h1>
        ))}
      </header>
      <div className="text-xl max-w-3xl overflow-hidden font-light my-12">
        <AnimatePresence>{elements[selected].el}</AnimatePresence>
      </div>
      <div>
        <h1 className="font-serif uppercase text-2xl">Room Details</h1>
        <div className="max-w-2xl my-6">
          {Object.keys(details).map((k, index) => (
            <div
              key={index}
              className="w-full border-b-2 border-gray-200 flex justify-between font-serif text-xl py-1 my-2"
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

const Prices = () => {
  return <div>
    Prices
  </div>
}
