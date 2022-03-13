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
import RoomDetails, { Span } from "../../lib/components/RoomDetails";
import { icons, serviceIcons } from "../../lib/components/icons";

const SuitePage = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Suite Room</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
                "Luxury Suite Room Suite has a comfortable king size bed, a separate sitting room, separate desk and bathroom with walk-in rain dance shower.",
              rate: "₹3800/Night",
              title: "LUXURY SUITE ROOM",
            }}
            src={roomImg}
            learnMore={false}
          />
        </Animate>
        <RoomDetails
          longtext={[
            "Luxury Suite Room - Luxury Suite Room has a comfortable king size bed, a separate sitting room, separate desk and bathroom with walk-in rain dance shower.",
            "The rooms come with full amenities: Flat Screen TV, Wi-Fi, air-conditioning, minibar, complimentary breakfast and in room coffee & tea facilities.",
          ]}
          services={Object.keys(serviceIcons).map((service, index) => (
            <Span key={index} icon={serviceIcons[service].png} alt={serviceIcons[service].name}>
              {serviceIcons[service].description}
            </Span>
          ))}
          details={{
            Bed: "King Size",
            Occupancy: "2 Persons",
            Bathroom: "Yes",
            "Cable TV": "Yes",
            "Air Conditioner": "Yes",
            "Mini Bar": "Yes",
            "Compilmentary Tea/Coffee": "Yes",
          }}
          serviceIconsData={[
            icons.bath,
            icons.airconditioner,
            icons.drinks,
            icons.tea,
            icons.tv,
            icons.wifi,
          ]}
          price={{
            double: "3800",
            single: "3200",
          }}
        />
      </RoomLayout>
    </Layout>
  );
};

export default SuitePage;
