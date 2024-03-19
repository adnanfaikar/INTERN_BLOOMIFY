import React from "react";
import MainLayout from "../Layout/MainLayout";
import Date from "../Component/Date";
const BookingPage = () => {
  return (
    <MainLayout>
      <div className="w-full h-[793px] bg-PP00">
        <div className="flex justify-center items-center h-full">
          <div>
            <p className="text-4xl font-bold text-[#093341] text-center mt-[120px]">
              Booking{" "}
            </p>
            <Date />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingPage;
