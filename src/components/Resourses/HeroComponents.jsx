const HeroComponents = () => {
  const downloadPdf = () => {
    window.open(
      "https://drive.google.com/file/d/1_MDh9ahrNClGDkgtOGvWiweZpQp1fisd/view?usp=drive_link",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div className="text-[#FFFFFF]">
      <div className="grid lg:grid-cols-2 items-center justify-center gap-10 px-4 py-10">
        {/* Image Section (Mobile-first, hides on lg and larger) */}
        <div className="w-full md:w-[520px] h-auto md:h-[551.59px] lg:hidden block">
          <img
            src="../../../image1.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col gap-5 ">
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
            <button
              onClick={downloadPdf}
              className="w-full h-full py-[23px] px-[32px]"
            >
              <p className="font-[600] text-[16px] sm:text-[18px] leading-[18px]">
                Download EBOOK
              </p>
            </button>
          </div>
        </div>

        {/* Image Section (Visible only on lg and larger screens) */}
        <div className="w-full hidden lg:block ">
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
