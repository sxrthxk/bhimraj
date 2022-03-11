import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import img2 from "../assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
import img1 from "../assets/carousel/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";
import { SwiperEvents } from "swiper/types";
SwiperCore.use([EffectFade, Navigation, Autoplay]);

const autoplayspeed = 6000;

const HeroCarousel = () => {
  const [slide, setSlide] = useState(1);

  const changeHandler = (e: any) => {
    setSlide(e.activeIndex);
  };
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
            animKey={slide}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage
            caption="feel like home finest heritage property - in heart of india"
            image={img1}
            primaryText="FINEST HOTEL COLLECTION"
            scale={"scale-100"}
            animKey={slide + 1}
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
  scale,
  animKey,
}: {
  primaryText: string;
  caption: string;
  image: StaticImageData;
  scale: string;
  animKey: number;
}) => {

  const fancyTextVariants = {
    sentence: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1.5
        }
      }
    },
  }

  const variants = {
    sentence: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5,
          staggerChildren: 0.05,
        },
      },
    },
    letter: {
      hidden: {
        opacity: 0,
        y: 50,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  };

  return (
    <>
      <div className="relative h-[72vh] md:h-[90vh] w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black z-[1] opacity-50"></div>
        <motion.div
          className="relative h-[72vh] md:h-[90vh] w-full"
          animate={{
            scale: 1.1,
          }}
          initial={{ scale: 1 }}
          transition={{ duration: autoplayspeed / 1000 }}
          key={animKey}
        >
          <Image
            placeholder="blur"
            src={image}
            layout="fill"
            priority
            objectFit="cover"
            className={"transition-all duration-1000 " + scale}
            alt="Hotel Image"
          />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-3xl drop-shadow-2xl font-serif text-center z-[2]" key={animKey}>
          <motion.div
            variants={fancyTextVariants.sentence}
            initial="hidden"
            animate="visible"
          >
            {primaryText}
          </motion.div>
          <motion.div
            className="font-fancy text-gray-300 font-normal py-5 text-5xl drop-shadow-md"
            variants={variants.sentence}
            initial="hidden"
            animate="visible"
          >
            {caption.split("").map((char, index) => {
              return <motion.span key={char + "-" + index} variants={variants.letter}>{char}</motion.span>;
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};
