import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import img2 from "../assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
import img1 from "../assets/carousel/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
SwiperCore.use([EffectFade, Navigation, Autoplay]);

const autoplayspeed = 6000;

const changeHandler = () => {
  console.log("changed")
}

const HeroCarousel = () => {

  return (
    <>
      <Swiper
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: autoplayspeed,
        }}
        onSlideChange={changeHandler}
      >
        <SwiperSlide>
          <CarouselImage
            caption="feel like home finest heritage property - in heart of india"
            image={img2}
            primaryText="FINEST HOTEL COLLECTION"
            scale={"scale-100"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage
            caption="feel like home finest heritage property - in heart of india"
            image={img1}
            primaryText="FINEST HOTEL COLLECTION"
            scale={"scale-100"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousel;

const CarouselImage = ({
  primaryText,
  caption,
  image,
  scale
}: {
  primaryText: string;
  caption: string;
  image: StaticImageData;
  scale: string

}) => {

  

  return (
    <>
      <div className="relative h-[72vh] md:h-[90vh] w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black z-[1] opacity-50"></div>
        <Image
          placeholder="blur"
          src={image}
          layout="fill"
          objectFit="cover"
          className={"transition-all duration-1000 " + scale}
          alt="Hotel Image"
        />
        <motion.h1 animate={{opacity: 1}} transition={{duration: 1}} initial={{opacity: 0}} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-3xl drop-shadow-2xl font-serif text-center z-[2]">
          {primaryText}
          <motion.div className="font-fancy text-gray-300 font-normal py-5 text-5xl drop-shadow-md">
            {caption}
          </motion.div>
        </motion.h1>
      </div>
    </>
  );
};
