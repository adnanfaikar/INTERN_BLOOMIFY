import React from "react";
import MainLayout from "../Layout/MainLayout";
const ProfilePage = (user) => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="bg-PP00 w-[410px] h-[50px] mx-auto rounded-lg shadow-md">
          <h1 className="text-2xl  text-[#093341] text-center py-2">
            Hi, Frederico!
          </h1>
        </div>
        <div className="mx-auto my-[120px] space-y-6 font-medium text-2xl text-center text-PP60 flex flex-col items-center">
          <button>
            <p>My Account</p>
          </button>
          <button>
            <p>Bloomify Point</p>
          </button>
          <button>
            <p>Personalized Skin</p>
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
