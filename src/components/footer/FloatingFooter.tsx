'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const FloatingFooter = () => {
  const router = useRouter();
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Function to check if user has scrolled to the bottom
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    // Allow a small threshold to account for minor discrepancies
    if (scrollTop + windowHeight >= scrollHeight - 5) {
      setIsAtBottom(true);
      setIsMinimized(false);
    } else {
      setIsAtBottom(false);
      setIsMinimized(true);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user starts at the bottom
    handleScroll();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Expand footer on hover (only when not at the bottom)
  const handleMouseEnter = () => {
    if (!isAtBottom) {
      setIsMinimized(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isAtBottom) {
      setIsMinimized(true);
    }
  };

  // width: 800px;
  // height: 75px;
  // background: #000c19;
  // border-radius: 10px;


  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-20 flex items-center justify-center transition-all duration-300 mb-2 ${
        isMinimized ? 'h-14' : 'sm:h-[60px] lg:h-[80px]'
      }`}
    >
      <div
        className={`relative ${
          isMinimized ? 'w-[180px]' : 'w-[70%] xl:w-[800px]'
        } h-full flex items-center justify-center overflow-hidden transition-all duration-300 bg-[#004c92] rounded-2xl`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <img
          src="/images/footer/footer3.png"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          alt="Footer Background"
        /> */}

        <div className="relative max-sm:mx-2 max-sm:py-2 z-10 flex flex-col items-center text-center">
          {isMinimized ? (
            // Minimized state: Show only icons (using SVGs)
            <div className="flex items-center space-x-4">
            {/* Join Community Button with SVG Icon */}
            <button
              onClick={() => {
                // Handle Join Community action
              }}
              className="flex items-center justify-center w-10 h-10 text-white hover:bg-[#3a8e5f]"
              aria-label="Join Community"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <g transform="translate(12,12)">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.2;1"
                    dur="1.5s"
                    repeatCount="indefinite"
                    additive="sum"
                  />
                  <circle cx="-8" cy="-8" r="2"></circle>
                  <circle cx="0" cy="-8" r="2"></circle>
                  <circle cx="8" cy="-8" r="2"></circle>
                  <circle cx="-8" cy="0" r="2"></circle>
                  <circle cx="0" cy="0" r="2"></circle>
                  <circle cx="8" cy="0" r="2"></circle>
                  <circle cx="-8" cy="8" r="2"></circle>
                  <circle cx="0" cy="8" r="2"></circle>
                  <circle cx="8" cy="8" r="2"></circle>
                </g>
              </svg>
            </button>
            {/* Menu Text */}
            <div className="text-white flex items-center h-10 font-bold">
              Menu
            </div>
          </div>
          
          ) : (
            // Expanded state: Show full content
            <>
             <div className="flex flex-wrap items-center justify-center sm:space-x-4 space-x-2">
            <button
              onClick={() => {
                router.push('/Communities#community');
              }}
              aria-label="Join Community"
              className="flex-1 min-w-[100px] sm:min-w-[140px] max-w-xs sm:max-w-sm h-8 sm:h-12 rounded-lg bg-[#4AB371] text-white text-sm sm:text-base font-bold hover:bg-[#3a8e5f] m-1"
            >
              Join Community
            </button>
            <button
              onClick={() => {
                router.push('/Communities#community');
              }}
              aria-label="Solutions"
              className="flex-1 min-w-[100px] sm:min-w-[140px] max-w-xs sm:max-w-sm h-8 sm:h-12 border border-white rounded-lg text-white text-sm sm:text-base font-medium hover:bg-yellow-400 hover:text-[#000c19] m-1"
            >
              Solutions
            </button>
            <button
              onClick={() => {
                router.push('/Communities#community');
              }}
              aria-label="Industries and Focus"
              className="flex-1 min-w-[100px] sm:min-w-[140px] max-w-xs sm:max-w-sm h-8 sm:h-12 border border-white rounded-lg text-white text-sm sm:text-base font-medium hover:bg-yellow-400 hover:text-[#000c19] m-1"
            >
              Industries
            </button>
            <button
              onClick={() => {
                router.push('/research-synopsis');
              }}
              aria-label="Research Synopsis"
              className="flex-1 min-w-[100px] sm:min-w-[140px] max-w-xs sm:max-w-sm h-8 sm:h-12 border border-white rounded-lg text-white text-sm sm:text-base font-medium hover:bg-yellow-400 hover:text-[#000c19] m-1"
            >
              Research
            </button>
          </div>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingFooter;
