import React from "react";
import Hero from "./Hero";
import hero from "../assets/rooms/hero.jpg";
import FancyText from "./FancyText";
import RoomCard from "./RoomCard";
import Image from "next/image";

const RoomLayout = ({
  children,
  name,
  bg,
  imgarr,
}: {
  children: JSX.Element;
  name: string;
  bg: StaticImageData;
  imgarr: StaticImageData[];
}) => {
  return (
    <div>
      <Hero src={bg} text={name} darken />
      <section className="w-full py-32 bg-[#f5f5f5]">
        <header>
          <FancyText bgText="Awesonme" className="text-6xl">
            {name + " room"}
          </FancyText>
        </header>
        {children}
      </section>
      {imgarr.length && (
        <>
          x
          <FancyText bgText={name} className="my-20">
            Room Images
          </FancyText>
          <div className="w-full px-6 md:px-12 m-auto gap-12 my-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {imgarr.map((img, index) => {
              return (
                <div key={index} className="relative h-64 md:h-80 w-full">
                  <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    alt="Hotel Image"
                    placeholder="blur"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default RoomLayout;
