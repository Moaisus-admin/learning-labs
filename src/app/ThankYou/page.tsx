"use client";
import Header from "@/components/header/Header";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#f1fff6_20%,#00000000_100%)]">
        <Header/>
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[1200px] bg-white rounded-lg shadow-lg p-8 lg:p-16">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="/images/logo.svg" // Replace with your logo path
            alt="Learning Labs Logo"
            className="w-32 h-auto"
          />
          <h1 className="text-[36px] font-semibold text-[#004B96] mt-6">
            Thanks For Joining Community
          </h1>
          <p className="text-[18px] text-[#393939] mt-4 text-center">
            Managing a hackathon can be a challenge without the right tools. We
            simplified this process to create a better platform experience for
            your organization.
          </p>
        </div>

        {/* Joining Benefits */}
        <div className="mt-12">
          <h2 className="text-center text-[24px] font-semibold text-[#004B96] mb-8">
            Here Are Our Joining Benefits
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/icons/interview.svg"
                alt="Benefit 1"
                className="w-12 h-12 mb-4"
              />
              <p className="text-sm font-medium text-[#393939]">
                Identify The Current Practices, Approaches & Challenges In The
                Industry Via Interview
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/icons/path.svg"
                alt="Benefit 2"
                className="w-12 h-12 mb-4"
              />
              <p className="text-sm font-medium text-[#393939]">
                Define An Implementation Path
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/icons/best-practices.svg"
                alt="Benefit 3"
                className="w-12 h-12 mb-4"
              />
              <p className="text-sm font-medium text-[#393939]">
                Identify Best Practices And Conceptual Models Regarding The
                Topic
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/icons/tools.svg"
                alt="Benefit 4"
                className="w-12 h-12 mb-4"
              />
              <p className="text-sm font-medium text-[#393939]">
                Design Joint Tools & Interventions
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/icons/projects.svg"
                alt="Benefit 5"
                className="w-12 h-12 mb-4"
              />
              <p className="text-sm font-medium text-[#393939]">
                Joint Client Projects & Interventions
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/icons/case-study.svg"
                alt="Benefit 6"
                className="w-12 h-12 mb-4"
              />
              <p className="text-sm font-medium text-[#393939]">
                Case Study Compilation
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16">
          <h2 className="text-center text-[24px] font-semibold text-[#004B96] mb-8">
            What Would Be Our Next Steps?
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#4AB371] text-white text-lg font-bold mb-4">
                1
              </div>
              <p className="text-sm font-medium text-[#393939]">
                Login in with Google
              </p>
              <p className="text-sm text-[#555555]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#4AB371] text-white text-lg font-bold mb-4">
                2
              </div>
              <p className="text-sm font-medium text-[#393939]">
                Join The Community
              </p>
              <p className="text-sm text-[#555555]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#4AB371] text-white text-lg font-bold mb-4">
                3
              </div>
              <p className="text-sm font-medium text-[#393939]">
                Start Engaging
              </p>
              <p className="text-sm text-[#555555]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>

        {/* Login Now Button */}
        <div className="mt-10 flex justify-center">
          <button className="px-8 py-3 bg-[#4AB371] text-white font-medium rounded-md hover:bg-[#3a8e5f]">
            Login Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ThankYouPage;
