'use client'
import Advisory from '@/components/Advisory/Advisory'
import FloatingFooter from '@/components/footer/FloatingFooter'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Partners from '@/components/Partners/Partners'
import Partners2 from '@/components/Partners/Partners2'
import Teams from '@/components/team/Teams'
import { Button } from '@/components/ui/Button'
import React from 'react'

const data = [
  {
    title: "Observe & Learn",
    data: "Collaborate with leading organizations, thought leaders & research institutes to conduct in depth organization & behavioral research on a continuous basis."
  },
  {
    title: "Analyze & Understand",
    data: "The conclusion of the research are analyzed via expert techniques and subject experts. Being objective and empirical with regards to the analysis & conclusion is the central focus."
  },
  {
    title: "Conceptualize & Create",
    data: "With focus on the problem statement and desired state identified in our research, the learning journey for the same is conceptualized. Development of the relevant tools is an iterative process, till desired results are achieved via thorough testing in focus group."
  },
  {
    title: "Facilitate & Measure",
    data: "Our community members are trained on how to administer our tools as well as given access to our research papers. We support our community members to facilitate with their clients as well as measure the effectiveness of the tools and impact vs desired."
  }
]

function page() {
  return (
    // 345.39deg,#FFFFFF_9.63%,#FFFCF1_51.2%)
    <div >
      {/* <Header /> */}
      <div className=''>

        <Header />
        {/* <div className='flex gap-9 items-center justify-center py-10'>
        <div className='flex bg-white gap-10 items-center justify-between fixed shadow-featurebox py-2 px-3 rounded-lg min-w-[380px] max-md:w-fit'>
              <div>
                <img src='/images/logo.svg' alt='about' className='w-[85px] h-[50px]' />
              </div>
              <ul className='flex max-md:hidden gap-8 text-sm font-normal'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>Benefit</a></li>
                            <li><a href='/Communities'>Community</a></li>
                            <li><a href='/About'>About</a></li>
                        </ul>
              <div className='max-md:hidden'>
                <Button variant={'primary'} className='text-[12px] px-4 py-[10px] md:text-[12px]'>Join Community</Button>
              </div>
              <a className='md:hidden' href='/'><img src="/images/hamburger.svg" alt="Logo" /></a>

        </div>

      </div> */}
        <section className='relative overflow-hidden '>
          <img src='/images/bann2.jpg' alt='about' className='w-full blur-[2px]  h-[80vh] absolute' />
          <div className='absolute  bg-[black] opacity-70 w-[100%] h-[70vh] '></div>

          <div className='relative flex flex-col h-[70vh] items-center justify-center' >

            <div className='w-[75%] '>
              <p className='text-white text-xl sm:text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold '>
                "Longevity of this business is about being able to reinvent yourself or invent the future"
              </p>
              <p className='text-right mt-5 text-white md:text-xl lg:text-2xl font-medium '>
                - Satya Nadella
              </p>
              <p className='text-right text-white  md:text-xl lg:text-2xl  mb-5  font-medium ' > CEO, Microsoft</p>
              <p className=' text-[#e9bd16] text-xl sm:text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold mt-10'>
                Evolution & Reinvention is the key to success for all sizes & types of organizations. We provide tools to facilitate it inside out.

              </p>
            </div>
          </div>
        </section>
        {/* <section className='flex  justify-center items-center bg-[#fefefe]'  >
          <div className='flex max-md:flex-wrap gap-10 w-[90%] lg:w-[70%]  p-5 rounded-xl my-10  '>
            <div className='md:basis-1/2 flex items-center relative '>
            <img src='/images/communities/background.svg' className='absolute left-[5%] top-[20%]' alt='community' />
              <p className='text-[#194d92]  text-justify text-xl md:text-2xl font-bold'>The Organization Learning Labs is an unique Organization Development Laboratory
                where we conduct organization research on a continuous basis in collaboration with
                research focused institutions, thought leaders and leading organizations.
                <br/>
                <br/>
                We build & offer expert content and tools based on the research conclusions.
                <br/>
                <br/>
                Administration of these tools & expert facilitation by OLL community members
                cultivate organization-wide learning and facilitate strategic interventions, empowering
                organizations to evolve and innovate. This drives unparalleled growth, efficiency, and
                innovation within the organizations.</p>
            </div>
            <div className='flex md:basis-1/2 flex-col gap-5'>
              {
                data.map((item, key) => (
                  <div key={key} className=' border-[3px] p-4 border-[#00b050] rounded-xl'>
                    <p className='text-[#004c92] text-xl font-bold'>{item.title}</p>
                    <p className='text-[#595959] text-base text-justify font-medium'>{item.data}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </section> */}
        <section className='flex justify-center mt-10'>
          <div className='lg:w-[80%] w-[95%]'>
            <div className='flex flex-col items-center  justify-center'>
              {/* <div className='flex justify-center'>
              <div className='lg:text-[2.6rem] lg:w-[795px] text-2xl sm:text-4xl lg:leading-[50px] font-medium text-center text-[#100D22]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque <span className='text-[#4AB371] font-medium'> et nibh tincidunt bibendum.</span>
              </div>
            </div> */}
              {/* <div className='flex gap-2 mt-4'>
                <div>
                  <img src='/images/About/main1.png' alt='about' className='w-[564px] max-h-[561px]' />
                </div>
                <div className='flex flex-col gap-2'>
                  <img src='/images/About/main2.png' alt='about' className='w-[564px] max-h-[274px]' />
                  <img src='/images/About/main3.png' alt='about' className='w-[564px] max-h-[274px]' />
                </div>

              </div> */}
            </div>
            <div className='border-2 border-[#FEBF00] bg-white flex flex-col gap-6 rounded-3xl py-[40px] px-5 sm:px-[59px]'>
              <h1 className='text-[#0E0637] font-bold md:text-[2.6rem] leading-[50px] sm:text-[1.5rem]'>About OLL</h1>
              {/* <p className='max-w-[882px] font-medium text-lg text-[#100D22]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim. </p> */}
              <div className='relative'>
                <img src='/images/communities/background.svg' className='absolute sm:left-[30%] -top-[10%]' alt='community' />
                <p className='text-[#194d92]  text-justify text-sm md:text-2xl font-bold'>The Organization Learning Labs is an unique Organization Development Laboratory
                  where we conduct organization research on a continuous basis in collaboration with
                  research focused institutions, thought leaders and leading organizations.
                  <br />
                  <br />
                  We build & offer expert content and tools based on the research conclusions.
                  <br />
                  <br />
                  Administration of these tools & expert facilitation by OLL community members
                  cultivate organization-wide learning and facilitate strategic interventions, empowering
                  organizations to evolve and innovate. This drives unparalleled growth, efficiency, and
                  innovation within the organizations.</p>
              </div>
              {/* <p className='max-w-[882px] font-medium text-lg text-[#100D22]'>
                Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.
              </p> */}
              <div>
                <Button onClick={()=>window.open("/Communities#community", "_self")} variant={'primary'}>Join Community</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='flex justify-center my-20'>
        <div className='w-[926px] '>
          <div className='text-center'>
            <p className='text-[#FE363A] font-bold text-2xl'>We collaborate with the best</p>
          </div>
          <div className='flex mt-7 flex-wrap gap-6 justify-center'>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] max-h-[66px] h-[66px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (1).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (2).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
              <img src='/images/logos/icici.png' className='w-[60px] h-[50px]' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (4).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (5).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (6).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (7).svg' alt='partner' />
            </div>

          </div>

        </div>
      </section>
      {/* <Teams /> */}
      {/* <section className='flex justify-center my-20'>
        <div className='lg:w-[80%] w-[95%] flex max-lg:flex-wrap item-center justify-center gap-5'>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

                <div className='text-[#262626] font-bold text-[2.6rem]'>
                  8K+
                </div>
                <div className='text-[#6F6F6F] mt-2'>
                  <p>
                    Happy
                  </p>
                  <p>Ventures</p>
                </div>
              </div>

            </div>
          </div>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

                <div className='text-[#262626] font-bold text-[2.6rem]'>
                  10K+
                </div>
                <div className='text-[#6F6F6F] mt-2'>
                  <p>
                    Startup
                  </p>
                  <p>Funded</p>
                </div>
              </div>

            </div>
          </div>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

                <div className='text-[#262626] font-bold text-[2.6rem]'>
                  99+
                </div>
                <div className='text-[#6F6F6F] mt-2'>
                  <p>
                    MillionDollar
                  </p>
                  <p>Pool</p>
                </div>
              </div>

            </div>
          </div>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

                <div className='text-[#262626] font-bold text-[2.6rem]'>
                  10K+
                </div>
                <div className='text-[#6F6F6F] mt-2'>
                  <p>
                    Startup
                  </p>
                  <p>Funded</p>
                </div>
              </div>

            </div>
          </div>


        </div>
      </section> */}
      {/* <Partners /> */}
      <div className='bg-[#001631]'>

        <Partners2 />
      </div>
      <Advisory />
      <Footer />
      <div className="pb-[85px]"></div>
      <FloatingFooter />
    </div>
  )
}

export default page
