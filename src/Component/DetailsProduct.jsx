import React from "react";
import STAR from "../Assets/STAR.svg";
import ProductDetails from "../Assets/Product_Survey.svg";
const DetailsProduct = () => {
  return (
    <div className="w-[184px] h-[363px] bg-white rounded-[20px] border-2 border-PP70 shadow-lg">
      <img src={ProductDetails} alt="" className="rounded-[19px]" />
      <div className="ml-2">
        <p className="font-medium text-sm mt-2 text-PP70">
          Capture Totals Super Potent Cleanser
        </p>
        <p className=" text-sm mt-2 text-PP60">
          Face Cleanser - Anti-Pollution Purifying Foam
        </p>
        <div className="flex mt-2 space-x-2">
          <img src={STAR} alt="" />
          <img src={STAR} alt="" />
          <img src={STAR} alt="" />
          <img src={STAR} alt="" />
          <img src={STAR} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
