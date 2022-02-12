import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
import roomImg from "../../lib/assets/rooms/deluxe/photo_2022-01-17_15-32-51.jpg";

import img1 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-12 (2).jpg";
import img2 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-12.jpg";
import img3 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-13.jpg";
import img4 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-14 (2).jpg";
import img5 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-14.jpg";
import img6 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-15.jpg";
import img7 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-16.jpg";
import Head from "next/head";
import Animate from "../../lib/components/Animate";

const DeluxeRoom = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Deluxe Room</title>
      </Head>
      <RoomLayout
        name="Deluxe"
        bg={roomImg}
        imgarr={[img1, img2, img3, img4, img5, img6, img7]}
      >
        <Animate animateIn="animate__fadeIn">
          <RoomCard
            link="/rooms/suite/"
            roomData={{
              caption: "A quality room with sea or mountain view",
              description:
                "Luxury Single Room Art Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors.",
              rate: "400/Night",
              title: "LUXURY DOUBLE ROOM DELUXE",
            }}
            src={roomImg}
            learnMore={false}
          />
        </Animate>
      </RoomLayout>
    </Layout>
  );
};

export default DeluxeRoom;
