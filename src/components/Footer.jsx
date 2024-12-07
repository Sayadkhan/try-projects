import React from "react";
import { FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="text-white pt-8 relative flex flex-col gap-5">
      <div className="container justify-items-center mx-auto  px-4">
        <div className="grid max-w-7xl r grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <img src="/logo.png" alt="TDH Logo" className="h-12" />
            </div>
            <p className="mt-2">
              Leveraging AI For Seamless, Automated Excellence In User
              Experience
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-teal-400 hover:text-teal-600 transition"
              >
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gray-500 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-[600] text-[24px] leading-[24px] text-[#FFFFFFF2]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2 flex flex-col">
              <li>
                <a
                  href="#"
                  className="font-[400] text-[16px] leading-[24px] text-[#FFFFFFE5] hover:text-teal-400 transition"
                >
                  [PODCAST] Data Analytics & AI (Hebrew)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-[400] text-[16px] leading-[24px] text-[#FFFFFFE5] hover:text-teal-400 transition"
                >
                  FREE NPS Analysis Tool
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-[400] text-[16px] leading-[24px] text-[#FFFFFFE5] hover:text-teal-400 transition"
                >
                  [POST] Simplifying Analytics For Real Growth
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-[400] text-[16px] leading-[24px] text-[#FFFFFFE5] hover:text-teal-400 transition"
                >
                  [POST] Maximizing Your NPS Analysis Impact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-[400] text-[16px] leading-[24px] text-[#FFFFFFE5] hover:text-teal-400 transition"
                >
                  [POST] Identify And Re-Engage With Your At-Risk Customers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Search</h3>
            <p className="mt-2">
              FREE EBook - "From Data Silos To Data Search: Everything On My
              Site: Hub"
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex bg-gray-700 rounded-full overflow-hidden max-w-2xl">
                <input
                  type="text"
                  placeholder="Search Everything"
                  className="px-4 py-2 w-full bg-transparent text-white outline-none"
                />
                <button className="bg-[--btn-bg] hover:bg-green-600 text-white font-bold px-6 rounded-full transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />

      <div className="absolute w-52 h-52 rounded-full bg-white/5 blur-2xl top-0 left-0"></div>
      <div className="absolute w-52 h-52 rounded-full bg-white/5 blur-2xl top-0 right-0"></div>
      {/* <div className="absolute w-52 h-52 rounded-full bg-white/5 blur-2xl  left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
      {/* <div className="absolute w-52 h-52 rounded-full bg-white/5 blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
    </footer>
  );
};

export default Footer;
