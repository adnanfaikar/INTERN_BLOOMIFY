import React from "react";
import Navbar from "../shared/Navbar";
import Button from "../UI/Button";
import Footer from "../Component/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-10 px-10">
        <div class="w-full h-[432px] bg-[#CDC1B3] border border-gray-400 flex justify-center items-center">
          <div>
            <h6 className="font-bold text-center text-[40px] text-[#4D4133] italic flex justify-center">
              Find the Perfect Solution for Your Skin
            </h6>
            <br />
            <Button
              variation={"primary"}
              className="text-center flex justify-center mx-auto px-auto"
            >
              Find Out Here
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-10 px-[40px]">
        <div className="w-[650px] h-[297px] bg-[#CDC1B3] border border-gray-400 rounded-lg mb-10">
          <Button
            variation={"primary"}
            className="text-center flex justify-center mt-28 mx-auto px-auto"
          >
            Go now!
          </Button>
        </div>
        <div className="w-[650px] h-[297px] bg-[#CDC1B3] border border-gray-400 rounded-lg mb-2">
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
