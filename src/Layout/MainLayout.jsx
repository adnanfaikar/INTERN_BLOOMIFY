import React from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
