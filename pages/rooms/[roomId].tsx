import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import React from "react";

const Room = (props: any) => {
    console.log(props)
  return <div>
      <h1>Room Number</h1>
      {JSON.stringify(props)}</div>;
};

export default Room;

export const getStaticPaths: GetStaticPaths = async () => {
  console.log();
  return {
    paths: [
      {
        params: {
          roomId: "room1",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log(context.params?.roomId);
  return {
    props: {
      id: 1,
      roomName: "Room One",
    },
  };
};
