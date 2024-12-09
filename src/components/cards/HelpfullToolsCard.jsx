import React from "react";

const HelpfullToolsCard = () => {
  return (
    <div className="h-auto sm:h-[357px] border-[0.7px] rounded-[12px] p-[24px] flex flex-col items-center justify-center border-[#13D28A99]/60 text-white">
      {/* Icon Container */}
      <div className="w-[56px] h-[56px] border-[1px] rounded-[4px] px-[12px] py-[11px] border-[#13D28A] mb-4">
        <img
          src="../../../../icons/icon4.png"
          alt="Icon"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="w-full sm:w-[318px] h-auto opacity-[95%] text-center mb-4">
        <p className="font-[600] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[33.6px]">
          Lorem Ipsum is simply dummy text
        </p>
      </div>

      {/* Description */}
      <div className="w-full sm:w-[318px] md:w-[310px] h-auto opacity-[95%] text-center">
        <p className="font-[400] text-[14px] sm:text-[18px] leading-[22px] sm:leading-[28.8px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen.
        </p>
      </div>
    </div>
  );
};

export default HelpfullToolsCard;
