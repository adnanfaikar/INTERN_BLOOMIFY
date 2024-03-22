import React from "react";
import MainLayout from "../Layout/MainLayout";
import sadface from "../Assets/sadFace.svg";

const ErrorPage = () => {
  return (
    <MainLayout>
      <div className="w-full h-[788px] bg-PP00 relative flex justify-center items-center">
        <div className="w-[846px] h-[548px] rounded-[20px] shadow-lg bg-white">
          <img src={sadface} alt="" className="mt-10 ml-10" />
          <div className="flex justify-center items-center h-full">
            <div>
              <p className="text-9xl font-bold text-[#093341] text-center -mt-52">
                404
              </p>
              <p className="text-5xl text-center">Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
