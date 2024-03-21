import React from "react";
import MainLayout from "../Layout/MainLayout";
import WaitingPaymentCard from "../Component/WaitingPaymentCard";
const WaitingPayment = () => {
  return (
    <MainLayout>
      <div className="w-full h-[1220px] bg-PP00">
        <h2 className="flex items-center justify-center text-4xl font-bold text-[#093341] w-full mx-auto pt-32">
          Waiting For Payment
        </h2>
        <div className="flex justify-center mt-20">
          <WaitingPaymentCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default WaitingPayment;
