import React from "react";
import Footer from "../shared/Footer";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/logo_dark.svg";
const LogReg = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="text-[#0B4457] ">
      <div className="flex">
        <div className="w-[745px] h-[934px] bg-[#0E556C] flex items-center justify-between ">
          <div className="bg-[url('../src/Assets/PersonImages.svg')] bg-cover w-full h-full text-white">
            <img
              src={Logo}
              alt=""
              className="mt-3 ml-4 cursor-pointer"
              onClick={() => navigate("/")}
            />

            <h5 className="text-5xl font-bold ml-10 mt-[640px]">
              Find Your Confidence <br /> Here.
            </h5>
            <p className="ml-10 text-xl">
              Start to bloom your confidence with Bloomify
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default LogReg;
