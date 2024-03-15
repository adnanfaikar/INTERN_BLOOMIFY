import React from "react";
import MainLayout from "../Layout/MainLayout";
import SurveyRadioButton from "../Component/SurveyRadioButton";
import Button from "../UI/Button";
const Survey = () => {
  return (
    <MainLayout>
      <p className="font-bold text-[40px] text-[#093341] text-center mt-[120px]">
        Let's find out which product is right for you
      </p>

      <p className="text-[#822D11] text-2xl text-center font-semibold mt-10">
        Fill in according to what you experienced!
      </p>
      <div className=" mx-auto w-[1062px] h-[2090px] bg-[#CFE0E6] rounded-[40px] mt-20">
        <p className="font-semibold text-[#093341] text-2xl text-center pt-[80px]">
          Bagaimana tingkat kekeringan kulit Anda pada umumnya?
        </p>
        <div className="flex items-center  mx-auto mt-5 ml-[190px] pt-[40px]">
          <SurveyRadioButton
            option1="Dry"
            option2="Normal"
            option3="Oily"
            option4="Combination"
          />
        </div>

        <p className="font-semibold text-[#093341] text-2xl text-center mt-[60px]">
          Apakah Anda sering mengalami jerawat atau komedo?
        </p>
        <div className="flex items-center  mx-auto mt-5 ml-[190px]  pt-[40px]">
          <SurveyRadioButton
            option1="Dry"
            option2="Normal"
            option3="Oily"
            option4="Combination"
          />
        </div>
        <p className="font-semibold text-[#093341] text-2xl text-center mt-[60px]">
          Bagaimana reaksi kulit Anda terhadap produk baru atau perubahan cuaca?
        </p>
        <div className="flex items-center  mx-auto mt-5 ml-[190px] pt-[40px]">
          <SurveyRadioButton
            option1="Dry"
            option2="Normal"
            option3="Oily"
            option4="Combination"
          />
        </div>
        <p className="font-semibold text-[#093341] text-2xl text-center mt-[60px]">
          Apakah area kulit Anda cenderung berminyak, kering, atau normal?
        </p>
        <div className="flex items-center  mx-auto mt-5 ml-[190px] pt-[40px]">
          <SurveyRadioButton
            option1="Dry"
            option2="Normal"
            option3="Oily"
            option4="Combination"
          />
        </div>
        <p className="font-semibold text-[#093341] text-2xl text-center mt-[60px]">
          Apakah kulit Anda mengalami iritasi terhadap produk yang mengandung
          bahan kimia atau pewangi?
        </p>
        <div className="flex items-center  mx-auto mt-5 ml-[190px] pt-[40px]">
          <SurveyRadioButton
            option1="Dry"
            option2="Normal"
            option3="Oily"
            option4="Combination"
          />
        </div>
        <p className="font-semibold text-[#093341] text-2xl text-center mt-[60px]">
          Bagaimana kondisi kulit Anda saat bangun tidur di pagi hari?
        </p>
        <div className="flex items-center  mx-auto mt-5 ml-[190px] pt-[40px]">
          <SurveyRadioButton
            option1="Dry"
            option2="Normal"
            option3="Oily"
            option4="Combination"
          />
        </div>
        <p className="font-semibold text-[#093341] text-2xl text-center  mt-[60px]">
          Seberapa sering Anda merasa puas dengan kondisi kulit Anda saat ini?
        </p>
        <div className="flex items-center  mx-auto mt-5 ml-[190px] pt-[40px]">
          <SurveyRadioButton
            option1="Dry"
            option2="Normal"
            option3="Oily"
            option4="Combination"
          />
        </div>
      </div>
      <Button variation={"primary"} className="ml-[220px] w-[1062px] m-20">
        <p className="text-white text-lg">See Product Recomendation</p>
      </Button>
    </MainLayout>
  );
};

export default Survey;
