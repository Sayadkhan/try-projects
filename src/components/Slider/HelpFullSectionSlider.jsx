import React, { useRef } from "react";
import Slider from "react-slick";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import HelpfullToolsCard from "../cards/HelpfullToolsCard";

const data = [
  {
    id: 1,
    image: "../../../../review/image1.png",
    name: "Ariel Dan",
    articalLiink: "https://nps-analysis-demo.streamlit.app/",
    title: "NPS Analysis Tool",
    description:
      "This interactive tool, designed to demonstrate how NPS tracking can reveal customer satisfaction trends, sentiment patterns, and key feedback themes through time-based analysis, sentiment evaluation, and keyword insights.",
  },
  {
    id: 2,
    image: "../../../../review/image2.png",
    articalLiink: "https://cohort-analysis-tool.streamlit.app/",
    name: "Matan Guttman",
    title: "Cohort Analysis Tool",
    description:
      "Experience the power of cohort analysis through this interactive tool, designed to demonstrate how tracking user segments over time can reveal crucial retention patterns and customer behavior trends through dynamic visualizations and detailed segment breakdowns.",
  },
  {
    id: 3,
    image: "../../../../review/image3.png",
    articalLiink: "/",
    name: "Shuki Cohen",
    title: "Data Stack Simulator",
    description:
      "Explore and compare data infrastructure options through this interactive planning tool, which combines real-world pricing data and industry expertise to deliver customized stack recommendations and reliable cost projections - helping you confidently plan your startup's data architecture",
  },
];

const HelpFullSectionSlider = () => {
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
            {/* <RattingCard info={info} /> */}
            <HelpfullToolsCard info={info} />
          </div>
        ))}
      </Slider>

      {/* Custom prev/next buttons */}
      <div className="flex justify-center mt-4 space-x-4 z-[9999]">
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

export default HelpFullSectionSlider;
