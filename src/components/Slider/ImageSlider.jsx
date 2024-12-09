import React, { useRef } from "react";
import Slider from "react-slick"; // Import react-slick
import RattingCard from "../cards/RattingCard"; // Import your RattingCard component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const data = [
  {
    id: 1,
    image: "../../../../review/image1.png",
    name: "Ariel Dan",
    title: "Serial Entrepreneur",
    description:
      "An award-winning visionary entrepreneur who left her previous job as a bank teller to build the first social enterprise hostel in Myanmar (Burma).",
  },
  {
    id: 2,
    image: "../../../../review/image2.png",
    name: "Matan Guttman",
    title: "CTO @ Zoog",
    description:
      "“As a CTO, I found this ebook incredibly insightful. It demystifies the process of building an analytics hub, making it easier to understand and apply.”",
  },
  {
    id: 3,
    image: "../../../../review/image3.png",
    name: "Shuki Cohen",
    title: "Director of Data",
    description:
      "“A great resource for anyone looking to demystify the complexities of data hub construction – the chapters are clear, concise, and truly practical.”",
  },
];

const ImageSlider = () => {
  const sliderRef = useRef(null); // Ref to access the slider instance

  // Settings for react-slick
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 cards at once by default
    slidesToScroll: 1, // Scroll 1 card at a time
    arrows: false, // Disable default arrows for custom ones
    responsive: [
      {
        breakpoint: 1024, // For medium devices
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
        },
      },
      {
        breakpoint: 640, // For small devices
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
        },
      },
    ],
  };

  // Handle custom prev and next button clicks
  const goToPrev = () => sliderRef.current.slickPrev();
  const goToNext = () => sliderRef.current.slickNext();

  return (
    <div className="relative w-full  mx-auto">
      {/* react-slick carousel */}
      <Slider ref={sliderRef} {...settings} className="w-full">
        {data.map((info) => (
          <div key={info.id} className="px-2">
            <RattingCard info={info} />
          </div>
        ))}
      </Slider>

      {/* Custom prev/next buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={goToPrev} // Go to previous slide
          className="border w-[40px] h-[40px] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#13D28A] focus:outline-none duration-300"
        >
          <GrPrevious className="text-4xl" />
        </button>
        <button
          onClick={goToNext} // Go to next slide
          className="border w-[40px] h-[40px] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#13D28A] focus:outline-none duration-300"
        >
          <GrNext className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
