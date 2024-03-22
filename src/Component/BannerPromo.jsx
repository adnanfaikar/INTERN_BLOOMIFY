import React from "react";

const BannerPromo = ({ imageUrl, title, description, promo }) => {
  return (
    <div className="w-full h-[384px] bg-[#CFE0E6] flex">
      <div className="">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[384px]  object-cover "
        />
      </div>
      <div className="items-center justify-center ml-20 mt-20">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-2xl mt-2 text-[#0E556C] font-bold">{promo}</p>
        <p className="text-base mt-1 text-[#0B4457]">{description}</p>
        <p className="text-xl text-[#0B4457] font-bold">
          Visit our platform to find out more about our special offers in
          treatment and skincare products.{" "}
        </p>
      </div>
    </div>
  );
};

export default BannerPromo;
