import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import SearchBox from "../Component/SearchBox";
import FilterOpen from "../Component/FilterOpen";
import FilterClose from "../Component/FilterClose";
import DoctorCard from "../Component/DoctorCard";
import ResultsCard from "../Component/ResultsCard";
import dummyDoctor from "../utils/dummyDoctor.json";
import dummyTreatment from "../utils/dummy.json";
import { useNavigate } from "react-router-dom";

const BeautyNavigator = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("doctor");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const dummyData = category === "doctor" ? dummyDoctor : dummyTreatment;

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
                className={`py-3 w-[410px] h-[60px] ${
                  category === "doctor"
                    ? "bg-[#0E556C] text-white"
                    : "bg-white border-2 border-[#0E556C] text-[#0B4457]"
                } rounded-lg text-center text-2xl`}
                onClick={() => handleCategoryChange("doctor")}
              >
                By Doctor
              </button>
              <button
                className={`py-3 w-[410px] h-[60px] ${
                  category === "treatment"
                    ? "bg-[#0E556C] text-white"
                    : "bg-white border-2 border-[#0E556C] text-[#0B4457]"
                } rounded-lg text-center text-2xl`}
                onClick={() => handleCategoryChange("treatment")}
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
            <div className="my-3">
              {category === "doctor" ? (
                <div className="flex space-x-10">
                  {dummyData.map((item) => (
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
              ) : (
                dummyData.map((item) => (
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BeautyNavigator;
