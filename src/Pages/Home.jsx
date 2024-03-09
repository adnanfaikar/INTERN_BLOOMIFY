import React from "react";
import Navbar from "../shared/Navbar";
import Button from "../UI/Button";
import Footer from "../Component/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-10 px-10">
        <div class="w-full h-[432px] bg-[#CFE0E6] border border-gray-400 flex justify-center items-center ">
          <div className="bg-[url('../src/Assets/Banner-Photo.svg')] bg-cover w-[642px] h-[361px] -ml-12"></div>
          <div className="w-[475px] h-[377px] text-left pl-10 pt-5">
            <h6 className="font-bold text-[#093341]  flex text-3xl ">
              WELCOME TO <br /> BLOOMIFY
            </h6>
            <p>
              Not sure where to start? Explore our informative articles, how-to
              guides, product recommendations and consultations to gain valuable
              insights into your beauty and wellness journey.
            </p>
            <Button variation={"primary"} className="w-full mt-10">
              Find Now
            </Button>
            <br />
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-10 px-[40px]">
        <div className="w-[650px] h-[297px] bg-[#CFE0E6] border border-gray-400 rounded-lg mb-10">
          <Button
            variation={"primary"}
            className="text-center flex justify-center mt-28 mx-auto px-auto"
          >
            Go now!
          </Button>
        </div>
        <div className="w-[650px] h-[297px] bg-[#CFE0E6] border border-gray-400 rounded-lg mb-2">
          <Button
            variation={"primary"}
            className="text-center flex justify-center mt-28 mx-auto px-auto "
          >
            Go now!
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
