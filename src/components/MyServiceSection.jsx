const MyServiceSection = ({ service }) => {
  return (
    <div className="h-auto min-h-[300px] border-[0.7px] bg-[#FFFFFF05] mx-2 border-[#13D28A99]/60 rounded-[12px] p-4 sm:p-6 md:p-8 text-white flex flex-col gap-4 sm:gap-6">
      {/* Icon/Image Section */}
      <div className="w-8 h-8 sm:w-10 sm:h-10">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title Section */}
      <div className="max-w-full">
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-7 sm:leading-9 font-montserrat break-words">
          {service.title}
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-full flex-grow">
        <p className="font-normal text-sm sm:text-base md:text-md leading-6 sm:leading-7 font-montserrat break-words">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default MyServiceSection;
