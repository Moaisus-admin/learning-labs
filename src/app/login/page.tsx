import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import LoginForm from '@/components/Login/Login';
import SignupForm from '@/components/Signup/Signup';
import React from 'react';

function login() {

  return (
      <div 
      className='relative'
      >
        <img src="/images/signup/signupBg.svg" className="w-full h-full bg-contain bg-no-repeat absolute z-[-1]" alt="Signup Background" />
      <Header />
      <LoginForm />
      <Footer/>
      </div>
  )

}

export default login;
