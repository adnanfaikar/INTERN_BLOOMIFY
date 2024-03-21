import React from "react";
import MainLayout from "../Layout/MainLayout";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import SuccedIcon from "../Assets/check_mark_in_box_blue.svg";

const PaymentSucced = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="w-full h-[822px] bg-[#CFE0E6] pt-20">
        <h2 className="flex items-center justify-center text-4xl font-bold text-[#093341] w-full mx-auto">
          Payment Succeed
        </h2>
        <img src={SuccedIcon} alt="" className="mx-auto mt-[120px] w-32 h-32" />
        <div className="flex justify-center mt-32 ">
          <Button variation={"primary"} className="w-[302px] h-[54px]">
            <p className="text-white">Set Reminder</p>
          </Button>
          <Button
            variation={"secondary"}
            className="ml-2 w-[302px] h-[54px]"
            onClick={() => navigate("/")}
          >
            <p className="text-black">Back to Landing Page</p>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentSucced;
