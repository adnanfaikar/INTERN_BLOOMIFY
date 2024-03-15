import React from "react";
import MainLayout from "../Layout/MainLayout";

const Payment = () => {
  return (
    <MainLayout>
      <div className="w-full h-[822px] bg-[#CFE0E6] pt-20">
        <h2 className="flex items-center justify-center text-4xl font-bold text-[#093341] w-full mx-auto">
          Payment
        </h2>
        <div className="flex justify-center mt-20">
          <div className="flex items-center w-[890px] h-[306px] bg-white rounded-3xl shadow-lg mx-auto">
            <div className="w-[435px] h-[177px] shadow-2xl rounded-2xl ml-7">
              <div className="w-[400px] h-16 flex">
                <img
                  src="../src/Assets/SPA1.svg"
                  alt=""
                  className="w-[87px] h-16 rounded-2xl"
                />
                <div className="ml-4">
                  <p className="font-semibold text-[#06222B] mt-3">
                    Order Summary
                  </p>
                  <p className=" text-[#06222B] mt-1">Spa & Message</p>
                </div>
              </div>

              <div className="flex justify-between w-[400px] h-16">
                <p className="text-[#06222B] mt-3 ml-4 font-medium">
                  Total Amount
                </p>
                <p className="text-[#975039] mt-3 mr-4 font-semibold">
                  IDR 100.000
                </p>
              </div>
            </div>
            <div className="ml-9">
              <p className="font-bold ">Credits & Debit Cards</p>
              <div className="flex w-[362px] h-24 shadow-xl rounded-2xl">
                <img
                  src="../src/Assets/gopay.svg"
                  alt=""
                  className="w-8 h-8 mt-10 ml-4"
                />
                <label for="default-radio-1" className="mt-11 ml-2">
                  Gopay **** **** **** 8395
                </label>
                <input
                  id="default-radio-1"
                  type="radio"
                  name="radio-1"
                  className="mt-2 ml-11"
                />
              </div>
              <div className="flex w-[362px] h-24 shadow-xl rounded-2xl">
                <img
                  src="../src/Assets/Debit.svg"
                  alt=""
                  className="w-8 h-8 mt-10 ml-4"
                />
                <label for="default-radio-2" className="mt-11 ml-2">
                  BCA **** **** **** 7684
                </label>
                <input
                  id="default-radio-2"
                  type="radio"
                  name="radio-1"
                  className="mt-3 ml-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;
