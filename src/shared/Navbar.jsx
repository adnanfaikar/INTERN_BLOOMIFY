import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Component/Dropdown";

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

      <div class="flex space-x-4 px-16 ">
        <Dropdown>Service</Dropdown>
        <p className="text-xl pt-[12px] text-[#0E556C] cursor-pointer hover:underline transition-300 px-2 hover:font-bold hover:italic">
          {" "}
          Chat Care
        </p>
        <p className="text-xl pt-[12px] text-[#0E556C] cursor-pointer hover:underline transition-300 px-2 hover:font-bold hover:italic">
          {" "}
          Promo
        </p>
        <p className="text-xl pt-[12px] text-[#0E556C] cursor-pointer hover:underline transition-300 px-2  hover:font-bold hover:italic">
          {" "}
          Article
        </p>
        <img
          src="../src/Assets/ProfileIcon.svg"
          alt=""
          className="w-10 h-10 mt-1 cursor-pointer"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Navbar;
