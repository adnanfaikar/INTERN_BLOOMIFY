import React from "react";

const Author = ({ name, reviewer, imageUrl }) => {
  return (
    <div className="w-[846px] h-28 bg-[#F1F2F1] rounded-lg">
      <div className="flex items-center pt-4 pl-4">
        <img src={imageUrl} alt="author" className="w-20 h-20 rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">By {name}</h2>
          <span className="text-lg font-light">Reviewed by {reviewer}</span>
        </div>
      </div>
    </div>
  );
};

export default Author;
