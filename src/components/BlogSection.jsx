import React, { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import BlogCard from "./cards/BlogCard";

const data = [
  {
    id: 1,
    image: "../../../BLOG/image1.png",
    articalLiink:
      "https://www.linkedin.com/pulse/measure-flag-act-approach-identifying-re-engaging-your-nimrod-fisher-pf78e/?trackingId=w%2F6igpR9SKOynNUCpqF8%2Fg%3D%3D",
    title:
      "Measure-Flag-Act: An Approach to Identifying and Re-engaging With Your At-Risk Customers",
    description:
      "Customer churn has always been a significant challenge for businesses. Retaining existing customers is more cost-effective than acquiring new ones, but it also builds brand loyalty and drives long-term growth “from within”... ",
  },
  {
    id: 2,
    image: "../../../BLOG/image-2.png",
    name: "Matan Guttman",
    articalLiink:
      "https://www.linkedin.com/pulse/maximizing-nps-impact-automation-path-enhanced-customer-nimrod-fisher-iiegf/?trackingId=w%2F6igpR9SKOynNUCpqF8%2Fg%3D%3D",
    title:
      "Maximizing NPS Impact: Automation and the Path to Enhanced Customer Loyalty",
    description:
      "In the dynamic landscape of product management, understanding customer feedback is paramount. Net Promoter Score (NPS) serves as a critical metric, revealing not just customer satisfaction but also loyalty....",
  },
  {
    id: 3,
    image: "../../../BLOG/image-3.png",
    name: "Shuki Cohen",
    articalLiink:
      "https://www.linkedin.com/pulse/when-less-more-data-simplifying-analytics-real-growth-nimrod-fisher-aqsgf/?trackingId=w%2F6igpR9SKOynNUCpqF8%2Fg%3D%3D",
    title: "When Less is More in Data: Simplifying Analytics for Real Growth",
    description:
      "In the fast-paced world of data, it's easy to feel swamped. Many VPs and C-suite leaders I've talked to lately share a common issue: while data is crucial, its complexity often leaves them overwhelmed. After spending the last couple of months chatting with various execs across different industries,....",
  },
];

const BlogSection = () => {
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
    <div className="relative w-full mx-auto">
      {/* react-slick carousel */}
      <Slider ref={sliderRef} {...settings} className="w-full">
        {data.map((info) => (
          <div key={info.id} className="px-2">
            <BlogCard info={info} />
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

export default BlogSection;
