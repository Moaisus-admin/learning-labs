import Header from '@/components/header/Header';
import SignupForm from '@/components/Signup/Signup';
import React from 'react';

function SignupPage() {

  return (
      <div className='bg-[linear-gradient(180deg,#f1fff6_20%,#00000000_100%)]'>
      <Header />
      <SignupForm />;
      </div>
  )

}

export default SignupPage;
