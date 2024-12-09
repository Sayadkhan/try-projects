import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import MyServiceSection from "../components/MyServiceSection";
import SectionTitle from "../components/SectionTitle";
// import CustomSlider from "../components/Slider/CustomSilder";
import HeroSection from "./../components/HeroSection";

const HomePage = () => {
  const location = useLocation();
  const aboutRef = useRef(null); // Create a ref for the about section

  // Scroll to the section based on the passed state
  useEffect(() => {
    const state = location.state;
    if (state && state.scrollTo) {
      const sectionId = state.scrollTo;
      const section = document.getElementById(sectionId);
      if (section) {
        const NAVBAR_HEIGHT = 70; // Adjust the navbar height
        const elementPosition =
          section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - NAVBAR_HEIGHT;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      window.history.replaceState({}, document.title); // Clean up state to avoid repeating on refresh
    }
  }, [location.state]);

  const data = [
    {
      id: 1,
      image: "../../../icons/image1.png",
      title: "Cost-Effective Data Systems & Tools Development",
      description:
        "Design scalable and cost-effective data systems, integrating AI-powered tools to automate workflows, optimize analysis, and provide flexible, actionable insights for better decision-making.",
    },
    {
      id: 2,
      image: "../../../icons/image2.png",
      title: "Strategic Data Advisory & Team Empowerment",
      description:
        "Develop actionable data strategies and build high-performing teams through hiring, onboarding, and mentoring. Align your organization’s data capabilities with business growth goals while fostering a culture of data-driven decision-making.",
    },
    {
      id: 3,
      image: "../../../icons/image.png",
      title: "Retention-Focused Advanced Analytics",
      description:
        "Leverage advanced analytics and AI to shape your retention strategy - measure churn, segment customers dynamically, and define KPIs like LTV, churn rate, and retention benchmarks. Drive actionable insights to boost loyalty and maximize customer value.",
    },
  ];

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Align to the top of the section
    });
  };

  return (
    <div className="bg-[#020A22]">
      <div className="px-4">
        <HeroSection handleScrollToAbout={handleScrollToAbout} />

        <div
          ref={aboutRef}
          id="about"
          className="flex items-center justify-center py-8"
        >
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[32px] justify-center">
            {data.map((service) => (
              <MyServiceSection key={service.id} service={service} />
            ))}
          </div>

          {/* <Link to="/contact" className="">
            <button className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 transition duration-300">
              LET'S TALK!
            </button>
          </Link> */}
        </div>

        {/* SuccessStory Section */}
        {/* <div className="py-8">
          <CustomSlider />
        </div> */}

        <div className="py-8">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
