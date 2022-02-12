import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
import roomImg from "../../lib/assets/rooms/suite/photo_2022-01-17_15-37-37.jpg";

import img1 from "../../lib/assets/rooms/suite/images/photo_2022-01-30_18-42-23.jpg";
import img2 from "../../lib/assets/rooms/suite/images/photo_2022-01-30_18-42-24.jpg";
import img3 from "../../lib/assets/rooms/suite/images/photo_2022-01-30_18-42-25.jpg";
import img5 from "../../lib/assets/rooms/suite/images/photo_2022-01-30_18-42-26.jpg";
import img6 from "../../lib/assets/rooms/suite/images/photo_2022-01-30_18-42-27.jpg";
import img4 from "../../lib/assets/rooms/suite/images/photo_2022-01-30_18-42-26 (2).jpg";
import Head from "next/head";
import Animate from "../../lib/components/Animate";

const SuitePage = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Suite Room</title>
      </Head>
      <RoomLayout
        name="Suite"
        bg={roomImg}
        imgarr={[img1, img2, img3, img4, img5, img6]}
      >
        <Animate animateIn="animate__fadeIn">
          <RoomCard
            link="/rooms/suite/"
            roomData={{
              caption: "A quality room with sea or mountain view",
              description:
                "Luxury Single Room Art Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors.",
              rate: "400/Night",
              title: "LUXURY DOUBLE ROOM SUITE",
            }}
            src={roomImg}
            learnMore={false}
          />
        </Animate>
      </RoomLayout>
    </Layout>
  );
};

export default SuitePage;
