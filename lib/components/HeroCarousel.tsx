import Image from "next/image";
import React, { useEffect, useState } from "react";

import img2 from "../assets/carousel/WhatsApp Image 2022-01-11 at 4.54.23 PM.jpeg";
import img1 from "../assets/carousel/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
SwiperCore.use([EffectFade, Navigation, Autoplay]);

const autoplayspeed = 2000;

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
      >
        <SwiperSlide>
          <CarouselImage
            caption="Book Early Save More"
            image={img2}
            primaryText="FINEST HOTEL COLLECTION"
            scale={"scale-100"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage
            caption="Book Early Save More"
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
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-3xl drop-shadow-2xl font-serif text-center z-[2]">
          {primaryText}
          <div className="font-fancy text-gray-300 font-normal py-5 text-6xl drop-shadow-md">
            {caption}
          </div>
        </h1>
      </div>
    </>
  );
};
