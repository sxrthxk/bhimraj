import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
import roomImg from "../../lib/assets/rooms/exec/photo_2022-01-17_15-34-36.jpg";


const ExecutiveRoom = () => {
    return (
        <Layout>
      <RoomLayout name="Executive" bg={roomImg}>
        <RoomCard
          link="/rooms/suite/"
          roomData={{
            caption: "A quality room with sea or mountain view",
            description:
              "Luxury Single Room Art Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors.",
            rate: "400/Night",
            title: "LUXURY DOUBLE ROOM EXECUTIVE",
          }}
          src={roomImg}
          learnMore={false}
        />
      </RoomLayout>
    </Layout>
    )
}

export default ExecutiveRoom
