import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div>
        <p className="text-[48px] font-[700] text-center leading-[48px] font-montserrat text-[#FFFFFF]">
          {title}
        </p>
      </div>
      <div>
        {description && (
          <p className="font-[400] text-[20px] leading-[20px] text-center font-montserrat text-[#FFFFFF]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
