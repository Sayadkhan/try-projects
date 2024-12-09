import React from "react";
import { IoIosStar } from "react-icons/io";

const RattingCard = ({ info }) => {
  return (
    <div className="w-full max-w-[419px] rounded-[12px] border-[0.7px] p-[24px] border-[#13D28A99] text-white relative">
      <div className="flex flex-col gap-5 relative">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px]">
            <img
              src={info.image}
              alt={info.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="font-[600] text-[24px] leading-[24px]">{info.name}</p>
            <p className="text-sm text-gray-400">{info.title}</p>
          </div>
        </div>

        {/* Description Section */}
        <div>
          <p className="font-[400] text-[18px] leading-[27px]">
            {info.description}
          </p>
        </div>

        {/* Rating Section */}
        <div className="flex gap-2 text-[#13D28A]">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>

        {/* Decorative Image */}
        <div className="absolute top-0 right-0 w-[48px] h-[48px]">
          <img
            src="/try/image.png" // Corrected image path for public folder
            alt="Decorative Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RattingCard;
