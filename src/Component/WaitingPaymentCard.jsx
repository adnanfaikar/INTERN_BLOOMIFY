import React from "react";
import Button from "../UI/Button";
import arrowDown from "../Assets/chevron-down.png";
import Debit from "../Assets/Debit.svg";
import { useNavigate } from "react-router-dom";
const WaitingPaymentCard = (time) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[709px] h-[588px] bg-white rounded-lg shadow-md">
        <div>
          <div className="w-[629px] h-[54px] p-4 bg-PP00  rounded-lg shadow border border-PP70 justify-between items-start inline-flex mx-10 mt-10">
            <div className="text-right text-black">Complete Payment In</div>
            <div className="text-right text-PP50">24 March 2024, 12.37 WIB</div>
          </div>
          <div className="w-[629px] h-28 p-4 bg-[#F1F2F1] rounded-lg shadow border border-PP70 items-start inline-flex mx-10 mt-4 justify-between">
            <div className="text-right text-black justify-between">
              <div className="flex">
                <img src={Debit} alt="" />
                <p className="text-PP70">BCA</p>
              </div>
              <div className="text-PP50 mt-6">BCA Virtual Number</div>
            </div>
            <div className="text-right">
              <p className="text-PP50">#1234567890</p>
              <p className="mt-6 font-semibold">857808213892234</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 space-y-6">
          <Button
            className="w-[629px] h-14"
            variation={"primary"}
            onClick={() => navigate("/paymentsucced")}
          >
            <p>CHECK ORDER STATUS</p>
          </Button>
          <Button
            className="w-[629px] h-14"
            variation={"secondary"}
            onClick={() => navigate("/paymentsucced")}
          >
            <p>CHECK PAYMENT METHOD</p>
          </Button>
          <p>
            Payment method changes can be made up to{" "}
            <b>
              <i>30 minutes</i>{" "}
            </b>{" "}
            after the order.
          </p>
          <div className="rounded-lg border-2 border-black w-[628px] h-[104px] bg-white">
            <div className="flex justify-between items-center mx-9 mt-9 font-semibold text-lg">
              <p>Payment Guidelines</p>
              <img src={arrowDown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingPaymentCard;
