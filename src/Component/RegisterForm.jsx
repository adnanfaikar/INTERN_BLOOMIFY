import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const RegisterForm = () => {
  return (
    <div className="text-[#675744] ">
      <h6 className="text-[60px]  font-bold mx-auto mt-[72px] text-center justify-center">
        Sign Up
      </h6>
      <p className="text-center mt-0 ">
        Already Have an account? <a href="/login">Sign In</a>
      </p>
      <div className="w-[519px]  mx-auto mt-20 flex justify-center">
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
          <Button variation={"primary"} className="w-[480px] mt-[24px]">
            Sign Up
          </Button>
        </form>
        <div className="flex items-center m-3">
          <p>Or</p>
          <Button variation={"primary"} className="w-[380px] m-10 ">
            Sign Up With Google
          </Button>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
