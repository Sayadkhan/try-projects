import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeroSection = ({ handleScrollToAbout }) => {
  return (
    <section className="relative bg-gradient-to-b from-[--bg] to-[--bg] text-white flex items-center justify-center md:h-[656px]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 w-full"
        style={{
          backgroundImage: "url('image2.png')",
          height: "100%", // Ensures the background image takes the full height of the parent div
        }}
        aria-hidden="true"
      ></div>

      <div className="relative text-center max-w-4xl z-10 px-4 md:px-8 mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Turn Your Data Into A Strategic Advantage
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
          Start Small, Build Smarter, Analyze Deeper, And Grow Faster.
        </p>

        <div className="flex items-center justify-center mt-10">
          <img src="../../../Animation - 1733311362189.gif" alt="" />
        </div>
        <div className="mt-8">
          <Link to="/contact">
            <button className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-6 py-3 md:px-8 md:py-4 transition duration-300">
              LET'S TALK!
            </button>
          </Link>
        </div>

        {/* Downward Arrow */}
        <div className="mt-12 flex items-center justify-center">
          <div
            onClick={handleScrollToAbout}
            className="flex items-center justify-center cursor-pointer duration-300"
          >
            <div>
              <IoChevronDownSharp className="text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
