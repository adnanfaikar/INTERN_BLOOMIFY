import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FilterClose = ({ onClick }) => {
  return (
    <div
      className=" xl:w-[410px] md:w-[300px] h-[60px] bg-white rounded-xl shadow-lg mr-20 ml-[80px] text-[#0B4457] cursor-pointer transition"
      onClick={onClick}
    >
      <div className="flex mt-4">
        <img
          src="../src/Assets/filterImage.svg"
          alt=""
          className="w-5 h-full mt-[2px] ml-4"
        />
        <p className="font-bold">Filter: </p>
        <ChevronDownIcon className="h-6 w-8 text-[#0E556C] ml-[290px]" />
      </div>
    </div>
  );
};

export default FilterClose;
