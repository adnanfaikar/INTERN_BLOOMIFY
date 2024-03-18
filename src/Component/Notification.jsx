import React, { useState, useEffect } from "react";
import Button from "../UI/Button";

const Notification = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = (confirmed) => {
    setIsVisible(false);
    setTimeout(() => {
      onClose(confirmed);
    }, 100);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="relative w-[628px] h-[392px] rounded-[20px] shadow-lg bg-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => handleClose(false)}
            >
              <img src="../src/Assets/closeIcon.svg" alt="" />
            </button>
            <p className="text-lg font-semibold mb-4">Are You Sure?</p>
            <div className="flex">
              <Button
                variation={"Button-Alert"}
                onClick={() => handleClose(false)}
              >
                No
              </Button>
              <Button
                variation={"primary"}
                onClick={() => handleClose(true)}
                className="ml-4"
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
