const HeroComponents = () => {
  return (
    <div className="text-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-10">
        {/* Image Section */}

        <div className="w-full md:w-[520px] h-auto md:h-[551.59px] lg:hidden md:block">
          <img
            src="../../../image1.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col gap-5 w-full md:w-[572px]">
          <div className="w-full opacity-95">
            <p className="font-[700] text-[32px] md:text-[64px] leading-[40px] md:leading-[76.8px]">
              From Data Silos to Data Hub
            </p>
          </div>

          <div className="w-full opacity-95">
            <p className="font-[700] text-[24px] md:text-[40px] leading-[30px] md:leading-[48px]">
              by Nimrod Fisher
            </p>
          </div>

          <div className="w-full opacity-[90%]">
            <p className="font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px]">
              A Practical DIY Guide for Tech Leaders to Build Data Pipelines for
              Robust Decision-Making Processes
            </p>
          </div>

          <div className="w-full sm:w-[256px] h-[64px] bg-[#13D28A] rounded-[8px] flex items-center justify-center text-black">
            <button className="w-full h-full py-[23px] px-[32px]">
              <p className="font-[600] text-[16px] sm:text-[18px] leading-[18px]">
                Download EBOOK
              </p>
            </button>
          </div>
        </div>

        <div className="w-full md:w-[520px] h-auto md:h-[551.59px] lg:block md:hidden">
          <img
            src="../../../image1.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponents;
