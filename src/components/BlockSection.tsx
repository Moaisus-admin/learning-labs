'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function Blog({ filter }: { filter: string | null }) {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>("All");
  const [selectedResponsibility, setSelectedResponsibility] = useState<string | null>(null);
  const [selectedHierarchy, setSelectedHierarchy] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState(filter == null ? "" : filter);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleReadMore = (index:any) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const handleCardClick = (link:string) => {
    window.location.href = link;
  };

  const cards = [
    {
      'type': 'blog',
      "blog-img": "/images/features/ITHRM02INOLL01_Cover image.jpg",
      title: "Pharmaceutical",
      color: "#34C759",
      heading: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
      text: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB indicators for the locally owned Indian luxury hotels. Four clusters of WLB indicators that are grounded in the experiences of front-office employees are identified and presented. Interview data from human resource representatives unveil that hotels consider existing WLB practices as key HRM practices with an inclusive TM approach. The findings also surface the differences in expectations of front-office employees and WLB practices followed by the hotels...",
      writtenBy: "CateProxies",
      industry: "healthcare",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
    {
      'type': 'blog',
      "blog-img": "/images/features/BF001_cover image.jpg",
      title: "Healthcare",
      color: "#FFCC00",
      heading: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint....",
      writtenBy: "CateProxies",
      industry: "pharmaceutical",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "/images/blog.png",
      title: "Hospitality",
      color: "#007AFF",
      heading: "SEO Thought Leaders to Follow (and See) At C3",
      text: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB indicators for the locally owned Indian luxury hotels. Four clusters of WLB indicators that are grounded in the experiences of front-office employees are identified and presented. Interview data from human resource representatives unveil that hotels consider existing WLB practices as key HRM practices with an inclusive TM approach. The findings also surface the differences in expectations of front-office employees and WLB practices followed by the hotels....",
      writtenBy: "CateProxies",
      industry: "healthcare",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
      title: "Hospitality",
      color: "#5856D6",
      heading: "SEO Thought Leaders to Follow (and See) At C3",
      text: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB ...",
      writtenBy: "CateProxies",
      industry: "healthcare",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
  ];

  // Filter cards based on selected filters
  const filteredCards = cards
    .filter(card => selectedIndustry && selectedIndustry !== "All" ? card.industry.toLowerCase() === selectedIndustry.toLowerCase() : true)
    .filter(card => selectedResponsibility ? card.responsibility === selectedResponsibility : true)
    .filter(card => selectedHierarchy ? card.Hierarchy === selectedHierarchy : true)
    .filter(card => card.type.toLowerCase().includes(searchInput.toLowerCase()));

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  const displayCards = currentCards.map((card, index) => (
    <div key={index} /*onClick={() => window.open(`/research-synopsis/${card.heading.replace(/\s+/g, '-')}`)}*/ className=" bg-gray-100 border-[3px] border-gray-300 flex max-md:flex-col shadow-sm rounded-[40px] min-w-full  hover:bg-[#f9f7f7]  cursor-pointer">
      <div className="p-4 basis-1/3">
        <div className="rounded-3xl  overflow-hidden ">
          <Image src={card["blog-img"]} alt="Blog Image" className="bg-contain" width={396} height={176} />
        </div>
        
      </div>
      <div className="p-4 basis-2/3">
      
        <div className="rounded-md  space-y-1 ">
        <div className="rounded-md  text-xl font-medium">
          <p style={{ color: `${card.color}` }}>{card.title}</p>
        </div>
          <h1 className=" sm:text-left  font-bold text-xl">{card.heading}</h1>
          <p className="sm:text-left text-base text-[#000000] text-justify">
                {expandedCardIndex === index ? card.text : card.text.substring(0, 191) + "..."}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleReadMore(index);
                  }}
                  className="text-[#004c92] font-bold cursor-pointer"
                >
                  {expandedCardIndex === index ? "Show Less" : "Read More"}
                </span>
              </p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className=" overflow-hidden flex flex-col items-center   ">
      <section className='relative overflow-hidden '>
        <img src='/images/bann3.jpg' alt='about' className='w-full blur-[2px]  h-[80vh] absolute' />
        <div className='absolute  bg-[black] opacity-50 w-[100%] h-[70vh] '></div>
        <div className='relative flex flex-col h-[70vh] items-center justify-center' >
          <div className='w-[75%] '>
            <p className='text-white text-xl sm:text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold '>
              “Research is seeing what everybody else has seen and thinking what nobody else has thought”
            </p>
            <p className='text-right mt-5 text-white md:text-xl lg:text-2xl font-medium '>
              - Albert Szent-Györgyi,
            </p>
            <p className='text-right  text-white lg:text-2xl mb-5  font-medium ' >  Nobel Prize winner</p>
            <p className=' text-[#e9bd16] text-xl sm:text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold mt-10'>
              "A synopsis of the research inhouse as well as from our learned community is provided here."
            </p>
          </div>
        </div>
      </section>
      <div className=" flex max-md:flex-col w-full gap-5">
        <div className="flex flex-col items-center gap-16   max-lg:max-w-[380px]  bg-[#f4f4f4]">
          {/* Industry Filters */}
          <div className="  py-[15px] px-4 lg:px-[22px] flex flex-col gap-4 ">
            <div className=" flex flex-col gap-4 ">
              <h4 className="font-bold text-base">Industry</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] border rounded-lg shadow-sm"
                value={selectedIndustry || "All"}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {["All", "BFSI", "Healthcare", "Pharmaceuticals", "Hospitality", "Retail", "Information Technology", "Oil & Gas"].map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            {/* Responsibility Filters */}
            <div className=" bg-[#E0E0E0] h-[1px]"></div>
            <div>
              <h4 className="font-bold text-base">Scope of Responsibility</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] rounded-lg shadow-sm"
                value={selectedResponsibility || "All"}
                onChange={(e) => setSelectedResponsibility(e.target.value)}
              >
                {["All", "LNS_Leadership & strategy", "SPD_Strategic Planning & Development", "RND_Research & Development", "FIN_Corporate Finance", "HRM_Human Resource Management", "PRO_Production & Manufacturing", "SCM_Supply Chain & logistics management", "IDS_IT infrastructure & Data security", "CRM_Customer Relationship Management", "QMM_Quality Control & Management", "PUR_Purchase, Inventory & Warehouse management", "FMM_Facility Maintenance & Management", "MKT_Brand & Digital marketing", "RPM_Retail & Franchise management", "INS_Institutional & Corporate sales", "PMO_Product & Project management"].map((responsibility) => (
                  <option key={responsibility} value={responsibility}>{responsibility}</option>
                ))}
              </select>
            </div>
            {/* Hierarchy Filters */}
            <div className=" bg-[#E0E0E0] h-[1px]"></div>
            <div>
              <h4 className="font-bold text-base">Grade/Hierarchy</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] rounded-lg shadow-sm"
                value={selectedHierarchy || "All"}
                onChange={(e) => setSelectedHierarchy(e.target.value)}
              >
                {["All","G1_Case worker", "G2_Supervisors", "G3_Managers", "G4_Leadership", "G5_C suite", "G6_Generic"].map((hierarchy) => (
                  <option key={hierarchy} value={hierarchy}>{hierarchy}</option>
                ))}
              </select>
            </div>
            <div className=" bg-[#E0E0E0] h-[1px]"></div>
            <div>
              <h4 className="font-bold text-base">Learning Tool Type</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] rounded-lg shadow-sm"
                value={selectedHierarchy || "All"}
                onChange={(e) => setSelectedHierarchy(e.target.value)}
              >
                {["All", "Senior", "Junior", "Team Lead"].map((hierarchy) => (
                  <option key={hierarchy} value={hierarchy}>{hierarchy}</option>
                ))}
              </select>
            </div>
            <div className=" bg-[#E0E0E0] h-[1px]"></div>

            <div>
              <h4 className="font-bold text-base">Country</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] rounded-lg shadow-sm"
                value={selectedHierarchy || "All"}
                onChange={(e) => setSelectedHierarchy(e.target.value)}
              >
                {["All", "Canada", "America", "UAE"].map((hierarchy) => (
                  <option key={hierarchy} value={hierarchy}>{hierarchy}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Display Recent Blogs */}
          {/* <div className="flex flex-col px-[22px]  gap-6 max-md:hidden">
            <div className="mt-2 flex  font-bold text-base">Recent</div>
            <div className=" flex gap-4 md:w-[250px] lg:w-[330px]">
              <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
              <div>
                <p className="text-[#100D22] text-sm">Velit officia consequat duis enim velit mollit.</p>
                <p className="text-[#878690] text-[12px] mt-2">8/12/2021</p>
              </div>
            </div>
            <div className=" flex gap-4 w-[310px]">
              <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
              <div>
                <p className="text-[#100D22] text-sm">Velit officia consequat duis enim velit mollit.</p>
                <p className="text-[#878690] text-[12px] mt-2">8/12/2021</p>
              </div>
            </div>
            <div className=" flex gap-4 w-[310px]">
              <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
              <div>
                <p className="text-[#100D22] text-sm">Velit officia consequat duis enim velit mollit.</p>
                <p className="text-[#878690] text-[12px] mt-2">8/12/2021</p>
              </div>
            </div>
          </div> */}
        </div>
        {/* Display Cards */}
        <div id="research" className="w-full">
          <div className="text-[#001d59]  font-bold  max-md:text-center text-3xl md:text-3xl lg:text-[42px] px-5 mt-5">
            Research Synopsis List
          </div>

        <div className="w-full p-5 flex flex-col gap-5  ">
          {displayCards}
        </div>
        </div>
      </div>
    </section>
  );
}
