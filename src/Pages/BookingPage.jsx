import React from "react";
import MainLayout from "../Layout/MainLayout";
import DatePicker from "../Component/DatePicker";
import { useAuth } from "../Hooks/useAuth";

const BookingPage = () => {
  const isAuthenticated = useAuth();
  console.log("Is Authenticated:", isAuthenticated);
  console.log("token :", window.localStorage.getItem("token"));

  return (
    <MainLayout>
      <div className="w-full h-[793px] bg-PP00">
        <div className="flex justify-center h-full">
          <div>
            <p className="text-4xl font-bold text-[#093341] text-center mt-[120px]">
              Booking{" "}
            </p>
            <DatePicker isBooking={true} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingPage;
