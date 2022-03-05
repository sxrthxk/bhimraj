import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
import roomImg from "../../lib/assets/rooms/exec/photo_2022-01-17_15-34-36.jpg";

import img1 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-44-53.jpg";
import img2 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-44-54.jpg";
import img3 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-07.jpg";
import img4 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-08 (2).jpg";
import img5 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-08.jpg";
import img6 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-09.jpg";
import img7 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-10 (2).jpg";
import img8 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-10.jpg";
import Head from "next/head";
import Animate from "../../lib/components/Animate";
import RoomDetails from "../../lib/components/RoomDetails";

const ExecutiveRoom = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Executive Room</title>
      </Head>
      <RoomLayout
        name="Executive"
        bg={roomImg}
        imgarr={[img1, img2, img5, img6, img8]}
      >
        <Animate animateIn="animate__fadeIn">
          <RoomCard
            link="/rooms/suite/"
            roomData={{
              caption: "A quality room with sea or mountain view",
              description:
                "Executive Room - Executive Room has a comfortable king size bed, a sitting, separate desk and bathroom.",
              rate: "₹2800/Night",
              title: "LUXURY DOUBLE ROOM EXECUTIVE",
            }}
            src={roomImg}
            learnMore={false}
          />
        </Animate>
        <RoomDetails
          longtext={[
            "Executive Room - Executive Room has a comfortable king size bed, a sitting, separate desk and bathroom.",

            "The rooms come with full amenities; Flat Screen TV, Wi-Fi,  air-conditioning,  and complimentary breakfast, and in room coffee & tea facilities.",
          ]}
          details={{
            "Bed": "Queen",
            "Occupancy": "2 Persons"
          }}
        />
      </RoomLayout>
    </Layout>
  );
};

export default ExecutiveRoom;
