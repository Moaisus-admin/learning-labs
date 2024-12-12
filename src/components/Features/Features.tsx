'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';


const FeatureDate = [
    {
        img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
        title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
        content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB indicators for the locally owned Indian luxury hotels. Four clusters of WLB indicators that are grounded in the experiences of front-office employees are identified and presented. Interview data from human resource representatives unveil that hotels consider existing WLB practices as key HRM practices with an inclusive TM approach. The findings also surface the differences in expectations of front-office employees and WLB practices followed by the hotels."
    },
    {
        img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
        title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
        content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of employees..."
    },
    {
        img: "/images/features/BF001_cover image.jpg",
        title: "Leadership Style & Organizational Effectiveness in Indian Banking Industry",
        content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
    }
];


const data: Array<keyof typeof Data> = [
    "Healthcare",
    "Pharmaceuticals",
    "BFSI",
    "Hospitality",
    "Retail"
]



const Data = {
    "Hospitality": {
        title: "Can continuous learning amplify employees’ change-efficacy and contextual performance in a Post merger phase Brings You Success",
        content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees working with a recently merged bank and further explores the mediating role of employees’ change efficacy in relationship between continuous learning and contextual performance of employees",
        date: "May 27, 2022",
        type: "Hospitality",
        img: "/images/features/BFHRM03INOLL101_cover image.jpg",
        href: "/research/hospitality",
        more: [
            {
                img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
                title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
                content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB ..."
            },
            {
                img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
                title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
                content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees..."
            },
            {
                img: "/images/features/BF001_cover image.jpg",
                title: "  Leadership Style & Organizational Effectiveness in Indian Banking Industry",
                content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
            }
        ],
    },
    "Retail": {
        title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
        content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees",
        date: "May 27, 2022",
        img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
        type: "Retail",
        more: [
            {
                img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
                title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
                content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB ..."
            },
            {
                img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
                title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
                content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees..."
            },
            {
                img: "/images/features/BF001_cover image.jpg",
                title: "  Leadership Style & Organizational Effectiveness in Indian Banking Industry",
                content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
            }
        ],
    },
    "BFSI": {
        title: "Leadership Style & Organizational Effectiveness in Indian Banking Industry",
        content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization",
        date: "May 27, 2022",
        img: "/images/features/BF001_cover image.jpg",
        type: "BFSI",
        more: [
            {
                img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
                title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
                content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB ..."
            },
            {
                img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
                title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
                content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees..."
            },
            {
                img: "/images/features/BF001_cover image.jpg",
                title: "  Leadership Style & Organizational Effectiveness in Indian Banking Industry",
                content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
            }
        ],
    },
    "Pharmaceuticals": {
        title: "Leadership Style & Organizational Effectiveness in Indian Banking Industry",
        content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization",
        date: "May 27, 2022",
        img: "/images/features/BF001_cover image.jpg",
        type: "Pharmaceuticals",
        more: [
            {
                img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
                title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
                content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB ..."
            },
            {
                img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
                title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
                content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees..."
            },
            {
                img: "/images/features/BF001_cover image.jpg",
                title: "  Leadership Style & Organizational Effectiveness in Indian Banking Industry",
                content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
            }
        ],
    },
    "Healthcare": {
        title: "Leadership Style & Organizational Effectiveness in Indian Banking Industry",
        content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization",
        date: "May 27, 2022",
        img: "/images/features/BF001_cover image.jpg",
        type: "Healthcare",
        more: [
            {
                img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
                title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
                content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB ..."
            },
            {
                img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
                title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
                content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees..."
            },
            {
                img: "/images/features/BF001_cover image.jpg",
                title: "  Leadership Style & Organizational Effectiveness in Indian Banking Industry",
                content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
            }
        ],
    },

}

function Features() {
    const [featureData, setFeatureData] = useState(Data.Healthcare);
    const [isExpanded, setIsExpanded] = useState<boolean[]>(Array(featureData.more.length).fill(false));
    const [isExpanded1, setIsExpanded1] = useState(false);
    const toggleReadMore = (index: number) => {
        setIsExpanded(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const singleToggleReadMore = () => {
        setIsExpanded1(prevState => !prevState);
    }
    let singleText = 'This study investigates the relationship among continuous learning, change-efficacy and contextual performance of employees working with a recently merged bank and further explores the mediating role of employees’ change efficacy in relationship between continuous learning and contextual performance of employees....'

    return (
        <div className='relative bg-[#001631] py-10 md:pb-20 flex justify-center'>
            <div>
                <img src="/images/research/flash.svg" className='absolute top-0 left-0' alt="Research" />
            </div>
            <div className='relative w-[95%] flex flex-col gap-8'>
                <div>
                    <h1 className='text-white text-3xl md:text-3xl lg:text-[42px]  text-center mt-5 font-bold'>Industries in focus</h1>
                </div>
                <div className='flex justify-center overflow-x-auto'>
                    <div className='bg-[rgba(255,255,255,0.12)] max-lg:overflow-x-scroll w-[948px] rounded-[888px] flex md:justify-center px-4 py-2 gap-[42px]'>
                        {data.map((item, index) => (
                            <div key={index} onClick={() => setFeatureData(
                                Data[item as keyof typeof Data]
                            )} className={`text-black text-center shadow-featurebox font-medium min-w-[150px] px-[32px] py-[10px] cursor-pointer  text-sm rounded-[30px] ${item == featureData.type ? "bg-[#FEBF00]" : "bg-white"}`}>{item}</div>
                        ))
                        }
                    </div>
                </div>

                <div className='flex gap-12 flex-wrap items-start justify-center'>
                    <div className='flex flex-col gap-[18px] md:w-[548px]'>
                        <Image src="/images/features/BFHRM03INOLL101_cover image.jpg" className='w-full h-full object-cover rounded-3xl' width={500} height={500} alt="" />
                        <div className='flex flex-col gap-[5px] text-justify'>
                            <p className='text-sm text-[#E8971E]'>{featureData.date}</p>
                            <h2 className='text-xl font-medium  md:font-bold text-white'>{featureData.title}</h2>
                            <p className='text-sm sm:text-lg text-[#BDBDBD]'>{isExpanded1 ? featureData.content : featureData.content.substring(0, 20) + "... "}
                                <span onClick={singleToggleReadMore} className="text-[#E8971E] font-light cursor-pointer">
                                    {isExpanded1 ? "Show Less" : "Read More"}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {featureData.more.map((item, index) => (
                            <div key={index} className='flex gap-4 max-w-[700px]'>
                                <Image src={item.img} className='w-[150px] h-full max-md:h-[90px] xl:w-[250px] object-cover rounded-3xl' width={500} height={500} alt="" />
                                <div className='text-white flex flex-col gap-2'>
                                    <h2 className='md:text-xl font-medium md:font-bold'>{item.title}</h2>
                                    <p className='md:text-[16px] font-normal text-[#BDBDBD] tracking-[0.5px]'>
                                        {isExpanded[index] ? item.content : item.content.substring(0, 20) + "... "}
                                        <span onClick={() => toggleReadMore(index)} className="text-[#E8971E] font-light cursor-pointer">
                                            {isExpanded[index] ? "Show Less" : "Read More"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                    <div className='flex items-center justify-center'>
                        <Button onClick={() => window.open("/research-synopsis#research", "_self")} className='bg-[#00b84d]' variant='primary' >Our Research Repository</Button>
                    </div>
            </div>
        </div>
    );
}

export default Features;
