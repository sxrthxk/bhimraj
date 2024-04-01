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
import RoomDetails, { Span } from "../../lib/components/RoomDetails";
import { icons, serviceIcons } from "../../lib/components/icons";
import Image from "next/image";

const DeluxeRoom = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort test | Deluxe Room</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
                "Deluxe Room - Deluxe Room has a comfortable single twin bed, a sitting, separate desk and bathroom.",
              rate: "₹2500/Night",
              title: "LUXURY DELUXE ROOM",
            }}
            src={roomImg}
            learnMore={false}
          />
        </Animate>
        <RoomDetails
          longtext={[
            "Deluxe Room - Deluxe Room has a comfortable single twin bed, a sitting, separate desk and bathroom.",
            "The rooms come with full amenities; Flat Screen TV, Wi-Fi, air-conditioning, and complimentary breakfast.",
          ]}
          services={Object.keys(serviceIcons).map((service, index) => (
            <Span
              key={index}
              icon={serviceIcons[service].png}
              alt={serviceIcons[service].name}
            >
              {serviceIcons[service].description}
            </Span>
          ))}
          details={{
            Bed: "Single Twin Size",
            Occupancy: "2 Persons",
            Bathroom: "Yes",
            "Cable TV": "Yes",
            "Air Conditioner": "Yes",
          }}
          serviceIconsData={[
            icons.bath,
            icons.airconditioner,
            icons.phone,
            icons.tv,
            icons.wifi,
          ]}
          price={{
            double: "2500",
            single: "1800",
          }}
        />
      </RoomLayout>
    </Layout>
  );
};

export default DeluxeRoom;
