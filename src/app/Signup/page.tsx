import Header from '@/components/header/Header';
import SignupForm from '@/components/Signup/Signup';
import React from 'react';

function SignupPage() {

  return (
      <div 
      // style={{
      //   backgroundImage: "url('/images/signup/signupBg.svg')",
      //   backgroundSize: 'contain',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
      className='relative'
      >
        <img src="/images/signup/signupBg.svg" className="w-full h-full bg-contain bg-no-repeat absolute" alt="Signup Background" />
      <Header />
      <SignupForm />;
      </div>
  )

}

export default SignupPage;
