import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard = ({
  src,
  roomData,
  link,
}: {
  src: StaticImageData;
  roomData: {
    title: string;
    caption: string;
    description: string;
    rate: string;
  };
  link: string;
}) => {
  return (
    <div className="m-auto w-4/5 bg-white flex my-12 h-[60vh]">
      <div className="w-1/2 relative">
        <Image placeholder="blur" src={src} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-start justify-evenly w-1/2 px-20 text-left">
        <header className="">
          <h1 className="text-4xl m-auto">{roomData.title}</h1>
          <span className="text-lg italic text-gray-400">
            {roomData.caption}
          </span>
        </header>
        <p>{roomData.description}</p>
        <div className="flex justify-between w-full">
          <span className="text-khaki text-lg">{roomData.rate}</span>
          <Link href={link}>
            <span className="text-black hover:text-khaki transition-all text-lg cursor-pointer">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
