import React from "react";
import Button from "../UI/Button";

const ProductCard = ({ imageUrl, title, description, price }) => {
  return (
    <div className="w-[288px] h-[615px] bg-white rounded-xl border border-black shadow-lg text-[#0B4457] text-justify">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[384px] rounded-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        {description && <p className="text-sm">{description}</p>}
        <p className="text-lg font-bold mt-4">IDR {price}</p>
        <Button
          variation={"primary"}
          className="w-[132px] h-[39px] flex items-center justify-center mx-auto mt-5 bg-gray-500 text-white rounded-lg"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
