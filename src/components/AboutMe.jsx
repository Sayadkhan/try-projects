import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto border-[0.7px] p-[32px] text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="lg:w-[208px] w-full flex flex-col gap-5 justify-between mb-4">
          <h2 className="font-[700] text-[40px] leading-[40px]">About Me</h2>
          <img
            src="../../../image.png"
            alt="Nimrod Fisher"
            className="rounded-[12px] w-full max-w-[208px] mx-auto"
          />
          <div className="flex flex-col gap-5">
            <h2 className="font-[600] text-[24px] leading-[24px] text-center">
              Nimrod Fisher
            </h2>
            <div className="flex justify-center gap-5">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:example@email.com"
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-[70%] w-full text-center lg:text-left">
          <p className="text-gray-300 mb-8">
            I'm A Dedicated Data Analytics Expert With A Passion For Solving
            Business And Product Challenges Through Data - And Using It Wisely
            to Drive Retention And Growth. I Thrive On Uncovering Hidden,
            High-Value Opportunities Within Organizations - Opportunities That
            Often Go Unnoticed But Can Make A Measurable Impact.
          </p>
          <p className="text-gray-300 mb-8">
            With Over A Decade Of Experience, I've Worked Across Diverse
            Industries And Company Sizes - Solving Complex Challenges And
            Transforming Oceans Of Data Into Strategic Assets. What Motivates Me
            Is Showing Businesses That Data Isn't Just A Byproduct Of Operations
            - It's A Powerful Driver Of Profitability And Innovation When
            Leveraged Effectively.
          </p>
          <p className="text-gray-300 mt-8">
            There's Nothing More Fulfilling Than Helping A Company Uncover The
            Untapped Potential In Their Data And Transforming It Into A
            Competitive Advantage - That's What Drives Me Every Day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
