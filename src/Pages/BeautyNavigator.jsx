import React, { useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import SearchBox from "../Component/SearchBox";
import FilterOpen from "../Component/FilterOpen";
import FilterClose from "../Component/FilterClose";
import ResultsCard from "../Component/ResultsCard";
import dummy from "../utils/dummy";
import { useNavigate } from "react-router-dom";
const BeautyNavigator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const dummyData = dummy;
  const navigate = useNavigate();

  useEffect(() => {
    const filteredData = dummyData.filter((item) =>
      item.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [searchTerm]);

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

  return (
    <MainLayout>
      <div className="w-full h-[1440px] bg-[#CFE0E6] pt-20">
        <div className="flex">
          {isFilterOpen ? (
            <FilterOpen onClick={toggleFilter} />
          ) : (
            <FilterClose onClick={toggleFilter} />
          )}
          <div className="w-[844px] h-[50px]">
            <SearchBox
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <div className="flex justify-between mt-2">
              <button
                className=" py-3 w-[410px] h-[60px] bg-white rounded-lg border-2 border-[#0E556C] text-[#0B4457] text-center text-2xl "
                onClick={() => navigate("/doctorNavigator")}
              >
                By Doctor
              </button>

              <button className="py-3 w-[410px] h-[60px]  bg-[#0E556C] rounded-lg border-2 border-[#0E556C] text-center text-2xl text-white">
                By Treatment
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <div>
            <p className="text-4xl text-[#093341] font-bold text-center">
              Most Popular Spa & Massage
            </p>
            <div className="my-3">
              {searchResults.map((item) => (
                <ResultsCard
                  key={item.id}
                  Title={item.Title}
                  Category={item.Category}
                  Booked={item.Booked}
                  imageUrl={item.imageUrl}
                  Address={item.Address}
                  NormalPrice={item.NormalPrice}
                  Price={item.Price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BeautyNavigator;
