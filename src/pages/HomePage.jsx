import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import MyServiceSection from "../components/MyServiceSection";
import SectionTitle from "../components/SectionTitle";
import CustomSlider from "../components/Slider/CustomSilder";
import HeroSection from "./../components/HeroSection";

const HomePage = () => {
  return (
    <div className="bg-[#020A22]">
      <div className="">
        <HeroSection />
        <div className="flex items-center justify-center">
          <AboutMe />
        </div>
        {/* My service Section */}
        <div className="flex flex-col items-center justify-center gap-[42px] h-[580px]">
          <SectionTitle
            title="My services"
            description="Advanced Data Analytics as a Service"
          />
          <div className="flex gap-[32px]">
            <MyServiceSection />
            <MyServiceSection />
            <MyServiceSection />
          </div>
        </div>
        {/* SuccessStory Section */}
        <div>
          <CustomSlider />
        </div>

        <div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
