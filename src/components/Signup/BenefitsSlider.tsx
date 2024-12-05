import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliderdots.css";

const cardData = [
  {
    title: "Access To Our Knowledge Repository",
    icon: "/images/signup/cardIcons.svg",
    bg: "/images/signup/cardBg.svg",
  },
  {
    title: "Participate In Our Research & Client Projects",
    icon: "/images/signup/cardIcons.svg",
    bg: "/images/signup/cardBg.svg",
  },
  {
    title: "White-Label LMS & Preloaded Proprietary Tools",
    icon: "/images/signup/cardIcons.svg",
    bg: "/images/signup/cardBg.svg",
  },
  {
    title: "Subscribe To Our Organization Development Tools",
    icon: "/images/signup/cardIcons.svg",
    bg: "/images/signup/cardBg.svg",
  },
  {
    title: "Live Interaction With Global Experts",
    icon: "/images/signup/cardIcons.svg",
    bg: "/images/signup/cardBg.svg",
  },
  {
    title: "Connect & Collaborate With Experts",
    icon: "/images/signup/cardIcons.svg",
    bg: "/images/signup/cardBg.svg",
  },
];

const BenefitSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2, // Show 2.2 slots in a row
    slidesToScroll: 2,
    centerMode: false,
    appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined) => (
        <div style={{ marginTop: "20px" }}>
          <ul style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
            {dots}
          </ul>
        </div>
      ),
      customPaging: () => (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "gray",
            borderRadius: "50%",
            transition: "all 0.3s ease",
          }}
        ></div>
      ),
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 1.8,
        },
      }
    ],
  };

  // Group cards into pairs for each slider slot
  const groupedCards = [];
  for (let i = 0; i < cardData.length; i += 2) {
    groupedCards.push(cardData.slice(i, i + 2));
  }

  return (
    <div className="px-6">
        <div className="hidden lg:block">

      <Slider {...settings}>
        {groupedCards.map((group, index) => (
          <div key={index} className="flex flex-col w-full items-center justify-between p-2">
            {group.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-left text-center rounded-[8px] shadow-md relative w-[240px] h-[130px] p-4 bg-white overflow-hidden mb-4"
              >
                {/* Card Background */}
                <img
                  src={benefit.bg}
                  alt="Card Background"
                  className="absolute inset-0 w-full h-full object-contain top-[30%] left-[35%]"
                />

                {/* Card Icon */}
                <div className="bg-[#EDF5FE] w-[57px] h-[57px] rounded-full p-3.5 shadow-md mb-2 flex items-left justify-center">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-[33px] h-[30px]"
                  />
                </div>

                {/* Card Content */}
                <p className="text-gray-800 font-semibold text-[14px] text-left">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Slider>
        </div>
      <div className="block lg:hidden grid grid-cols-1 gap-4">
        {cardData.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-row items-center rounded-[8px] shadow-md relative w-full p-4 bg-white"
          >
            {/* Card Icon */}
            <div className="bg-[#EDF5FE] w-[57px] h-[57px] rounded-full p-2 shadow-md flex items-center justify-center">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-[33px] h-[30px]"
              />
            </div>

            {/* Card Content */}
            <p className="ml-4 text-gray-800 font-semibold text-[14px]">
              {benefit.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BenefitSlider
