import React, { useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import SearchBox from "../Component/SearchBox";
import FilterOpen from "../Component/FilterOpen";
import FilterClose from "../Component/FilterClose";
import DoctorCard from "../Component/DoctorCard";
import ResultsCard from "../Component/ResultsCard";
import { handleSorting, handleDoctor } from "../Api/Services/Sorting";
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

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = async () => {
    try {
      const response =
        category === "doctor"
          ? await handleDoctor(searchTerm, "", "", 1)
          : await handleSorting(searchTerm, "", "", 1);

      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const splitDoctorsIntoRows = (doctors) => {
    const result = [];
    const numColumns = 3;
    let currentRow = [];
    doctors.forEach((doctor, index) => {
      currentRow.push(
        <DoctorCard
          key={doctor.docter_id}
          Name={doctor.doctor_name}
          Specialist={doctor.profession}
          Price={doctor.price}
          Alumnus={doctor.alumnus}
          PracticeSite={doctor.practice_site}
          STRNumber={doctor.str_number}
          imageUrl={doctor.photo_link}
          old={doctor.age}
        />
      );
      if (currentRow.length === numColumns || index === doctors.length - 1) {
        result.push(currentRow);
        currentRow = [];
      }
    });
    return result;
  };

  return (
    <MainLayout>
      <div className="w-full bg-[#CFE0E6] pt-20 ">
        <div className="flex">
          {isFilterOpen ? (
            <FilterOpen onClick={toggleFilter} />
          ) : (
            <FilterClose onClick={toggleFilter} />
          )}
          <div className="xl:w-[844px] h-[50px] md:w-[600px]">
            <SearchBox
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <div className="flex xl:justify-center space-x-6 mt-2">
              <button
                className={`py-3 w-[410px] xl:w-[410px]  md:w-[300px] h-[60px] ${
                  category === "doctor"
                    ? "bg-[#0E556C]  text-white"
                    : "bg-white border-2 border-[#0E556C] text-[#0B4457]"
                } rounded-lg text-center text-2xl`}
                onClick={() => handleCategoryChange("doctor")}
              >
                By Doctor
              </button>
              <button
                className={`py-3 xl:w-[410px] md:w-[300px] h-[60px] ${
                  category === "treatment"
                    ? "bg-[#0E556C]  md:w-[300px] text-white"
                    : "bg-white border-2 border-[#0E556C]  md:w-[300px] text-[#0B4457]"
                } rounded-lg text-center text-2xl`}
                onClick={() => handleCategoryChange("treatment")}
              >
                By Treatment
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-28 overflow-auto">
          <div>
            <p className="text-4xl text-[#093341] font-bold text-center">
              Most Popular
            </p>
            <div className="my-3">
              {category === "doctor" ? (
                <div>
                  {splitDoctorsIntoRows(searchResults).map((row, index) => (
                    <div key={index} className="flex mb-4 space-x-16">
                      {row}
                    </div>
                  ))}
                </div>
              ) : (
                searchResults.map((item) => (
                  <ResultsCard
                    key={item.id}
                    Title={item.name}
                    Category={item.category}
                    Booked={item.Booked}
                    imageUrl={item.photo_link}
                    Address={item.address}
                    NormalPrice={item.NormalPrice}
                    Price={item.price}
                  />
                ))
              )}
            </div>{" "}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BeautyNavigator;
