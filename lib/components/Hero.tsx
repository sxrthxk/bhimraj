import Image from "next/image";
import React from "react";

const Hero = ({ src,text }: { src: StaticImageData,text?:string }) => {
  return (
    <div className="relative w-full h-[75vh]">
      <Image src={src} layout="fill" objectFit="cover" alt={text}/>
      <h1 className="font-serif text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-6xl">{text}</h1>
    </div>
  );
};

export default Hero;
