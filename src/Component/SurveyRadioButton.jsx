import React from "react";

const SurveyRadioButton = ({ option1, option2, option3, option4 }) => {
  return (
    <div className="flex w-[681px] h-[128px] rounded-[20px] bg-white shadow-lg">
      <div className="flex items-center  mx-auto mt-5">
        <div>
          <input
            type="radio"
            name="survey"
            id="option1"
            value={option1}
            className="flex mr-[80px] mx-auto items-center"
          />{" "}
          <label htmlFor="option1" className="text-lg text-[#975039]">
            {option1}
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="survey"
            id="option2"
            value={option2}
            className="mr-[80px]"
          />{" "}
          <br />
          <label htmlFor="option2" className="text-lg text-[#975039]">
            {option2}
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="survey"
            id="option3"
            value={option3}
            className="mr-[80px]"
          />{" "}
          <br />
          <label htmlFor="option3" className="text-lg text-[#975039]">
            {option3}
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="survey"
            id="option4"
            value={option4}
            className="mr-[80px]"
          />{" "}
          <br />
          <label htmlFor="option4" className="text-lg text-[#975039]">
            {option4}
          </label>
        </div>
      </div>
    </div>
  );
};

export default SurveyRadioButton;
