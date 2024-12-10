import React from "react";

const BlogCard = ({ info }) => {
  return (
    <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md rounded-[24px] border-[0.6px] border-[#13D28A99] p-[16px] lg:p-[24px] mb-5 lg:mb-0 text-white">
      <div>
        <img
          src={info.image}
          alt="Blog Image"
          className="w-full h-[14rem] lg:h-[24rem] rounded-[12px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-[12px] lg:gap-[20px] mt-5">
        <p className="font-[600] text-[16px] lg:text-[20px] xl:text-[24px] leading-[20px] lg:leading-[28px] xl:leading-[32px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <p className=" h-[10rem] font-[400] text-[12px] lg:text-[14px] xl:text-[16px] leading-[16px] lg:leading-[20px] xl:leading-[24px] overflow-hidden">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged...
        </p>

        <div>
          <button className="w-[100px] lg:w-[120px] xl:w-[140px] h-[35px] lg:h-[40px] xl:h-[44px] rounded-[6px] border-[1px] py-[8px] lg:py-[10px] xl:py-[12px] px-[16px] lg:px-[20px] xl:px-[24px] flex items-center justify-center text-black bg-[#13D28A] text-nowrap">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
