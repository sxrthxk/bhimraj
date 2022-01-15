import Image from "next/image";
import React from "react";

import img2 from "../assets/carousel/WhatsApp Image 2022-01-11 at 4.54.23 PM.jpeg";
import img1 from "../assets/carousel/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import Head from "next/head";
SwiperCore.use([EffectFade, Navigation]);

const HeroCarousel = () => {
  return (
    <>
      <Head>
        <style>{`.swiper-button-prev {
                        color: red; 
                    }

                    .swiper-button-next {
                        color: #000; 
                    }`}</style>
      </Head>

      <Swiper
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative h-[90vh] w-full">
            <Image
              placeholder="blur"
              src={img2}
              layout="fill"
              objectFit="cover"
              
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-3xl drop-shadow-2xl font-serif text-center">
              FINEST HOTEL COLLECTION
              <h2 className="font-fancy text-gray-300 font-normal py-5 text-6xl drop-shadow-md">Book Early Save More</h2>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[90vh] w-full">
            <Image
              placeholder="blur"
              src={img1}
              layout="fill"
              objectFit="cover"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-3xl drop-shadow-2xl">
              FINEST HOTEL COLLECTION
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousel;
