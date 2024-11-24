'use client';

import CommunityFaq from '@/components/Faq/CommunityFaq';
import FloatingFooter from '@/components/footer/FloatingFooter';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Button } from '@/components/ui/Button';
import React, { useEffect } from 'react';

function Page() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollToElement = () => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element is not found, retry after a short delay
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
    }
  }, []);
  
  return (
    <div>
      <Header />
      <section className="relative overflow-hidden">
        <img
          src="/images/bann1.jpg"
          alt="about"
          className="w-full blur-[2px] h-[75vh] sm:h-[75vh] absolute"
        />
        <div className="absolute bg-[black] opacity-50 w-[100%] h-[75vh] sm:h-[75vh]" />
        <div className="relative flex flex-col h-[75vh] items-center justify-center">
          <div className="w-[75%]">
            <p className="text-white text-xl sm:text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold">
              "The best collaborations create something bigger than the sum of
              what each person can create on their own "
            </p>
            <p className="text-[#ffc000] text-xl sm:text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold mt-10">
              We support our community members with our professional tools and
              indepth know how, to augument their exceptional facilitation
              capabilities to unleash unparalleled growth & prosperity in client
              organizations.
            </p>
          </div>
        </div>
      </section>
      <div className=' mt-10 text-black md:text-3xl sm:text-[35px] text-[38px] text-center  font-bold' id='community'>
      Community benefits
      </div>

      <section className="flex justify-center items-center my-10" >
        <div className="w-[90%] xl:w-[80%] flex max-md:flex-wrap justify-center max-md:gap-10">
          <div className="max-lg:basis-1/3 max-md:min-w-full lg:min-w-[420px] xl:max-h-[645px] rounded-xl flex flex-col gap-4 p-11 bg-[#002060] shadow-logobox relative">
            {/* Background SVG positioned absolutely */}
            <img
              src="/images/communities/background.svg"
              className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-0"
              alt="community"
            />
            
            {/* Button content wrapper */}
            <div className="relative z-10 text-center">
              <div className="text-3xl sm:text-[2.6rem] text-white sm:leading-[50px] font-bold">
                Join OLL community
              </div>
              <div className="mt-2 font-medium text-[#88beda] text-lg">
                Join OLL community via LinkedIn or Google. You may also choose
                to fill out our short registration form and submit.
                <p>Looking forward to co-creating with you!!</p>
              </div>
            </div>

            <div className="flex flex-col mt-6 justify-center items-center gap-4 mx-4 relative z-10">
              <Button
                variant="primary"
                className="w-full max-w-[344px] max-sm:text-base max-sm:py-4"
              >
                Sign Up Now
              </Button>
              <Button
                variant="white"
                className="w-full max-w-[344px] flex items-center justify-center gap-4 max-sm:text-base max-sm:py-4"
              >
                <img src="images/communities/google.svg" alt="" /> Sign Up Via
                Google
              </Button>
              <Button
                variant="primary"
                className="w-full max-w-[344px] flex items-center justify-center bg-[linear-gradient(135deg,#2489BE_14.64%,#0575B3_85.36%)] gap-4 max-sm:text-base max-sm:py-4"
              >
                <img src="images/communities/linkedin.svg" alt="" /> Sign Up Via
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="max-lg:basis-1/2">
            <CommunityFaq colortheme="blue" />
          </div>
        </div>
      </section>

      <Footer />
      {/* <div className="pb-[85px]"></div> */}
      <FloatingFooter />
    </div>
  );
}

export default Page;
