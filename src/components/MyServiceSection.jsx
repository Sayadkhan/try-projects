const MyServiceSection = ({ service }) => {
  return (
    <div className="h-auto md:h-[448px] border-[0.7px] bg-[#FFFFFF05] mx-2 border-[#13D28A99]/60 rounded-[12px] p-[16px] sm:p-[20px] text-white">
      <div className="flex flex-col gap-[16px] sm:gap-[24px]">
        <div className="font-poppins w-[32px] h-[32px]">
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[270px] sm:w-[320px] lg:w-[371px] h-auto sm:h-[72px]">
          <p className="font-[700] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[36px] font-montserrat">
            {service.title}
          </p>
        </div>

        <div className="w-[270px] sm:w-[320px] lg:w-[371px] h-auto sm:h-[200px] md:h-[232px]">
          <p className="font-[400] text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28.8px] font-montserrat">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServiceSection;
