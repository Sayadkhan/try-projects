import React from "react";
import { IoIosStar } from "react-icons/io";

const RattingCard = ({ info }) => {
  return (
    <div className="w-full max-w-[400px] min-h-[300px] sm:min-h-[350px] lg:min-h-[350px] rounded-[12px] border-[0.7px] p-6 sm:p-8 lg:p-10 border-[#13D28A99] text-white bg-transparent">
      <div className="flex flex-col gap-5 relative h-full">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16">
            <img
              src={info.image}
              alt={info.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-lg sm:text-xl lg:text-2xl leading-tight">
              {info.name}
            </p>
            <p className="text-sm sm:text-base text-gray-400">{info.title}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex-grow">
          <p className="font-normal text-sm sm:text-base lg:text-sm leading-relaxed">
            {info.description}
          </p>
        </div>

        {/* Rating Section */}
        <div className="flex gap-1 text-[#13D28A]">
          {[...Array(5)].map((_, index) => (
            <IoIosStar key={index} size={20} />
          ))}
        </div>

        {/* Decorative Image */}
        <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12">
          <img
            src="/try/image.png"
            alt="Decorative Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RattingCard;
