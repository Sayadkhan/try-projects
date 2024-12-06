import React from "react";

const BlogSection = () => {
  return (
    <div className="w-full px-4 lg:px-0 lg:w-[1320px] flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row gap-5 text-white w-full">
        {/* Main Blog Card */}
        <div className="w-full lg:w-[757px] rounded-[24px] border-[0.6px] p-[16px] lg:p-[24px] mb-5 lg:mb-0">
          <div>
            <img
              src="../../../BLOG/image-4.png"
              alt=""
              className="w-full h-auto rounded-[12px]"
            />
          </div>

          <div className="flex flex-col gap-[20px] lg:gap-[42px] mt-5">
            <p className="font-[600] text-[20px] lg:text-[32px] leading-[28px] lg:leading-[44.8px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p className="font-[400] text-[14px] lg:text-[18px] leading-[20px] lg:leading-[28.8px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div>
              <button className="w-[120px] h-[40px] lg:w-[131px] lg:h-[44px] rounded-[6px] border-[1px] py-[10px] lg:py-[12px] px-[20px] lg:px-[24px] flex items-center justify-center text-black bg-[#13D28A]">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Additional Blog Cards */}
        <div className="flex flex-col  gap-5 lg:w-[calc(100%-757px)]">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-wrap w-full lg:w-[531px] rounded-[20px] border-[0.6px] border-[#13D28A99] items-center justify-center gap-[16px] py-[16px] lg:py-[20px] px-[16px] mb-5 lg:mb-0"
              >
                <div className="w-[238px] h-[250px] rounded-[12px]">
                  <img
                    src="../../../BLOG/image1.png"
                    alt="blog thumbnail"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
                <div className="w-[237.5px] flex flex-col mt-4">
                  <p className="font-[600] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                    Lorem Ipsum is simply dummy text
                  </p>
                  <p className="font-[400] text-[12px] lg:text-[18px] leading-[18px] lg:leading-[28.8px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <button className="w-[120px] h-[40px] lg:w-[131px] lg:h-[44px] rounded-[6px] border-[1px] py-[10px] lg:py-[12px] px-[20px] lg:px-[24px] flex items-center justify-center mt-4">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
