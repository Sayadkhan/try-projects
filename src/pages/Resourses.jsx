import React from "react";
import HeroComponents from "../components/Resourses/HeroComponents";
import SectionTitle from "../components/SectionTitle";
import HelpfullToolsCard from "../components/cards/HelpfullToolsCard";
import BlogSection from "../components/BlogSection";

const Resourses = () => {
  return (
    <div className=" flex flex-col gap-5">
      <HeroComponents />

      <div>
        <SectionTitle title={"Helpful Tools"} />

        <div className="flex gap-10 items-center justify-center">
          <HelpfullToolsCard />
          <HelpfullToolsCard />
          <HelpfullToolsCard />
        </div>
      </div>

      <div className="flex flex-col gap-10 my-10">
        <SectionTitle title={"Most Popular Blog"} />

        <div className="container mx-auto">
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Resourses;
