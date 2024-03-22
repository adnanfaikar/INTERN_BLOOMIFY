import React from "react";
import MainLayout from "../Layout/MainLayout";
import DatePicker from "../Component/DatePicker";

const ReminderPage = () => {
  return (
    <MainLayout>
      <div className="w-full h-[793px] bg-white">
        <div className="flex justify-center h-full">
          <div>
            <p className="text-4xl font-bold text-[#093341] text-center mt-[120px]">
              Reminder Appointment{" "}
            </p>
            <DatePicker isBooking={false} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReminderPage;
