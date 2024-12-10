const MyServiceSection = ({ service }) => {
  return (
    <div className="h-auto md:h-[448px] border-[0.7px] bg-[#FFFFFF05] mx-2 border-[#13D28A99]/60 rounded-[12px] p-[24px] text-white">
      <div className="flex flex-col gap-[24px]">
        <div className="font-poppins w-[32px] h-[32px]">
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[320px] lg:w-[371px] h-[72px]">
          <p className="font-[700] text-[20px] sm:text-[24px] md:text-[28px] leading-[36px] font-montserrat">
            {service.title}
          </p>
        </div>

        <div className="w-[320px] lg:w-[371px] h-[232px]">
          <p className="font-[400] text-[18px] leading-[28.8px] font-montserrat">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServiceSection;
