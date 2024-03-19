import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FilterOpen = ({ onClick }) => {
  const [filters, setFilters] = useState([]);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    const filterValue = event.target.value;

    if (isChecked) {
      setFilters([...filters, filterValue]);
    } else {
      setFilters(filters.filter((filter) => filter !== filterValue));
    }
  };

  const handleFilterClick = () => {
    console.log("Selected filters:", filters);
  };

  return (
    <div className="filter  w-[410px] h-[208px] bg-white rounded-xl shadow-lg mr-20 ml-[80px] text-[#0B4457] ">
      <div className="flex mt-4 cursor-pointer" onClick={onClick}>
        <img
          src="../src/Assets/filterImage.svg"
          alt=""
          className="w-5 h-full mt-[2px] ml-4"
        />
        <p className="font-bold">Filter: </p>
        <ChevronDownIcon className="h-6 w-8 text-[#0E556C] ml-[290px]" />
      </div>

      <div className="flex flex-col font-regular ml-[24px]">
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            value="lowest-price"
            checked={filters.includes("lowest-price")}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Lowest Price</span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            value="highest-price"
            checked={filters.includes("highest-price")}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Highest Price</span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            value="highest-rating"
            checked={filters.includes("highest-rating")}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Highest Rating</span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            value="lowest-rating"
            checked={filters.includes("lowest-rating")}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Lowest Rating</span>
        </label>
      </div>
    </div>
  );
};

export default FilterOpen;
