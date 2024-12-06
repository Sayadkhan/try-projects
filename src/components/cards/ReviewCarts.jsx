import React from "react";

const ReviewCarts = ({ product }) => {
  return (
    <div className="text-white">
      <div className="w-full h-[549px] sm:w-[419px]   rounded-[16px] border-[0.7px] p-[24px] flex flex-col gap-[24px] border-[#13D28A99]/60">
        <div className="w-full sm:w-[371px] h-[269px] rounded-[8px]">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <div>
          <p className="font-[600] text-[20px] sm:text-[28px] leading-[28px]">
            {product?.name}
          </p>
        </div>

        <div>
          <p className="font-[400] text-[14px] sm:text-[16px] leading-[25.6px]">
            {product?.descritption}
          </p>
        </div>

        <div>
          <button className="w-full sm:w-[131px] h-[44px] rounded-[6px] border-[1px] py-[12px] px-[24px] flex items-center justify-center hover:bg-[#13D28A] duration-300">
            <span> Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarts;
