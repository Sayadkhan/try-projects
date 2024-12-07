import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const NAVBAR_HEIGHT = 70;

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAVBAR_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };

  useEffect(() => {
    const state = location.state ;
    if (state && state.scrollTo) {
      const section = document.getElementById(state.scrollTo);
      if (section) {
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - NAVBAR_HEIGHT;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/", id: "about" },
    { name: "SERVICES", path: "/", id: "services" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 text-gray-400 h-[70px] px-[10%] flex items-center justify-between z-[99999]">
      <div className="flex items-center">
        <img src="/logo.png" alt="TDHH Logo" className="h-[50px]" />
      </div>

      <div className="hidden md:flex space-x-6 flex-1 justify-center">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => {
              if (link.name === "ABOUT" || link.name === "SERVICES") {
                handleScrollToSection(link.id);
              } else {
                scrollToTop();
              }
            }}
            className={({ isActive }) =>
              `text-gray-400 hover:text-gray-200 ${
                isActive ? "text-white" : ""
              } px-4 py-2`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <button
        className="md:hidden text-gray-400 focus:outline-none"
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
        <div className="absolute top-[70px] left-0 w-full bg-gray-900 text-center flex flex-col space-y-4 py-4 md:hidden">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => {
                if (link.name === "ABOUT" || link.name === "SERVICES") {
                  handleScrollToSection(link.id);
                } else {
                  scrollToTop();
                }
                setIsMobileMenuOpen(false);
              }}
              className={({ isActive }) =>
                `text-gray-400 hover:text-gray-200 ${
                  isActive ? "text-white" : ""
                } px-4 py-2`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="contact"
            className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LET'S TALK
          </NavLink>
        </div>
      )}

      <div className="hidden md:block">
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
