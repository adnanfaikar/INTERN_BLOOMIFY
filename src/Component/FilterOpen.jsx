import React, { useState } from "react";

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
    <div
      className="filter  w-[410px] h-[208px] bg-white rounded-xl shadow-lg mr-20 ml-[80px] text-[#0B4457]"
      onClick={onClick}
    >
      <div className="font-bold ml-4 mt-4 ">
        <h3>Filter:</h3>
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
