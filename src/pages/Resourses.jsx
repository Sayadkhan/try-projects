import React from "react";
import HeroComponents from "../components/Resourses/HeroComponents";
import SectionTitle from "../components/SectionTitle";
import BlogSection from "../components/BlogSection";
import ImageSlider from "../components/Slider/ImageSlider";
import HelpFullSectionSlider from "../components/Slider/HelpFullSectionSlider";

const Resourses = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 container mx-auto">
      <HeroComponents />

      <ImageSlider />

      <SectionTitle title={"Helpful Tools"} />

      {/* Use responsive flex to wrap the cards on smaller screens */}
      <HelpFullSectionSlider />

      <SectionTitle title={"Most Popular Blog"} />

      {/* Adjust container for responsive padding */}

      <BlogSection />
    </div>
  );
};

export default Resourses;
