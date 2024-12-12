"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { Input } from '@headlessui/react';
import FloatingLabelInput from '../Fields/FloatingInput';
import FloatingPasswordInput from '../Fields/FloatingPassword';
import VideoInTablet from '../Player/VideoPlayer';
import BenefitSlider from '../Signup/BenefitsSlider';
import UpdateSlider from './UpdateSilder';


function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", { email, company, workEmail, password, termsAgreed });
    // Redirect or further processing
    router.push("/ThankYou");
  };
  return (
<div className="min-h-screen flex flex-col xl:flex-row container mx-auto px-4"
>
{/* Left Side: Form */}
<div className="relative w-full xl:w-2/4 flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-[562px] bg-[#004B96] xl:p-[53px] md:p-[53px] lg:p-[53px] p-8 rounded-lg shadow-lg xl:absolute xl:top-8 xl:right-8 "
      style={{
        backgroundImage: "url('/images/signup/join.svg')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        
        <h2 className="text-[40px] font-semibold text-center text-white">
         Login
        </h2>
        <p className="text-center text-white text-[18px] mt-2">
        Please Join to continue to your account.
        </p>

          {/* Signup Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <FloatingLabelInput 
           
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />

        
        


          {/* Password */}
          <FloatingPasswordInput
            label="Create Password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <div className="flex justify-between text-white text-sm cursor-pointer mt-[2.5rem] mr-[0.5rem]">
        <div className="flex items-center">
            <input
              id="agree"
              type="checkbox"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              className="h-4 w-4 text-[#B4CEFF] focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label
              htmlFor="agree"
              className="ml-2 text-sm text-white font-medium"
            >
              Keep me logged in
            </label>
          </div>
          <div>
            <Link href="/forgot-password" className="hover:underline text-[#FFCABF]">
              Forgot Password?
            </Link>
          </div>
            
          </div>
         

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-500 focus:outline-none"
          >
            Join
          </button>
          </form>

          <div className="mt-4 flex items-center justify-center">
          <span className="border-t border-gray-300 w-1/3"></span>
          <span className="text-gray-500 mx-4">or</span>
          <span className="border-t border-gray-300 w-1/3"></span>
        </div>

        {/* Social Buttons */}
        <div className="mt-4 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-2">
  <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 hover:bg-gray-100">
    <img
      src="/images/signup/google.svg"
      alt="Google"
      className="w-5 h-5 mr-2"
    />
    Join Via Google
  </button>
  <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 hover:bg-gray-100">
    <img
      src="/images/signup/linkedin.svg"
      alt="LinkedIn"
      className="w-5 h-5 mr-2"
    />
    Join Via LinkedIn
  </button>
</div>


        {/* Already Have an Account */}
        <p className="mt-6 text-center text-[18px] text-white">
         Need an account?{" "}
          <Link href="/login" className="text-white font-semibold underline">
            Join now
          </Link>
        </p>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full xl:w-2/4 flex flex-col lg:items-center sm:justify-center px-4 py-6">
  <div className="w-full max-w-2xl space-y-6">


<UpdateSlider />

  </div>
</div>

    </div>
  )
}

export default LoginForm
