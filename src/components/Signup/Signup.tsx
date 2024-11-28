"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function SignupForm() {
    const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data:', { fullName, company, workEmail, password });
  };

  return (
<div className="min-h-screen flex flex-col xl:flex-row">
{/* Left Side: Form */}
<div className="relative w-full xl:w-2/5 flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg xl:absolute xl:top-8 xl:right-8"
      style={{
        backgroundImage: "url('/images/communities/GreenLoginBg.svg')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Join Community
          </h2>
          <p className="text-lg text-gray-600 mt-2 text-center">
            Managing a hackathon can be a challenge without the right tools.
          </p>

          {/* Signup Form */}
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <div className="mt-1">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="work-email"
                className="block text-sm font-medium text-gray-700"
              >
                Work Email
              </label>
              <div className="mt-1">
                <input
                  id="work-email"
                  name="work-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="flex justify-between items-center text-sm font-medium text-gray-700"
              >
                Create Password
                <Link
                  href="/forgot-password"
                  className="text-sm text-green-600 hover:text-green-500"
                >
                  Forgot password?
                </Link>
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="********"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                required
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="agree"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{' '}
                <Link
                  href="/terms"
                  className="text-green-600 hover:text-green-500"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="text-green-600 hover:text-green-500"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => {
                    router.push('/ThankYou');

                }}
              >
                Join
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-green-600 hover:text-green-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full xl:w-3/5 flex flex-col lg:items-start sm:justify-center px-4 py-6">
      <div className="w-full max-w-2xl ">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Simplify Your <br />
            <span className="text-green-600">Learning Experience</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Managing a hackathon can be a challenge without the right tools. We
            simplified this process to create a better platform experience for
            your organization.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-500 w-full sm:w-auto mb-4 sm:mb-0">
              Join Manually
            </button>
            <button className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 w-full sm:w-auto">
              <img
                src="/images/logos/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              Join via LinkedIn
            </button>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 my-10">
            {/* Logo Items */}
            <div className="bg-gray-100 flex justify-center items-center py-4 px-4 rounded-md shadow">
              <img
                src="/images/logos/maskg (1).svg"
                alt="partner"
                className="max-h-12"
              />
            </div>
            <div className="bg-yellow-500 flex justify-center items-center py-4 px-4 rounded-md shadow">
              <img
                src="/images/logos/maskg (2).svg"
                alt="partner"
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4 px-4 rounded-md shadow">
              <img
                src="/images/logos/icici.png"
                alt="partner"
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4 px-4 rounded-md shadow">
              <img
                src="/images/logos/maskg (4).svg"
                alt="partner"
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4 px-4 rounded-md shadow">
              <img
                src="/images/logos/maskg (5).svg"
                alt="partner"
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4 px-4 rounded-md shadow">
              <img
                src="/images/logos/maskg (6).svg"
                alt="partner"
                className="max-h-12"
              />
            </div>
            <div className="bg-gray-100 flex justify-center items-center py-4 px-4 rounded-md shadow">
              <img
                src="/images/logos/maskg (7).svg"
                alt="partner"
                className="max-h-12"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
            Who Will Benefit By Joining The OLL Community
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Managing a hackathon can be a challenge without the right tools. We
            simplified this process to create a better platform experience for
            your organization.
          </p>

          {/* Benefit Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit Item */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full w-24 h-24 shadow-lg overflow-hidden">
                <img
                  src="/images/research/1.jpg"
                  alt="Learning and Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-800">
                Learning and Development Professionals
              </p>
            </div>
            {/* Repeat similar blocks for other benefit items */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full w-24 h-24 shadow-lg overflow-hidden">
                <img
                  src="/images/research/2.jpg"
                  alt="HR Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-800">
                Human Resource and Organization Development Professionals
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full w-24 h-24 shadow-lg overflow-hidden">
                <img
                  src="/images/research/3.jpg"
                  alt="Corporate Training"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-800">
                Corporate Training Professionals
              </p>
            </div>
            {/* Add more benefit items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
