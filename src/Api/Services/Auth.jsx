import { axiosInstance } from "../CoreApi";

const handleLogin = async (body) => {
  try {
    const response = await axiosInstance.post("api/v1/user/login", {
      email: body.email,
      password: body.password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("api/v1/user/register", {
      email: body.email,
      password: body.password,
      full_name: body.username,
      confirm_password: body.confirmPassword,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleLogin, handleRegister };
