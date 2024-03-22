import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { handleDoctor, handleSorting } from "../Api/Services/Sorting";
import DoctorCard from "../Component/DoctorCard";
import ResultsCard from "../Component/ResultsCard";

const ResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const category = window.localStorage.getItem("Category");
  const searchTerm = window.localStorage.getItem("SearchTerm");
  const handleSearch = async () => {
    try {
      const response =
        category === "doctor"
          ? await handleDoctor(searchTerm, "", "", 1)
          : await handleSorting(searchTerm, "", "", 1);

      setSearchResults(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
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
      <div className="w-full h-[1710px] bg-PP00 justify-center pt-4 pl-20">
        <div>
          <p className="text-4xl text-[#093341] font-bold text-center">
            Most Popular
          </p>
          <div className="flex flex-col justify-center items-center my-3 ">
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
    </MainLayout>
  );
};

export default ResultPage;
