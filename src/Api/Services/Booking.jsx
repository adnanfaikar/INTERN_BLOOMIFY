import { axiosInstance } from "../CoreApi";

const handleBooking = async (serviceId, day, time, paymentMethod) => {
  const token = window.localStorage.getItem("token");
  console.log("Token:", token);

  console.log(serviceId, day, time, paymentMethod);
  console.log({
    service_id: serviceId,
    day: day,
    Time: time,
    payment_method: paymentMethod,
  });
  try {
    const response = await axiosInstance.post(
      "api/v1/service/treatment/booking",
      {
        service_id: serviceId,
        day: day,
        Time: time,
        payment_method: paymentMethod,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleBooking };
