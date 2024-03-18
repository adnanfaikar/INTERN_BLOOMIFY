import React from "react";

const ResultsCard = ({
  Title,
  Category,
  Booked,
  imageUrl,
  Address,
  NormalPrice,
  Price,
  className,
}) => {
  return (
    <div
      className={`w-[1020px] h-[242px] flex bg-white rounded-2xl border-2 border-[#0B4457] shadow-xl my-10 ${className}`}
    >
      <div className="flex">
        <img
          src={imageUrl}
          alt={Title}
          className="rounded-xl w-[316px] h-[210px] m-4"
        />
        <div className="mt-4 w-[408px]">
          <h3 className="font-semibold text-2xl">Special Offers</h3>
          <h3 className="text-[#0E556C] font-semibold text-xl mt-3">{Title}</h3>
          <div className="flex w-6 h-6 mt-5">
            <img src="../src/Assets/STAR.svg" alt="" className="mr-1" />
            <img src="../src/Assets/STAR.svg" alt="" className="mr-1" />
            <img src="../src/Assets/STAR.svg" alt="" className="mr-1" />
            <img src="../src/Assets/STAR.svg" alt="" className="mr-1" />
            <img src="../src/Assets/STAR.svg" alt="" className="mr-1" />
          </div>
          <div className="w-[118px] h-6 bg-[#398097] rounded-2xl mt-6">
            <h3 className="text-white font-semibold text-xs text-center pt-1">
              {Category}
            </h3>
          </div>
          <h3 className="text-base text-[#0E556C] font-semibold mt-3">
            {Address}
          </h3>
        </div>
        <div className="mt-3 ml-4">
          <div className="">
            <h3 className="text-white font-medium text-xs  w-[190px] h-9 bg-[#398097] rounded-lg text-center py-2.5">
              Booked {Booked} times this month
            </h3>

            <p className="line-through text-[#97999E] text-base text-right mt-4">
              {NormalPrice && `IDR. ${NormalPrice}`}
            </p>
            <p className="font-semibold text-[#975039] text-2xl text-right">
              IDR. {Price}
            </p>
            <button className="w-[189px] h-12 bg-[#822D11] rounded-lg mt-11  hover:bg-[#398097]">
              <p className="text-2xl text-white ">Order Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
