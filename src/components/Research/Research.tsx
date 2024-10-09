import React from 'react'
import { Button } from '../ui/Button'
import ResearchCards from './ResearchCards'

interface CardData {
    image:string,
    title:string,
    description:string,
    status:string
}

const cardData:CardData[] = [
    {
        image:'/images/research/1.jpg',
        title:' Facilitating aspirational corporate women leadership in BFSI in India',
        description:" This research explores the best practices globally as well as  the pre requisite foundations required from the organization, team dynamic, job design as well as individual mental models",
        status:'Ongoing'
    },
    {
        image:'/images/research/2.jpg',
        title:'Embedding service excellence in Healthcare industry',
        description:'This research explores GUEST model in a healthcare industry  perspective. We are working closely with key executives in the leading enterprises as well as subject experts.',
        status:'Ongoing'
    },
    {
        image:'/images/research/3.jpg',
        title:'Collaboration driven product development',
        description:'This research explores the concepts of Open innovation in tech and product development focused teams. Our focus in this research are practical organization frameworks, workflows, trans company culture &  leadership.',
        status:'Upcoming'
    }
]

function Research() {
  return (
    <div className='flex relative justify-center items-center min-h-screen  lg:py-32 bg-[#000C19]'>
        <div>
            <img src="/images/research/flash.svg" className='absolute top-0 left-0' alt="Research" />
        </div>
    <div className=' lg:w-[80%] xl:w-[70%] items-center box-content flex flex-col gap-16 '>
        <div >
            <p className='text-center text-white  font-bold sm:text-[42px] text-[38px]'>
                Join Our Research
            </p>
            <p className='text-[#BDBDBD] mt-4 font-medium text-center'>
            We conduct organization research projects throughout the year. We 
invite individuals to join any of the our research projects as participants, 
as well as organizations as partners. Participants will enrich their 
experience being a part of a research project as well as receive a 
certificate stating the same. Organizations who join as partners will 
receive a copy of the completed research paper on completion.
            </p>
        </div>
        <div className='flex max-lg:flex-wrap items-center justify-center gap-6'>
            {
                cardData.map((item,index) => (
                    <ResearchCards key={index} data={item}/>
                ))
            }
        </div>
        <div className='flex justify-center'>
            <Button variant={'white'} className='rounded-[30px] text-[14px] w-[285px]'> TRENDING REPORT</Button>
        </div>
    </div>
      
    </div>
  )
}

export default Research
