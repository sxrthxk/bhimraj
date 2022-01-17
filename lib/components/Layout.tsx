import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({
  children,
}: {
  children: JSX.Element | string | JSX.Element[];
}) => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
