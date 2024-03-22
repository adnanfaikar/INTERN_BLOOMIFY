import React, { useState } from "react";
import Button from "../UI/Button";
import { handleBooking } from "../Api/Services/Booking";
import { useNavigate } from "react-router-dom";

const DatePicker = ({ isBooking }) => {
  const [bookingError, setBookingError] = useState("");

  const tanggalSekarang = new Date();
  const hari = tanggalSekarang.getDay();
  const navigate = useNavigate();

  const namaHari = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const otherDay = (num) => {
    return new Date(tanggalSekarang.getTime() + 86400000 * num);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const generateTimeButtons = () => {
    const buttons = [];
    for (let i = 12; i <= 19; i++) {
      for (let j = 0; j < 60; j += 60) {
        const hour = i.toString().padStart(2, "0");
        const minute = j.toString().padStart(2, "0");
        const timeString = `${hour}.${minute}`;
        buttons.push(
          <button
            key={timeString}
            className={`text-PP80 text-lg w-[71px] h-[54px] ${
              selectedTime === timeString ? "bg-SS70 text-white rounded-lg" : ""
            }`}
            onClick={() => handleTimeSelect(timeString)}
          >
            <p>{timeString}</p>
          </button>
        );
      }
    }
    return buttons;
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 15; i++) {
      const tanggalLain = otherDay(i);
      const year = tanggalLain.getFullYear();
      const month = (tanggalLain.getMonth() + 1).toString().padStart(2, "0");
      const day = tanggalLain.getDate().toString().padStart(2, "0");
      const dateString = `${year}-${month}-${day}`;

      buttons.push(
        <button
          key={dateString}
          className={`text-PP80 text-lg ${
            selectedDate === dateString ? "bg-SS70 text-white rounded-lg" : ""
          }`}
          onClick={() => handleDateSelect(dateString)}
        >
          <p>{namaHari[tanggalLain.getDay()]}</p>
          <p>{tanggalLain.getDate()}</p>
        </button>
      );
    }
    return buttons;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmitReminder = async () => {};

  const handleSubmit = async () => {
    try {
      if (selectedDate && selectedTime) {
        const response = await handleBooking(
          258,
          selectedDate,
          selectedTime,
          "bca"
        );
        console.log("Booking response:", response);
        if (response.message === "successfully create booking") {
          navigate("/Payment");
        } else {
          console.log("Booking failed:", response.message);
        }
      } else {
        console.log("Please select both date and time.");
      }
    } catch (error) {
      console.error("Error booking:", error);
    }
  };

  return (
    <div className="xl:w-[857px] md:w-[400px] h-[413px] shadow-lg bg-white rounded-[20px] mt-20">
      <p className="font-medium text-2xl text-PP80 text-center pt-5">
        Choose the date you want
      </p>
      <div className="flex overflow-x-auto space-x-10 ml-7 mt-6 xl:w-[805px] md:w-[307px] text-PP80 text-lg pb-4">
        {renderButtons()}
      </div>
      <p className="font-medium text-2xl text-PP80 text-center mt-10">
        Choose the time you want
      </p>
      <div className="flex overflow-x-auto space-x-10 ml-7 mt-10 xl:w-[805px] md:w-[307px] text-PP80 text-lg">
        {generateTimeButtons()}
      </div>
      <Button
        variation={"primary"}
        className="xl:w-[809px] md:w-[300px] ml-7 mt-5"
        onClick={isBooking ? handleSubmit : handleSubmitReminder}
        disabled={!selectedDate || !selectedTime}
      >
        Done
      </Button>
      {bookingError && <p className="text-red-500">{bookingError}</p>}
    </div>
  );
};

export default DatePicker;
