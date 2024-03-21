// Import axiosInstance dari CoreApi
import { axiosInstance } from "../CoreApi";

// Fungsi untuk melakukan booking
const handleBooking = async (serviceId, day, time, paymentMethod) => {
  // Mendapatkan token dari local storage
  const token = window.localStorage.getItem("token");

  try {
    // Melakukan POST request ke API booking
    const response = await axiosInstance.post(
      "api/v1/service/treatment/booking",
      {
        // Data yang dibutuhkan untuk booking
        service_id: serviceId,
        day: day,
        Time: time,
        payment_method: paymentMethod,
      },
      {
        // Mengatur header Authorization dengan token
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Mengembalikan data respons dari API
    return response.data;
  } catch (error) {
    // Melemparkan error jika terjadi kesalahan pada request
    throw error;
  }
};

export { handleBooking };
