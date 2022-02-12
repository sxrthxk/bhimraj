import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Animate = ({
  children,
  animateIn,
}: {
  children: JSX.Element | JSX.Element[];
  animateIn: string;
}) => {
  if (typeof window !== "undefined")
    return (
      <AnimationOnScroll animateIn={animateIn}>{children}</AnimationOnScroll>
    );
  return null;
};

export default Animate;
