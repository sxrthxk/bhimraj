import React from "react";
import Layout from "../../lib/components/Layout";
import RoomLayout from "../../lib/components/RoomLayout";
import roomImg from "../../lib/assets/rooms/exec/photo_2022-01-17_15-34-36.jpg";

import Head from "next/head";
import Image from "next/image";
import Animate from "../../lib/components/Animate";

const RoomPage = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Executive Room</title>
      </Head>
      <RoomLayout name="Luxury" bg={roomImg} imgarr={[]}>
        <section className="max-w-6xl flex flex-wrap m-auto gap-12 justify-left my-12">
          {[
            {
              roomImage: roomImg,
              roomTitle: "Room Info",
            },
            {
              roomImage: roomImg,
              roomTitle: "Room Info",
            },
            {
              roomImage: roomImg,
              roomTitle: "Room Info",
            },
          ].map((room, index) => {
            return (
              <div key={index} className="w-[90%] m-auto md:w-[45%] ">
                <Animate animateIn="animate__fadeIn">
                  <div className="relative h-96">
                    <Image
                      src={room.roomImage}
                      layout="fill"
                      objectFit="cover"
                      alt="Room"
                      className="scale-100 hover:scale-110 transition-all ease-out duration-300"
                    />
                  </div>
                  <div className="text-black my-3 text-2xl">
                    {room.roomTitle}
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
