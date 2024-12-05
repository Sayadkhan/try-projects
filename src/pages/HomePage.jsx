import MyServiceSection from "../components/MyServiceSection";
import SectionTitle from "../components/SectionTitle";
import CustomSlider from "../components/Slider/CustomSilder";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto my-10 bg-[#020A22]">
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
      </div>
    </>
  );
};

export default HomePage;
