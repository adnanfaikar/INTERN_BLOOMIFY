const HandlePayment = async (data) => {
  try {
    const response = await axiosInstance.post("api/v1/payment", {
      data,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
