import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[444px] bg-[#0E556C] text-white ">
      <div className="ml-10 text-xl ">
        <div className="flex justify-between ml-3 p-5">
          <div className="">
            <h3 className="font-bold mt-5">Services</h3>
            <div className="cursor-pointer text-sm mt-4">
              <p className="py-2">Custom Care</p>
              <p className="py-2">Beauty Navigator</p>
              <p className="py-2">Chat Care</p>
            </div>
          </div>

          <div className="w-[600px] h-[271px] mr-20 mt-5">
            <h3 className="font-bold ml-2 ">Keep In Touch With Bloomify</h3>
            <p className="m-2 text-sm py-1">
              Join the Bloomify Newsletter and Be First to Hear About News,
              Offers And <br /> Skincare Advice
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] bg-[#0B4457] flex justify-between ">
        <div className="flex justify-center ml-3">
          <div className="flex items-center justify-center">
            <img
              src="../src/Assets/location.svg"
              alt=""
              sizes="10px"
              srcset=""
            />
            <p className="">Jakarta, Indonesia </p>
          </div>
          <div className="flex items-center justify-center ml-4">
            <p className="text-[#0E556C]"> |</p>
            <img
              src="../src/Assets/telephone.svg"
              alt=""
              sizes="10px"
              srcset=""
              className="ml-5"
            />
            <p className="p-2">1-802-526-2463 </p>
          </div>
        </div>
        <div className="flex justify-between mr-[50px] mt-[5px]">
          <img
            src="..\src\Assets\Logo\instagram.svg"
            width={"65px"}
            height={"65px"}
            alt=""
            className="pl-8 p-2 cursor-pointer"
          />
          <img
            src="..\src\Assets\Logo\_Facebook.svg"
            width={"65px"}
            height={"65px"}
            alt=""
            className="pl-8 p-2 cursor-pointer"
          />
          <img
            src="..\src\Assets\Logo\_Tiktok.svg"
            width={"65px"}
            height={"65px"}
            alt=""
            className="pl-8 p-2 cursor-pointer"
          />
          <img
            src="..\src\Assets\Logo\_Twitter.svg"
            width={"65px"}
            height={"65px"}
            alt=""
            className="pl-8 p-2 cursor-pointer"
          />
          <img
            src="..\src\Assets\Logo\_Pinterest.svg"
            width={"65px"}
            height={"65px"}
            alt=""
            className="pl-8 p-2 cursor-pointer"
          />
          <img
            src="..\src\Assets\Logo\_Tiktok.svg"
            width={"65px"}
            height={"65px"}
            alt=""
            className="pl-8 p-2 cursor-pointer"
          />
        </div>
      </div>
      <div className="bg-[#093341] w-full h-[56px] justify-between flex">
        <p className="p-4">&#169; 2024 Bloomify. All Rights Reserved.</p>
        <div className="flex p-3 mr-10">
          <p className="mr-6">Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
