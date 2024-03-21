import React from "react";

const DoctorCard = ({
  Name,
  Specialist,
  Price,
  Alumnus,
  PracticeSite,
  STRNumber,
  imageUrl,
  old,
}) => {
  return (
    <div className="w-[335px] h-[695px] border-2 border-black rounded-2xl px-[20px] bg-white">
      <div className=" h-[295px] w-[295px]  pt-7 ">
        <img src={imageUrl} alt="" className="rounded-xl" />
      </div>
      <p className="font-bold text-xl mt-8">{Name}</p>
      <p className="font-bold mt-5">{Specialist}</p>
      <p className="text-xl text-[#C6362E] pt-[8px]">IDR {Price}</p>
      <div className="flex pt-[8px]">
        <div className="w-16 h-[18px] bg-[#B0CCD5] rounded-[20px]">
          <p className="text-[8px] pt-[3px] pl-2">{old} Years Old</p>
        </div>
        <div className="flex ml-2">
          <img src="../src/Assets/STAR.svg" alt="" className="w-5 h-5 mx-1" />
          <img src="../src/Assets/STAR.svg" alt="" className="w-5 h-5 mx-1" />
          <img src="../src/Assets/STAR.svg" alt="" className="w-5 h-5 mx-1" />
          <img src="../src/Assets/STAR.svg" alt="" className="w-5 h-5 mx-1" />
          <img src="../src/Assets/STAR.svg" alt="" className="w-5 h-5 mx-1" />
        </div>
      </div>
      <p className="pt-2">Alumnus</p>
      <p className="w-52 h-[30px] bg-[#B0CCD5] rounded-[20px] pl-2 pt-1">
        {Alumnus}
      </p>
      <p className="pt-2">Practice Site</p>
      <p className="w-52 h-[30px] bg-[#B0CCD5] rounded-[20px] pl-2 pt-1">
        {PracticeSite}
      </p>
      <p className="pt-2">STR Number</p>
      <p className="w-52 h-[30px] bg-[#B0CCD5] rounded-[20px] pl-2 pt-1">
        {STRNumber}
      </p>
    </div>
  );
};

export default DoctorCard;
