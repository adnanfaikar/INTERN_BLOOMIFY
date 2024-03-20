import React from "react";
import SearchIcon from "../Assets/SearchIcon.svg";
const SearchBox = ({ handleChange, handleKeyPress }) => {
  return (
    <div className="flex items-center shadow-lg">
      <div className="relative w-full">
        <img
          src={SearchIcon}
          alt=""
          className="absolute left-0 ml-2 mt-2 h-6 w-6 pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search Something..."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-4 py-2 w-full rounded-xl focus:outline-none focus:bg-white bg-[#FAFAFA] placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchBox;
