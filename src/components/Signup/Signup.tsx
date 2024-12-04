"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { Input } from '@headlessui/react';
import FloatingLabelInput from '../Fields/FloatingInput';
import FloatingPasswordInput from '../Fields/FloatingPassword';


function SignupForm() {
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
      <div className="w-full max-w-[562px] bg-[#004B96] p-[53px] rounded-lg shadow-lg xl:absolute xl:top-8 xl:right-8"
      style={{
        backgroundImage: "url('/images/signup/join.svg')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        
        <h2 className="text-[40px] font-semibold text-center text-white">
          Join Community
        </h2>
        <p className="text-center text-white text-[18px] mt-2">
          Managing a hackathon can be a challenge without the right tools.
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

          {/* Company Name */}
          <FloatingLabelInput
           
            label="Company Name"
            placeholder="Your company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          {/* Work Email */}
          <FloatingLabelInput
           
            label="Work Email"
            placeholder="work@example.com"
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
            required
          />

          {/* Password */}
          <FloatingPasswordInput
            label="Create Password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <div className="text-right text-white text-sm cursor-pointer mt-[2.5rem] mr-[0.5rem]">
            <Link href="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
          </div>
         

          {/* Terms and Conditions */}
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
              I agree to the{" "}
              <Link href="/terms" className="text-[#B4CEFF] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#B4CEFF] hover:underline">
                Privacy Policy
              </Link>
            </label>
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
        <div className="mt-4 flex flex-row space-x-2">
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
          Already have an account?{" "}
          <Link href="/login" className="text-white font-semibold underline">
            Login
          </Link>
        </p>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full xl:w-2/4 flex flex-col lg:items-start sm:justify-center px-4 py-6">
      <div className="w-full max-w-2xl ">
          <h2 className="text-4xl font-normal text-gray-800 leading-tight">
            Here's our <br />
            <span className="">Joining benefits</span>
          </h2>
          <div>
            <img src="/images/signup/DashboardTab.png" className="w-full" alt="" />
          </div>

        
         
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
