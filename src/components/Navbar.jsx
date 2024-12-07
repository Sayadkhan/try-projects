import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        window.scrollBy({ top: -70, left: 0, behavior: "smooth" });
      }, 300);
    }
  };

  const simulateDoubleClick = (link) => {
    if (link.id) {
      handleScrollToSection(link.id); 
      setTimeout(() => handleScrollToSection(link.id), 300);
    } else {
      scrollToTop(); 
      setTimeout(scrollToTop, 300);
    }
  };

  const handleLinkClick = (link) => {
    if (
      link.name === "ABOUT" ||
      link.name === "SERVICES" ||
      link.name === "CONTACT" ||
      link.name === "LET'S TALK"
    ) {
      simulateDoubleClick(link);
    } else if (link.name !== "SERVICES" && link.name !== "ABOUT") {
      scrollToTop();
    }
    setIsMobileMenuOpen(false);
  };

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
        <img src="/logo.png" alt="Logo" className="h-[50px]" />
      </div>

    
      <div className="hidden md:flex space-x-6 flex-1 justify-center">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => handleLinkClick(link)}
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
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => handleLinkClick(link)}
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
            to="/contact"
            className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 duration-300"
            onClick={() => handleLinkClick({ name: "LET'S TALK" })}
          >
            LET'S TALK
          </NavLink>
        </div>
      )}

     
      <div className="hidden md:block">
        <NavLink
          to="/contact"
          className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 duration-300"
          onClick={() => handleLinkClick({ name: "LET'S TALK" })}
        >
          LET'S TALK
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;



