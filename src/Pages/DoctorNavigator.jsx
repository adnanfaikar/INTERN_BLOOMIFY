import React, { useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import SearchBox from "../Component/SearchBox";
import FilterOpen from "../Component/FilterOpen";
import FilterClose from "../Component/FilterClose";
import DoctorCard from "../Component/DoctorCard";
import dummyData from "../utils/dummyDoctor.json";
import { useNavigate } from "react-router-dom";

const DoctorNavigator = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    setSearchResults(dummyData);
  }, []);

  useEffect(() => {
    const filteredData = dummyData.filter((item) => {
      if (selectedFilters.includes("lowest-price")) {
        return item.Price === Math.min(...dummyData.map((item) => item.Price));
      } else if (selectedFilters.includes("highest-price")) {
        return item.Price === Math.max(...dummyData.map((item) => item.Price));
      } else if (selectedFilters.includes("highest-rating")) {
      } else if (selectedFilters.includes("lowest-rating")) {
      }
      return true;
    });
    setSearchResults(filteredData);
  }, [selectedFilters]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Search term:", searchTerm);
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <MainLayout>
      <div className="w-full h-[1440px] bg-[#CFE0E6] pt-20">
        <div className="flex">
          {isFilterOpen ? (
            <FilterOpen
              onClick={toggleFilter}
              onFilterChange={handleFilterChange}
            />
          ) : (
            <FilterClose onClick={toggleFilter} />
          )}
          <div className="w-[844px] h-[50px]">
            <SearchBox
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <div className="flex justify-between mt-2">
              <button className=" py-3 w-[410px] h-[60px] bg-[#0E556C] rounded-lg text-white text-center text-2xl ">
                By Doctor
              </button>
              <button
                className="py-3 w-[410px] h-[60px] bg-white rounded-lg border-2 border-[#0E556C] text-center text-2xl text-[#0B4457]"
                onClick={() => navigate("/BeautyNavigator")}
              >
                By Treatment
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <div>
            <p className="text-4xl text-[#093341] font-bold text-center">
              Most Popular
            </p>
            <div className="my-3 flex space-x-10">
              {searchResults.map((item) => (
                <DoctorCard
                  key={item.id}
                  Name={item.Name}
                  Specialist={item.Specialist}
                  Price={item.Price}
                  Old={item.Old}
                  Alumnus={item.Alumnus}
                  PracticeSite={item.PracticeSite}
                  STRNumber={item.STRNumber}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DoctorNavigator;
