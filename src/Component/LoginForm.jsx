import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

import LogReg from "../Layout/LogReg";
import { handleLogin } from "../Api/Services/Auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await handleLogin(form);

      console.log("Login successful! User data:", userData);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      setError("Invalid email or password.");
    }
  };

  return (
    <LogReg>
      <h6 className="text-[60px]  font-bold mx-auto mt-[72px] text-center justify-center">
        Sign in
      </h6>
      <p className="text-center mt-0 ">
        Don't Have an account? <a href="/Register">Sign Up</a>
      </p>
      <div className="w-[519px]  mx-auto mt-20 flex justify-center">
        <form onSubmit={handleSubmit}>
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
          {error && <p className="text-red-500">{error}</p>}{" "}
          <Button
            variation={"primary"}
            className="w-[480px] mt-[24px] mb-3"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </div>
    </LogReg>
  );
};
export default LoginForm;
