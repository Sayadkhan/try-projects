import React from "react";

const HelpfullToolsCard = () => {
  return (
    <div className="w-[419px] h-[357px] border-[0.7px] rounded-[12px] p-[24px] flex flex-col items-center justify-center  border-[#13D28A99]/60 text-white">
      <div className="w-[56px] h-[56px] border-[1px] rounded-[4px] px-[12px] py-[11px] border-[#13D28A]">
        <img
          src="../../../../icons/icon4.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[318px] h-[68px] opacity-[95%] text-center">
        <p className="font-[600] text-[24px] leading-[33.6px]">
          Lorem Ipsum is simply dummy text
        </p>
      </div>
      <div className="w-[318px] h-[68px] opacity-[95%] text-center">
        <p className="font-[400] text-[18px] leading-[28.8px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen
        </p>
      </div>
    </div>
  );
};

export default HelpfullToolsCard;
