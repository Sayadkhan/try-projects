import React from "react";
import HeroComponents from "../components/Resourses/HeroComponents";
import SectionTitle from "../components/SectionTitle";
import HelpfullToolsCard from "../components/cards/HelpfullToolsCard";
import BlogSection from "../components/BlogSection";

const Resourses = () => {
  return (
    <div className="container mx-auto bg-[#020A22]">
      <HeroComponents />

      <div>
        <SectionTitle title={"Helpful Tools"} />

        <div className="flex gap-10 items-center justify-center">
          <HelpfullToolsCard />
          <HelpfullToolsCard />
          <HelpfullToolsCard />
        </div>
      </div>

      <div>
        <SectionTitle title={"most popular blog"} />

        <div>
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Resourses;
