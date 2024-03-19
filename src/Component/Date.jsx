import React from "react";

const Date = () => {
  const tanggalSekarang = new window.Date();
  const tanggalHanyaAngka = tanggalSekarang.getDate();
  const hari = tanggalSekarang.getDay();

  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const otherDay = (num) => {
    tanggalSekarang.getTime() + 86400000 * num;
  };

  console.log(`Tanggal: ${tanggalHanyaAngka}`);
  console.log(`Hari: ${namaHari[hari]}`);
  return (
    <div className="w-[857px] h-[413px] shadow-lg bg-white rounded-[20px] mt-20">
      <p className="font-medium text-2xl text-PP80 text-center pt-5">
        Choose Date you want to remind
      </p>
      <button>
        <p>{namaHari[hari]}</p>
        <p>{tanggalHanyaAngka}</p>
      </button>
    </div>
  );
};

export default Date;
