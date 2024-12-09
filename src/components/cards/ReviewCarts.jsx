import React from "react";

const ReviewCarts = ({ product }) => {
  return (
    <div className="text-white">
      <div className="w-full h-[400px] sm:w-[419px] sm:h-[480px] md:w-[380px] md:h-[500px] lg:w-[340px] lg:h-[500px] rounded-[16px] border-[0.7px] p-[16px] flex flex-col gap-[16px] border-[#13D28A99]/60">
        <div className="w-full h-[200px] sm:h-[250px] md:h-[220px] lg:h-[269px] rounded-[8px] overflow-hidden">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover object-center" // Ensure the image maintains aspect ratio and covers the container
          />
        </div>

        <div>
          <p className="font-[600] text-[16px] sm:text-[20px] md:text-[18px] lg:text-[22px] leading-[24px] sm:leading-[28px] md:leading-[26px] lg:leading-[30px]">
            {product?.name}
          </p>
        </div>

        <div>
          <p className="font-[400] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[25.6px] md:leading-[24px] lg:leading-[28px]">
            {product?.descritption}
          </p>
        </div>

        <div>
          <button className="w-full sm:w-[131px] h-[44px] rounded-[6px] border-[1px] py-[12px] px-[24px] flex items-center justify-center hover:bg-[#13D28A] duration-300">
            <span>Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarts;
