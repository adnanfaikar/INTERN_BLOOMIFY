import React from "react";

const DetailsProduct = () => {
  return (
    <div className="w-[184px] h-[363px] bg-white rounded-[20px] border-2 border-PP70 shadow-lg">
      <img
        src="../src/Assets/Product_Survey.svg"
        alt=""
        className="rounded-[19px]"
      />
      <div className="ml-2">
        <p className="font-medium text-sm mt-2 text-PP70">
          Capture Totals Super Potent Cleanser
        </p>
        <p className=" text-sm mt-2 text-PP60">
          Face Cleanser - Anti-Pollution Purifying Foam
        </p>
        <div className="flex mt-2 space-x-2">
          <img src="../src/Assets/STAR.svg" alt="" />
          <img src="../src/Assets/STAR.svg" alt="" />
          <img src="../src/Assets/STAR.svg" alt="" />
          <img src="../src/Assets/STAR.svg" alt="" />
          <img src="../src/Assets/STAR.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
