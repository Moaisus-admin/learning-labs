'use client'
import React, { useState } from 'react'
import { Button } from '../ui/Button'
import Modal from '../Modals/EnquiryModal';
const logos = [
    '/images/logos/lnt.svg',
    '/images/logos/sam.svg',
    '/images/logos/chayo.svg',
    '/images/logos/pwc (2).svg',
    '/images/logos/rel.svg',
]

function Main() {
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
    return (
        <>
            <div className='relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] min-w-full flex justify-center items-center '>
                <div className='absolute w-full min-h-[80vh]  blur-[13.25px]  '>
                    <img src="/images/homemain.jpg" className=' relative  bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' alt="" />
                    {/* <div  className='absolute bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' ></div> */}
                </div>
                <div className='absolute w-full min-h-[80vh]  blur-[13.25px]  '>
                    {/* <img src="/images/main.jpg" className=' relative  bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' alt="" /> */}
                    <div  className='absolute bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' ></div>
                </div>
                <div className='relative max-sm:px-2 lg:w-[70%] flex flex-col gap-20 md:gap-32'>
                    <div className='flex justify-center'>

                        <div className='flex flex-col gap-[45px] xl:w-[900px]'>

                            
                            <div className=' text-3xl lg:text-[3.4rem] lg:leading-[4rem] font-medium text-center text-white'>
                                Shaping tomorrow’s competencies in <span className='text-[#ffbf23] font-bold'>organizations & teams</span>
                            </div>
                            <div className='flex justify-center'>

                                <p className='text-center text-[#ECF5FF] md:text-xl lg:w-[814px] max-sm:px-5 max-sm:text-justify'>Indepth research insights transformed into powerful organization development tools & simulations, to empower business practioners to implement strategic interventions that drive growth & innovation</p>
                            </div>
                            <div className='flex gap-[20px] justify-center'>
                                <Button onClick={()=>window.open("/Communities#community", "_self")} variant={'primary'} className='bg-[#00b84d] text-[#ffffff]'>Join Community</Button>
                                <Button variant={'outline'} onClick={openModal} className='border-[#ffffff] text-[#ffffff] '>Let’s Collaborate</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Main


