"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


interface Card {
  id: number;
  industry: string;
  title: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, industry: "Pharmaceutical", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/1.jpg" },
  { id: 2, industry: "Pharmaceutical", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/2.jpg" },
  { id: 3, industry: "Healthcare", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/1.jpg" },
  { id: 4, industry: "Oil & Gas", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/2.jpg" },
  { id: 5, industry: "Hospitality", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/1.jpg" },
  { id: 6, industry: "Retail", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/3.jpg" },
  { id: 7, industry: "Hospitality", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/2.jpg" },
  { id: 8, industry: "Pharmaceutical", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/3.jpg" },
  { id: 9, industry: "Hospitality", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/2.jpg" },
  { id: 10, industry: "Hospitality", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/3.jpg" },
  { id: 11, industry: "Healthcare", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/1.jpg" },
  { id: 12, industry: "Information Technology", title: "SEO Thought Leaders to Follow (and See) At C3", image: "/images/research/2.jpg" },
];

const industryColors: Record<string, string> = {
  Pharmaceutical: "text-[#4AB371]",
  Healthcare: "text-[#008080]",
  "Oil & Gas": "text-[#FF5733]",
  Hospitality: "text-[#FFBD33]",
  Retail: "text-[#337AB7]",
  "Information Technology": "text-[#6C63FF]",
};

const cardsPerPage = 9;

const ResearchSynopsis: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();

  const totalPages: number = Math.ceil(cards.length / cardsPerPage);
  const startIndex: number = (currentPage - 1) * cardsPerPage;
  const displayedCards: Card[] = cards.slice(startIndex, startIndex + cardsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleCardClick = (title: string) => {
    router.push(`/research-synopsis-grid/${encodeURIComponent(title)}`);
  };



  return (
    <div className="px-8 md:px-16 lg:px-20 xl:px-36 min-h-screen">
        <h1 className="text-center text-[48px] font-bold mb-8">
        <span className="text-[#004B96]">Research </span>
        <span className="text-[#4AB371]">Synopsis</span>
      </h1>
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg p-4 min-h-[400px] transition-transform duration-300 hover:scale-105"
            onClick={() => handleCardClick(card.title)}
          >
            <img
              src={card.image}
              alt="Card Image"
              className="w-full h-[200px] object-cover rounded-md mb-4"
            />
            <p className={`text-sm font-semibold ${industryColors[card.industry] || "text-gray-500"}`}>
              {card.industry}
            </p>
            <h2 className="text-lg font-bold text-[#161616] my-2">{card.title}</h2>
            <p className="text-gray-500 text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center my-8 space-x-4">
        {/* Previous Arrow */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`text-[#004B96] text-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-[#003580]"}`}
        >
          &#8249;
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-lg ${
              currentPage === index + 1
                ? "bg-[#004B96] text-white"
                : "text-[#161616] hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Arrow */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`text-[#004B96] text-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-[#003580]"}`}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ResearchSynopsis;
