import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Footer from "../shared/Footer";
import LogReg from "../Layout/LogReg";

const RegisterForm = () => {
  return (
    <LogReg>
      <h6 className="text-[60px]  font-bold mx-auto mt-[72px] text-center justify-center">
        Sign Up
      </h6>
      <p className="text-center mt-0 ">
        Already have an account? <a href="/Login">Sign In</a>
      </p>
      <form action="">
        <p className="mt-2 font-bold">Name *</p>
        <Input
          type="text"
          name={"username"}
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
          name={"password"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required={true}
        />
        <Button variation={"primary"} className="w-[480px] mt-[24px] mb-3">
          Sign Up
        </Button>
      </form>
    </LogReg>
  );
};
export default RegisterForm;
