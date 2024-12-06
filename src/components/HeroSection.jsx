import React from "react";

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
          <button
            className="bg-[--btn-bg] text-white font-bold py-3 px-8 rounded-xl transition-transform transform hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400"
            onClick={() => alert("Let's Talk!")}
          >
            LET'S TALK!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
