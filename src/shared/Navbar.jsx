import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Component/Dropdown";
import { useAuth } from "../Hooks/useAuth";
import Button from "../UI/Button";
import Logo from "../Assets/logo_dark.svg";
import ProfileIcon from "../Assets/ProfileIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  return (
    <div class="flex justify-between items-center py-2 px-4 bg-white shadow-md">
      <img
        src={Logo}
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
        <p
          className="text-xl pt-[12px] text-[#0E556C] cursor-pointer hover:underline transition-300 px-2  hover:font-bold hover:italic"
          onClick={() => navigate("/article")}
        >
          {" "}
          Article
        </p>

        {!isAuthenticated ? (
          <Button
            type={"button"}
            variation={"primary"}
            onClick={() => navigate("/login")}
            className="w-[115px] h-[44px] mt-1"
          >
            Sign In
          </Button>
        ) : (
          <img
            src={ProfileIcon}
            alt=""
            className="w-10 h-10 mt-1 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
