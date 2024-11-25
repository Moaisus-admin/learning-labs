'use client'
import React from 'react'
import { Button } from '../ui/Button'
import ResearchCards from './ResearchCards'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CardData {
    image: string,
    title: string,
    description: string,
    status: string
}

const cardData: CardData[] = [
    {
        image: '/images/research/1.jpg',
        title: ' Facilitating aspirational corporate women leadership in BFSI in India',
        description: " This research explores the best practices globally as well as  the pre requisite foundations required from the organization, team dynamic, job design as well as individual mental models",
        status: 'Ongoing'
    },
    {
        image: '/images/research/2.jpg',
        title: 'Embedding service excellence in Healthcare industry',
        description: 'This research explores GUEST model in a healthcare industry  perspective. We are working closely with key executives in the leading enterprises as well as subject experts.',
        status: 'Ongoing'
    },
    {
        image: '/images/research/3.jpg',
        title: 'Collaboration driven product development',
        description: 'This research explores the concepts of Open innovation in tech and product development focused teams. Our focus in this research are practical organization frameworks, workflows, trans company culture &  leadership.',
        status: 'Upcoming'
    }
]

function Research() {
    const settings = {
        slidesToShow: 3,
        speed: 500,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10px',
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    appendDots: (dots: React.ReactNode) => (
                        <div
                          style={{
                            borderRadius: "10px",
                            padding: "10px",
                            bottom: "-50px",
                          }}
                        >
                          <ul style={{ margin: "0px" }}> {dots} </ul>
                        </div>
                      ),
                      customPaging: (i: number) => (
                        <div
                          style={{
                            width: "30px",
                            color: "blue",
                            // border: "1px blue solid"
                          }}
                        >
                          <div style={{width:"10px",height:"10px", background:"black", borderRadius:"100%"}}></div>
                        </div>
                      )
                }
            }
        ]
    };
    return (
        <div className='flex relative justify-center  items-center lg:min-h-screen  py-10 md:py-20  lg:py-10 '>
            <div>
                {/* <img src="/images/research/flash.svg" className='absolute top-0 left-0' alt="Research" /> */}
            </div>
            <div  className=' lg:w-[95%] xl:w-[80%] items-center w-full flex flex-col gap-8 '>
                <div >
                    <p className='text-center text-[#001631]  font-bold sm:text-[42px] text-3xl'>
                        Join Our Research
                    </p>
                    <p className='text-[#001631] mt-4 mx-4 md:mx-0 font-medium text-center'>
                        We conduct organization research projects throughout the year. We
                        invite individuals to join any of the our research projects as participants,
                        as well as organizations as partners. Participants will enrich their
                        experience being a part of a research project as well as receive a
                        certificate stating the same. Organizations who join as partners will
                        receive a copy of the completed research paper on completion.
                    </p>
                </div>
                <div className='slider-container overflow-hidden max-sm:pb-10 lg:min-h-[70vh] w-full  '>
                <Slider {...settings}>
                        {cardData.map((data, index) => (
                            <div className="flex flex-col  justify-center items-center lg:px-2 ">
                                <ResearchCards key={index} data={data} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* <div className='flex justify-center'>
                    <Button onClick={()=>window.open("/research-synopsis", "_self")} variant={'white'} className='rounded-[30px] bg-[#00b84d] text-white text-[14px] w-[285px]'> Research 
                    synopsis</Button>
                </div> */}
            </div>
              

        </div>
    )
}

export default Research
