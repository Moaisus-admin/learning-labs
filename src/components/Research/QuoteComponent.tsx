"use client";
import React, { useState, useEffect } from "react";

const quotes = [
  {
    text: "Research is seeing what everybody else has seen and thinking what nobody else has thought.",
    author: "Albert Szent-Györgyi",
    title: "Nobel Prize Winner",
  },
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    title: "Co-founder, Apple Inc.",
  },
];

const QuoteCarousel = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Automatic looping of quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handler for clickable indicators
  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentQuoteIndex(index);
  };

  return (
    <div className="relative flex flex-col justify-center px-6 md:px-20 lg:px-24 xl:px-36 py-12 md:py-16 lg:py-20   min-h-[400px]">
      {/* Background Quote Image Above First Word */}
      <div className="absolute top-[20%] left-6 md:left-20 lg:left-24 xl:left-36">
        <img
          src="/images/research/QuoteGreen.svg" // Replace with the path to your quote image
          alt="Quote Icon"
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        />
      </div>

      {/* Quote Content */}
      <div className="relative text-left">
        <p className="text-[41px] leading-tight font-semibold text-[#393939] mt-4 md:mt-6">
          {quotes[currentQuoteIndex].text}
        </p>
        <div className="mt-6">
          <p className="text-[24px] font-medium text-[#004B96]">
            {quotes[currentQuoteIndex].author},
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            {quotes[currentQuoteIndex].title}
          </p>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-12 flex space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)} // Handle Click
            aria-label={`Go to quote ${index + 1}`}
            className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
              index === currentQuoteIndex ? "bg-[#4AB371]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;
