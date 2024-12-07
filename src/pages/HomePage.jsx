import { Link } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import MyServiceSection from "../components/MyServiceSection";
import SectionTitle from "../components/SectionTitle";
import CustomSlider from "../components/Slider/CustomSilder";
import HeroSection from "./../components/HeroSection";

const HomePage = () => {
  return (
    <div className="bg-[#020A22]">
      <div className="px-4">
        <HeroSection />
        <div id="about" className="flex items-center justify-center py-8">
          <AboutMe />
        </div>

        <div
          id="services" // Added id here for the link to scroll to this section
          className="flex flex-col items-center justify-center gap-[42px] h-auto py-8"
        >
          <SectionTitle
            title="My services"
            description="Advanced Data Analytics as a Service"
          />
          <div className="flex flex-wrap gap-[32px] justify-center">
            <MyServiceSection />
            <MyServiceSection />
            <MyServiceSection />
          </div>

          <Link to="/contact" className="">
            <button className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 transition  duration-300">
              LET'S TALK!
            </button>
          </Link>
        </div>

        {/* SuccessStory Section */}
        <div className="py-8">
          <CustomSlider />
        </div>

        <div className="py-8">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
