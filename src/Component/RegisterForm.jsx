import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import LogReg from "../Layout/LogReg";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../Api/Services/Auth";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.password !== form.confirmPassword) {
        setError("Password and Confirm Password must match.");
        return;
      }

      const userData = await handleRegister(form);
      console.log("Registration successful! User data:", userData);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.message);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <LogReg>
      <h6 className="text-[60px]  font-bold mx-auto mt-[72px] text-center justify-center">
        Sign Up
      </h6>
      <p className="text-center mt-0 ">
        Already have an account? <a href="/login">Sign In</a>
      </p>
      <form onSubmit={handleSubmit}>
        <p className="mt-2 font-bold">Name *</p>
        <Input
          type="text"
          name={"full_name"}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required={true}
        />
        <p className="mt-2 font-bold">E-Mail *</p>
        <Input
          type="email"
          name={"email"}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required={true}
        />
        <p className="mt-2 font-bold">Password *</p>
        <Input
          type="password"
          name={"password"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required={true}
        />
        <p className="mt-2 font-bold">Confirm Password *</p>
        <Input
          type="password"
          name={"confirmPassword"}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
          required={true}
        />
        {error && <p className="text-red-500">{error}</p>}{" "}
        <Button
          variation={"primary"}
          className="w-[480px] mt-[24px] mb-3"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </LogReg>
  );
};
export default RegisterForm;
