import React from "react";
import { useNavigate } from "react-router-dom";

const HelpfullToolsCard = ({ info }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (info.articalLiink === "/") {
      // Redirect to the home page
      navigate("/");
    } else {
      // Open the link in a new tab
      window.open(info.articalLiink, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="h-full border-[0.7px] rounded-[12px] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-between gap-5 border-[#13D28A99]/60 text-white bg-transparent">
      {/* Icon Container */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-[56px] h-[56px] lg:w-[70px] lg:h-[70px] border-[1px] rounded-[4px] flex items-center justify-center border-[#13D28A] mb-4">
          <img
            src="../../../../icons/icon4.png"
            alt="Icon"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Title */}
        <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-center leading-tight">
          {info.title}
        </p>
      </div>

      {/* Description */}
      <div className="flex-grow text-center">
        <p className="font-normal h-44 md:h-48 lg:h-56 text-sm sm:text-base lg:text-lg leading-relaxed">
          {info.description}
        </p>
      </div>

      {/* Button */}
      <div>
        <button
          onClick={handleButtonClick}
          className="w-[120px] lg:w-[140px] h-[40px] lg:h-[44px] rounded-[6px] border-none py-[10px] px-[20px] flex items-center justify-center text-black bg-[#13D28A] text-sm lg:text-base"
        >
          <span>Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default HelpfullToolsCard;
