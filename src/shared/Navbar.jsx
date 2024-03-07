import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Component/Dropdown";
import Button from "../UI/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div class="flex justify-between items-center py-2 px-4 bg-[#CDC1B3] shadow-md">
      <img
        src="../src/Assets/logo_dark.svg"
        width={"80px"}
        height={"80px"}
        alt=""
        className="pl-8 p-2"
      />

      <div class="flex space-x-4 px-16">
        <Dropdown>Complaint</Dropdown>
        <Dropdown>Service</Dropdown>
        <p className="text-xl pt-[12px] text-[#4D4133] cursor-pointer hover:underline transition-300 px-[72px] ">
          {" "}
          Cosultation
        </p>
        <p className="text-xl pt-[12px] text-[#4D4133] cursor-pointer hover:underline transition-300 px-[72px]  ">
          {" "}
          Promo
        </p>
        <p className="text-xl pt-[12px] text-[#4D4133] cursor-pointer hover:underline transition-300 px-[72px]  ">
          {" "}
          Article
        </p>
        <img
          src="../src/Assets/IO_PERSON.svg"
          width={"40px"}
          height={"40px"}
          alt=""
          className=" p-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
