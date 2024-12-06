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
