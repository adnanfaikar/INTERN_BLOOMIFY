import React, { useState } from "react";

const SurveyRadioButton = ({ option1, option2, option3, option4 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex w-[681px] h-[128px] rounded-[20px] bg-white shadow-lg">
      <div className="flex items-center  mx-auto mt-5">
        <div>
          <input
            type="radio"
            id="option1"
            value={option1}
            onChange={handleChange}
            checked={selectedOption === option1}
            className="flex mr-[80px] mx-auto items-center ring-PP30"
          />{" "}
          <label className="text-lg text-[#975039]">{option1}</label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            value={option2}
            className="mr-[80px]"
            onChange={handleChange}
            checked={selectedOption === option2}
          />{" "}
          <br />
          <label className="text-lg text-[#975039]">{option2}</label>
        </div>
        <div>
          <input
            type="radio"
            id="option3"
            value={option3}
            className="mr-[80px]"
            onChange={handleChange}
            checked={selectedOption === option3}
          />{" "}
          <br />
          <label className="text-lg text-[#975039]">{option3}</label>
        </div>

        <div>
          <input
            type="radio"
            id="option4"
            value={option4}
            className="mr-[80px]"
            onChange={handleChange}
            checked={selectedOption === option4}
          />{" "}
          <br />
          <label className="text-lg text-[#975039]">{option4}</label>
        </div>
      </div>
    </div>
  );
};

export default SurveyRadioButton;
