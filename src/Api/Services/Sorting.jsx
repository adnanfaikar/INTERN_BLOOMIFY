import { axiosInstance } from "../CoreApi";

const handleSorting = async (city, price, rating, page) => {
  try {
    const response = await axiosInstance.get(
      "api/v1/service/beauty-clinic/search",
      {
        city,
        price,
        rating,
        page,
      }
    );
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleSorting };
