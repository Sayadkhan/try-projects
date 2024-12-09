import React from "react";
import HeroComponents from "../components/Resourses/HeroComponents";
import SectionTitle from "../components/SectionTitle";
import HelpfullToolsCard from "../components/cards/HelpfullToolsCard";
import BlogSection from "../components/BlogSection";
import ImageSlider from "../components/Slider/ImageSlider";

const Resourses = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 container mx-auto">
      <HeroComponents />

      <ImageSlider />

      <div>
        <SectionTitle title={"Helpful Tools"} />

        {/* Use responsive flex to wrap the cards on smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center ">
          <HelpfullToolsCard />
          <HelpfullToolsCard />
          <HelpfullToolsCard />
        </div>
      </div>

      <div className="flex flex-col gap-10 my-10">
        <SectionTitle title={"Most Popular Blog"} />

        {/* Adjust container for responsive padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Resourses;
