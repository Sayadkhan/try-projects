const HeroComponents = () => {
  return (
    <div className="text-[#FFFFFF]">
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col gap-5">
          <div className="w-[572px] h-[154px] opacity-95">
            <p className="font-[700] text-[64px] leading-[76.8px]">
              From Data Silos to Data Hub
            </p>
          </div>

          <div className="w-[572px] h-[48px] opacity-95">
            <p className="font-[700] text-[40px] leading-[48px]">
              by Nimrod Fisher
            </p>
          </div>
          <div className="w-[572px] h-[60px] opacity-[90%]">
            <p className="font-[400] text-[20px] leading-[30px]">
              A Practical DIY Guide for Tech Leaders to Build Data Pipelines for
              Robust Decision-Making Processes
            </p>
          </div>

          <div className="w-[256px] h-[64px] bg-[#13D28A] rounded-[8px] flex items-center justify-center text-black">
            <button className="w-full h-full py-[23px] px-[32px]">
              <p className="font-[600] text-[18px] leading-[18px]">
                Download EBOOK
              </p>
            </button>
          </div>
        </div>
        <div className="w-[520px] h-[551.59px]">
          <img
            src="../../../image1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponents;
