import React from "react";

const BlogCard = ({ info }) => {
  return (
    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-[24px] border border-[#13D28A99] p-4 md:p-6 lg:p-8 mb-5 text-white">
      <div>
        <img
          src={info.image}
          alt="Blog Image"
          className="w-full h-auto max-h-[14rem] lg:max-h-[24rem] rounded-[12px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-6 mt-5">
        <p className="font-[600] text-[16px] md:text-[18px] lg:text-[20px] h-20 lg:h-28 xl:text-[24px] leading-[20px] md:leading-[24px] lg:leading-[28px] xl:leading-[32px]">
          {info?.title}
        </p>
        <p className="font-[400] text-[12px] md:text-[14px]  lg:h-44 lg:text-[16px] leading-[16px] md:leading-[20px] lg:leading-[24px] overflow-hidden">
          {info?.description}
        </p>

        <div>
          <a
            target="_blank"
            href={info?.articalLiink}
            className="w-full max-w-[140px] h-[40px] rounded-[6px] border py-2 px-4 flex items-center justify-center text-black bg-[#13D28A] text-center"
          >
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
