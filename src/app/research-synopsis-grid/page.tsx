import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import QuoteComponent from '@/components/Research/QuoteComponent';
import ResearchSynopsis from '@/components/Research/ReserchGrid';
import React from 'react';

function Page() {
  return (
    <div className="relative">
      {/* Adjusted background image position */}
      <img
        src="/images/signup/signupBg.svg"
        className="w-full h-full bg-contain bg-no-repeat absolute z-[-1] top-[-500px]"
        alt="Signup Background"
      />
      <Header />
      <QuoteComponent />
      <ResearchSynopsis />
      <Footer />
    </div>
  );
}

export default Page;

