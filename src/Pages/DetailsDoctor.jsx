import React from "react";
import MainLayout from "../Layout/MainLayout";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import Doctor from "../Assets/Doctor.svg";
import STAR from "../Assets/STAR.svg";
import IO_PERSON from "../Assets/IO_PERSON.svg";
const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="w-full h-[630px] bg-[url('../src/Assets/Doctor.svg')] bg-no-repeat bg-cover"></div>
      <div class="flex justify-center items-center -mt-28">
        <div class="rounded-[40px] bg-PP00 w-[90vw] max-w-[1062px] h-[208px]">
          <div className="flex mt-9 ml-8 ">
            <p className="font-semibold text-[40px]">Dr. Hendri Kurniawan</p>
            <div className="w-28 h-8 bg-PP70 text-[12px] text-white rounded-[20px]  mt-4 pt-1.5 pl-2 ml-[450px]">
              <p>Official Partner</p>
            </div>
          </div>
          <div className="flex ml-8 mt-6">
            <div className="flex">
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
            </div>
            <div className="w-[649px] h-[68px] flex">
              <p className="font-medium text-pp70">
                Dermatologist with 5 years experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1060px] h-[550px] mx-auto mt-[120px]">
        <p className="text-PP80 font-semibold text-2xl">Dermatologist</p>
        <p className="text-PP40 text-2xl text-justify">
          A dermatologist is a medical professional who specializes in treating
          skin, hair, and nail problems. They have in-depth knowledge of various
          skin conditions. Dermatologists can diagnose, treat and prevent skin
          diseases using a variety of methods, from medical procedures to
          cosmetic treatments.
        </p>
        <div className="flex mt-[114px]">
          <div className="mr-8">
            <p className="font-semibold text-2xl">Start From</p>
            <p className="text-PP50 text-2xl">IDR 100.000</p>
          </div>
          <div className="flex items-start ml-[400px]">
            <div className="mr-4 ml">
              <p className="text-2xl font-semibold">Review</p>
              <div className="flex items-center mt-4">
                <img src={IO_PERSON} alt="" className="w-9 h-9" />
                <div className="ml-2">
                  <p className="font-medium text-xl">Lionel Ronaldo</p>
                  <p className="">Its Really Nice Treatment!</p>
                </div>
              </div>
            </div>
            <div className="flex items-center ml-8 mt-11">
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
              <img src={STAR} alt="" className="w-8 h-8 mr-1" />
            </div>
          </div>
        </div>
        <Button
          variation={"primary"}
          className="w-full my-[100px]"
          onClick={() => navigate("/Booking")}
        >
          <p className="text-white">Book Now</p>
        </Button>
      </div>
    </MainLayout>
  );
};

export default DetailsPage;
