import React from "react";
import MainLayout from "../Layout/MainLayout";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import DetailsProduct from "../Component/DetailsProduct";
const SurveyResult = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="ml-20">
        <div className="flex mt-28 mx-auto ">
          <div>
            <p className="text-PP80 font-bold text-[28px]">
              Your skincare routine recommendation{" "}
            </p>
            <br />
            <p className="text-PP50 text-lg">
              According to your skin analysis we recommend you these products:
            </p>
          </div>
          <Button
            variation={"primary"}
            className="w-[224px] h-[54px] ml-[188px]"
            onClick={() => navigate("/")}
          >
            Submit Questionare
          </Button>
          <Button
            variation={"secondary"}
            className="w-[224px] h-[54px] ml-6"
            onClick={() => navigate("/survey")}
          >
            Retake Questionnaire
          </Button>
        </div>
        <hr class="w-[1280px] h-0 my-4 bg-[#DFDFDF]  " />
        <div className="flex ">
          <p className="font-bold text-PP70 text-base">Step 1:</p>
          <p className="text-PP50 ml-1 text-base">Getting your skin ready</p>
        </div>
        <p className="text-PP60 text-xs">
          Healthy skin starts with the basics. Bring skin back to it’s most
          healthy balance states fo a clear complexion.{" "}
        </p>
        <div className="mt-4 flex space-x-5">
          <DetailsProduct />
          <DetailsProduct />
        </div>
        <hr class="w-[1280px] h-0 my-6 bg-[#DFDFDF]  " />
        <div className="flex ">
          <p className="font-bold text-PP70 text-base">Step 2:</p>
          <p className="text-PP50 ml-1 text-base">Prevent + correct</p>
        </div>
        <p className="text-PP60 text-xs">
          Base on the skin concerns you in dictated, we suggest the following
          products. Use step 2 products after you complete your step 1 to
          achieve optimal results.{" "}
        </p>
        <div className="mt-4 flex space-x-5">
          <DetailsProduct />
          <DetailsProduct />
          <DetailsProduct />
          <DetailsProduct />
        </div>
        <hr class="w-[1280px] h-0 my-6 bg-[#DFDFDF]  " />
        <div className="flex ">
          <p className="font-bold text-PP70 text-base">Step 3:</p>
          <p className="text-PP50 ml-1 text-base">Prevent </p>
        </div>
        <p className="text-PP60 text-xs">
          No skin care routine is complete without a sunscreen.
        </p>
        <div className="mt-4 flex space-x-5">
          <DetailsProduct />
        </div>
      </div>
    </MainLayout>
  );
};

export default SurveyResult;
