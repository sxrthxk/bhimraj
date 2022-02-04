import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard = ({
  src,
  roomData,
  link,
  learnMore,
}: {
  src: StaticImageData;
  roomData: {
    title: string;
    caption: string;
    description: string;
    rate: string;
  };
  link: string;
  learnMore: boolean;
}) => {
  return (
    <div className="m-auto w-11/12 md:w-4/5 bg-white flex flex-col md:flex-row my-12 h-auto md:h-[60vh] shadow-lg">
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <Image
          placeholder="blur"
          src={src}
          layout="fill"
          objectFit="cover"
          alt="Room Image"
        />
      </div>
      <div className="flex flex-col items-start justify-evenly w-full md:w-1/2 px-6 md:px-20 py-6 md:py-0 text-left space-y-6 md:space-y-0">
        <header className="">
          <h1 className="text-4xl m-auto">{roomData.title}</h1>
          <span className="text-lg italic text-gray-400">
            {roomData.caption}
          </span>
        </header>
        <p>{roomData.description}</p>
        <div className="flex justify-between w-full">
          <span className="text-khaki text-lg">{roomData.rate}</span>
          <Link href={learnMore ? link : "/contact"} passHref>
            {learnMore ? (
              <span className="text-black hover:text-khaki transition-all text-lg cursor-pointer">
                {"Learn More"}
              </span>
            ) : (
              <span className="text-white bg-khaki rounded-sm p-3 hover:bg-black transition-all text-lg cursor-pointer">
                {"Book Now"}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
