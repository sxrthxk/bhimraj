import Image from "next/image";
import React from "react";

const Service = ({ data }: { data: {png: StaticImageData,name : string} }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Image src={data.png} alt="service"/>
      <span className="font-light text-lg uppercase">
          {data.name}
      </span>
    </div>
  );
};

export default Service;
