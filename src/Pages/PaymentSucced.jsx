import React from "react";
import MainLayout from "../Layout/MainLayout";
import Button from "../UI/Button";

const PaymentSucced = () => {
  return (
    <MainLayout>
      <div className="w-full h-[822px] bg-[#CFE0E6] pt-20">
        <h2 className="flex items-center justify-center text-4xl font-bold text-[#093341] w-full mx-auto">
          Payment Succeed
        </h2>
        <img
          src="../src/Assets/check_mark_in_box_blue.svg"
          alt=""
          className="mx-auto mt-[120px]"
        />
        <div className="flex justify-center mt-32">
          <Button variation={"primary"}>
            <p className="text-white">Set Reminder</p>
          </Button>
          <Button variation={"secondary"} className="ml-2">
            <p className="text-black">Back to Landing Page</p>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentSucced;
