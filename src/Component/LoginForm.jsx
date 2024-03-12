import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Footer from "../shared/Footer";
import LogReg from "../Layout/LogReg";

const LoginForm = () => {
  return (
    // <div className="text-[#0B4457] ">
    //   <div className="flex">
    //     <div className="w-[745px] h-[934px] bg-[#0E556C] flex items-center justify-between ">
    //       <div className="bg-[url('../src/Assets/PersonImages.svg')] bg-cover w-full h-full text-white">
    //         <h5 className="text-5xl font-bold ml-10 mt-[655px]">
    //           Find Your Confidence <br /> Here.
    //         </h5>
    //         <p className="ml-10 text-xl">
    //           Start to bloom your confidence with Bloomify
    //         </p>
    //       </div>
    //       <div className=""></div>
    //     </div>

    //   </div>
    //   <Footer />
    // </div>

    <LogReg>
      <h6 className="text-[60px]  font-bold mx-auto mt-[72px] text-center justify-center">
        Sign in
      </h6>
      <p className="text-center mt-0 ">
        Don't Have an account? <a href="/Register">Sign Up</a>
      </p>
      <div className="w-[519px]  mx-auto mt-20 flex justify-center">
        <form action="">
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

          <Button variation={"primary"} className="w-[480px] mt-[24px] mb-3">
            Sign In
          </Button>
        </form>
      </div>
    </LogReg>
  );
};
export default LoginForm;
