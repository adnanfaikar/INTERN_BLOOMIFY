import React from "react";
import MainLayout from "../Layout/MainLayout";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import failedIcon from "../Assets/red_cancel_icon.png";

const PaymentFailed = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="w-full h-[822px] bg-[#CFE0E6] pt-20">
        <h2 className="flex items-center justify-center text-4xl font-bold text-[#093341] w-full mx-auto">
          Payment Failed
        </h2>
        <img src={failedIcon} alt="" className="mx-auto mt-[120px] w-32 h-32" />
        <div className="flex justify-center mt-32 ">
          <Button
            variation={"primary"}
            className="w-[302px] h-[54px]"
            onClick={() => navigate("/payment")}
          >
            <p className="text-white">Try Again</p>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentFailed;
