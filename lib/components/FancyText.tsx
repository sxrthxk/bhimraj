import React from "react";

const FancyText = ({
  children,
  bgText,
  className,
}: {
  children: string;
  bgText: string;
  className?: string;
}) => {
  return (
    <h1
      className={
        "relative text-4xl max-w-lg font-semibold m-auto font-serif my-6 z-[5] uppercase h-min text-center " +
        className
      }
    >
      <div className="absolute text-gray-300 font-fancy text-[7.5rem] z-[-1] left-1/2 transorm -translate-x-1/2 font-thin bottom-1/4 capitalize ">
        {bgText}
      </div>
      {children}
    </h1>
  );
};

export default FancyText;
