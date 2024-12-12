import React, { useState, useEffect } from "react";

const UpdateSlider = () => {
  const [activeCard, setActiveCard] = useState(1); // Tracks the currently active card

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prevCard) => (prevCard % 3) + 1); // Cycle through cards (1, 2, 3)
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleEllipseClick = (cardIndex: React.SetStateAction<number>) => {
    setActiveCard(cardIndex); // Set the active card when an ellipse is clicked
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen relative">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        {/* Bell Icon */}
        <div className="w-[84px] h-[84px] text-yellow-500">
          <img src="/images/login/bell.svg" className="w-full h-full" alt="Bell" />
        </div>

        {/* Title */}
        <h1 className="text-[48px] font-bold text-[#161616]">
          Latest <span className="text-[#004B96]">Updates</span>
        </h1>
      </div>

      {/* Update Cards */}
      <div className="space-y-4 w-full max-w-lg relative">
        {/* Card 1 */}
        <div
          className={`flex items-center bg-blue-100 border border-blue-300 rounded-lg p-3 transition-all duration-500 ${
            activeCard === 1 ? "transform scale-105 p-6 opacity-100" : "transform scale-95 opacity-50"
          }`}
        >
          {/* Perfect Rounded Icon Container */}
          <div
            className={`flex items-center justify-center rounded-full mr-4 transition-all duration-500 ${
              activeCard === 1
                ? "w-[60px] h-[60px] bg-blue-300"
                : "w-[50px] h-[50px] bg-blue-200"
            }`}
          >
            <img src="/images/login/Laptop.svg" className="w-[26px] h-[26px]" alt="Laptop" />
          </div>

          <div>
            <div className="text-black text-xl font-bold">350+</div>
            <p
              className={`text-[#161616] ${
                activeCard === 1 ? "text-[14px] font-semibold" : "text-[12px] font-normal"
              }`}
            >
              Full Fledged LMS White Label LMS Software Platform With Proprietary
              Content Preloaded
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`flex items-center bg-yellow-100 border border-[#FEBF00] rounded-lg p-3 transition-all duration-500 relative ${
            activeCard === 2 ? "transform scale-105 p-6 opacity-100" : "transform scale-95 opacity-50"
          }`}
        >
          {/* Perfect Rounded Icon Container */}
          <div
            className={`flex items-center justify-center rounded-full mr-4 transition-all duration-500 ${
              activeCard === 2
                ? "w-[60px] h-[60px] bg-[#FEBF00]"
                : "w-[50px] h-[50px] bg-yellow-200"
            }`}
          >
            <img src="/images/login/Laptop.svg" className="w-[26px] h-[26px]" alt="Laptop" />
          </div>

          <div>
            <div className="text-black text-xl font-bold">Full</div>
            <p
              className={`text-[#161616] ${
                activeCard === 2 ? "text-[14px] font-semibold" : "text-[12px] font-normal"
              }`}
            >
              Full Fledged LMS White Label LMS Software Platform With Proprietary
              Content Preloaded
            </p>
          </div>

          {/* Ellipses Positioned to the Right */}
          <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`rounded-full cursor-pointer ${
                  activeCard === index + 1
                    ? "bg-[#4AB371] hover:bg-[#4AB371] w-3 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
                onClick={() => handleEllipseClick(index + 1)}
              ></div>
            ))}
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`flex items-center bg-red-100 border border-red-300 rounded-lg p-3 transition-all duration-500 ${
            activeCard === 3 ? "transform scale-105 p-6 opacity-100" : "transform scale-95 opacity-50"
          }`}
        >
          {/* Perfect Rounded Icon Container */}
          <div
            className={`flex items-center justify-center rounded-full mr-4 transition-all duration-500 ${
              activeCard === 3
                ? "w-[60px] h-[60px] bg-red-300"
                : "w-[50px] h-[50px] bg-red-200"
            }`}
          >
            <img src="/images/login/Laptop.svg" className="w-[26px] h-[26px]" alt="Laptop" />
          </div>

          <div>
            <div className="text-black text-xl font-bold">350+</div>
            <p
              className={`text-[#161616] ${
                activeCard === 3 ? "text-[14px] font-semibold" : "text-[12px] font-normal"
              }`}
            >
              Full Fledged LMS White Label LMS Software Platform With Proprietary
              Content Preloaded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSlider;
