import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[--bg] to-[--bg] text-white min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('image2.png')",
        }}
        aria-hidden="true"
      ></div>

      <div className="relative text-center  max-w-4xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Turn Your Data Into A Strategic Advantage
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Start Small, Build Smarter, Analyze Deeper, And Grow Faster.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="">
            <button className="hover:bg-transparent hover:text-green-600 text-white border-[0.75px] bg-[--btn-bg] border-green-600 rounded px-4 py-2 transition  duration-300">
              LET'S TALK!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
