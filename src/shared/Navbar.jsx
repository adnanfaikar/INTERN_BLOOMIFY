import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Component/Dropdown";
import Button from "../UI/Button";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div class="flex justify-between items-center py-2 px-4 bg-white shadow-md">
      <img
        src="../src/Assets/logo_dark.svg"
        width={"80px"}
        height={"80px"}
        alt=""
        className="pl-8 p-2 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div class="flex space-x-4 px-16">
        <Dropdown>Service</Dropdown>
        <p className="text-xl pt-[12px] text-[#0E556C] cursor-pointer hover:underline transition-300 px-2 ">
          {" "}
          Chat Care
        </p>
        <p className="text-xl pt-[12px] text-[#0E556C] cursor-pointer hover:underline transition-300 px-2  ">
          {" "}
          Promo
        </p>
        <p className="text-xl pt-[12px] text-[#0E556C] cursor-pointer hover:underline transition-300 px-2  ">
          {" "}
          Article
        </p>
        <button
          className="rounded-full bg-[#0E556C] w-[127px] h-[44px] text-white mt-[6px] flex py-2.5 pl-5 "
          onClick={() => navigate("/login")}
        >
          <img src="../src/Assets/Logo/Google.svg" alt="" />
          <p className="pl-2">Sign In</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
