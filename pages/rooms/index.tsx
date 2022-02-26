import React from "react";
import Layout from "../../lib/components/Layout";
import RoomLayout from "../../lib/components/RoomLayout";
import roomImg from "../../lib/assets/rooms/exec/photo_2022-01-17_15-34-36.jpg";
import execRoomImg from "../../lib/assets/rooms/exec/photo_2022-01-17_15-34-36.jpg";
import deluxeRoomImg from "../../lib/assets/rooms/deluxe/photo_2022-01-17_15-32-51.jpg";
import suiteRoomImg from "../../lib/assets/rooms/suite/photo_2022-01-17_15-37-37.jpg"

import Head from "next/head";
import Image from "next/image";
import Animate from "../../lib/components/Animate";
import { useRouter } from "next/router";

const RoomPage = () => {

  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Executive Room</title>
      </Head>
      <RoomLayout name="Luxury" bg={roomImg} imgarr={[]}>
        <section className="max-w-6xl px-6 flex flex-col lg:flex-row m-auto gap-12 justify-left my-12">
          {[
            {
              image: execRoomImg,
              title: "Executive",
              price: 500,
              slug: "executive"
            },
            {
              image: deluxeRoomImg,
              title: "Deluxe",
              price: 500,
              slug: "deluxe"
            },
            {
              image: suiteRoomImg,
              title: "Suite",
              price: 500,
              slug: "suite"
            },
          ].map((room, index) => {
            return (
              <div key={index} className="w-[90%] m-auto lg:w-[45%] cursor-pointer" onClick={() => router.push(`/rooms/${room.slug}`)}>
                <Animate animateIn="animate__fadeIn">
                  <div className="relative h-64">
                    <Image
                      src={room.image}
                      layout="fill"
                      objectFit="cover"
                      alt="Room"
                      className="scale-100 hover:scale-110 transition-all ease-out duration-300"
                    />
                  </div>
                  <div className="text-black mt-3 text-2xl">
                    {room.title}
                  </div>
                  <div className="text-khaki my-1 text-xl">
                    {room.price + " / NIGHT"}
                  </div>
                </Animate>
              </div>
            );
          })}
        </section>
      </RoomLayout>
    </Layout>
  );
};

export default RoomPage;
