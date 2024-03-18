import React from "react";
import MainLayout from "../Layout/MainLayout";
import ResultsCard from "../Component/ResultsCard";

const ResultPage = () => {
  return (
    <MainLayout>
      <div className="w-full h-[1710px] bg-PP00 justify-center pt-32 pl-20">
        <div className="font-bold text-4xl text-PP80 ml-[376px]">
          <p>Spa & Massage in Malang</p>
        </div>
        <div className="w-1280 h-[242px]">
          <ResultsCard
            Title="Klinik Kecantikan"
            Category="Spa & Massage"
            Booked="10"
            imageUrl="../src/Assets/SPA1.svg"
            Address="Jl. Jend. Sudirman No. 1, Jakarta"
            NormalPrice={100000}
            Price={80000}
            className="w-[1280px]"
          />
          <ResultsCard
            Title="Klinik Kecantikan"
            Category="Spa & Massage"
            Booked="10"
            imageUrl="../src/Assets/SPA1.svg"
            Address="Jl. Jend. Sudirman No. 1, Jakarta"
            NormalPrice={100000}
            Price={80000}
          />
          <ResultsCard
            Title="Klinik Kecantikan"
            Category="Spa & Massage"
            Booked="10"
            imageUrl="../src/Assets/SPA1.svg"
            Address="Jl. Jend. Sudirman No. 1, Jakarta"
            NormalPrice={100000}
            Price={80000}
          />
          <ResultsCard
            Title="Klinik Kecantikan"
            Category="Spa & Massage"
            Booked="10"
            imageUrl="../src/Assets/SPA1.svg"
            Address="Jl. Jend. Sudirman No. 1, Jakarta"
            NormalPrice={100000}
            Price={80000}
          />
          <ResultsCard
            Title="Klinik Kecantikan"
            Category="Spa & Massage"
            Booked="10"
            imageUrl="../src/Assets/SPA1.svg"
            Address="Jl. Jend. Sudirman No. 1, Jakarta"
            NormalPrice={100000}
            Price={80000}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ResultPage;
