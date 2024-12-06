import React, { Suspense, useRef, useState } from "react";

// Dynamically import react-slick
const Slider = React.lazy(() => import("react-slick"));

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCarts from "../cards/ReviewCarts";
import SectionTitle from "../SectionTitle";
import { GrNext, GrPrevious } from "react-icons/gr";

const CustomSlider = () => {
  const [slider, setSlider] = useState(null); // Track the slider instance
  const sliderRef = useRef(null); // Ref to access the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable default arrows for custom ones
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      name: "Lorem Ipsum is simply",
      image: "../../../../imageS1.png",
      descritption:
        "An award-winning visionary entrepreneur who left her previous job as a bank teller to build the first social enterprise hostel in Myanmar",
    },
    {
      id: 2,
      name: "Product 2",
      image: "../../../../imageS2.png",
      descritption:
        "An award-winning visionary entrepreneur who left her previous job as a bank teller to build the first social enterprise hostel in Myanmar",
    },
    {
      id: 3,
      name: "Product 3",
      image: "../../../../imageS3.png",
      descritption:
        "An award-winning visionary entrepreneur who left her previous job as a bank teller to build the first social enterprise hostel in Myanmar",
    },
  ];

  // Handle custom prev and next button clicks
  const goToPrev = () => slider.slickPrev();
  const goToNext = () => slider.slickNext();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SectionTitle title={"Success Stories"} />

      {/* Suspense to handle dynamic import */}
      <Suspense fallback={<div>Loading...</div>}>
        <Slider
          ref={sliderRef}
          {...settings}
          afterChange={(current) => setSlider(sliderRef.current)} // Save the slider instance
        >
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <ReviewCarts product={product} />
            </div>
          ))}
        </Slider>
      </Suspense>

      {/* Custom prev/next buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={goToPrev}
          className="border w-[40px] h-[40px] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#13D28A] focus:outline-none duration-300"
        >
          <GrPrevious className="text-4xl" />
        </button>
        <button
          onClick={goToNext}
          className="border w-[40px] h-[40px] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#13D28A] focus:outline-none duration-300"
        >
          <GrNext className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
