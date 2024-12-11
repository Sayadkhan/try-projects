import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState(""); // Track the active section
  const location = useLocation();
  const navigate = useNavigate();
  const NAVBAR_HEIGHT = 70;

  // Handle scrolling to a section
  const handleScrollToSection = (sectionId) => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveSection(sectionId);
    if (location.pathname !== "/") {
      // Navigate to the homepage and pass the section ID in the state
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // Scroll directly if already on the homepage
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAVBAR_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on every route change
  }, [location]);

  // Detect the currently visible section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section based on the id
          }
        });
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the section is in view
      }
    );

    // Observe each section with the IDs "about", "services", etc.
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/", id: "about" },
    { name: "SERVICES", path: "/", id: "services" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 text-gray-400 h-[70px] px-[10%] flex items-center justify-between z-[99999]">
      <Link to={"/"} className="flex items-center w-[90px] h-[90px]">
        <img
          src="../../../logo4-removebg-preview.png"
          alt="TDHH Logo"
          className="w-full h-full object-cover"
        />
      </Link>

      <div className="hidden lg:flex space-x-6 flex-1 justify-center">
        {links.map((link) => {
          // Handle "About" and "Services" with scrolling
          if (link.name === "ABOUT" || link.name === "SERVICES") {
            return (
              <button
                key={link.name}
                onClick={() => handleScrollToSection(link.id)} // Scroll to section
                className={`text-gray-400 hover:text-gray-200 px-4 py-2 ${
                  activeSection === link.id ? "text-white" : ""
                } `}
              >
                {link.name}
              </button>
            );
          } else {
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-400 hover:text-gray-200 ${
                    isActive ? "text-white" : ""
                  } px-4 py-2`
                }
              >
                {link.name}
              </NavLink>
            );
          }
        })}
      </div>

      <button
        className="lg:hidden text-gray-400 focus:outline-none"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-gray-900 text-center flex flex-col space-y-4 py-4 lg:hidden">
          {links.map((link, index) => {
            // Handle "About" and "Services" with scrolling in mobile menu
            if (link.name === "ABOUT" || link.name === "SERVICES") {
              return (
                <button
                  key={index}
                  onClick={() => handleScrollToSection(link.id)} // Scroll to section
                  className="text-gray-400 hover:text-gray-200 px-4 py-2"
                >
                  {link.name}
                </button>
              );
            } else {
              return (
                <NavLink
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-400 hover:text-gray-200 ${
                      isActive ? "text-white" : ""
                    } px-4 py-2`
                  }
                >
                  {link.name}
                </NavLink>
              );
            }
          })}
          <NavLink
            to="contact"
            className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LET'S TALK
          </NavLink>
        </div>
      )}

      <div className="hidden lg:block">
        <NavLink
          to="/contact"
          className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 duration-300"
        >
          LET'S TALK
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
