import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
import img1 from "../../lib/assets/carousel/WhatsApp Image 2022-01-11 at 4.54.22 PM.jpeg";


const SuitePage = () => {
  return (
    <Layout>
      <RoomLayout>
        <RoomCard
          link="/rooms/suite/"
          roomData={{
            caption: "A quality room with sea or mountain view",
            description:
              "Luxury Single Room Art Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors.",
            rate: "400/Night",
            title: "LUXURY DOUBLE ROOM SUITE",
          }}
          src={img1}
        />
      </RoomLayout>
    </Layout>
  );
};

export default SuitePage;
