import React from 'react'
import FooterLinks from './FooterLinks'
import FloatingFooter from './FloatingFooter'

function Footer() {
    return (
        <>
            <div className='flex min-h-auto  md:min-h-screen relative items-center flex-col gap-16 bg-[#000C19] lg:pt-20  py-10'>
                <div className='w-[90%] xl:w-[70%] relative  flex min-h-[250px] md:min-h-[383px] max-sm:my-4 items-center justify-center'>
                    <img src="/images/footer/footer1.png" className='rounded-3xl absolute min-h-[220px]' alt="Logo" />
                    <div className='flex items-center flex-col relative justify-center gap-4 sm:gap-[2.5rem] lg:gap-[3.4rem]'>
                        <img src="/images/footer/footerlogo.svg" className='z-2 w-[3.5rem] sm:w-[4rem] md:w-[5rem] lg:w-auto' alt="Logo" />
                        <p className='text-white  sm:text-2xl md:text-3xl lg:text-[2.6rem] font-bold'>Learn. Evolve. Reinvent</p>
                    </div>
                </div>

                <div className='sm:w-[90%] lg:w-[80%]  relative xl:min-h-[383px] max-sm:my-4 bg-[#000C19] items-center justify-center'>
                    {/* <img src="/images/footer/footer2.png" className='rounded-3xl bg-[#000C19] min-h-[220px] absolute max-md:bottom-0' alt="Logo" /> */}
                    <div className='relative'>
                        <FooterLinks />
                    </div>
                </div>
                <div className="pb-[45px]"></div>

            </div>
        </>
    )
}

export default Footer
