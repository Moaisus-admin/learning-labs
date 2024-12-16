'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="min-h-[128px] flex justify-between items-center px-4 lg:px-[140px]">
      <div className="logo">
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo" className="sm:w-[15rem] w-[10rem]" />
        </Link>
      </div>
      <div className="flex gap-5 sm:gap-10 items-center justify-center">
        {/* Conditionally render the Login button */}
        {pathname !== '/login' && pathname !== '/Signup' && (
          <div>
            <Link href="/login">
              <Button variant="primary" className="bg-[#004c92] text-[#ffffff] py-2 px-2">
                Login
              </Button>
            </Link>
          </div>
        )}
        <div
          className="hamburger-menu cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <img src="/images/hamburger.svg" alt="Menu" />
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog className="z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                className="w-auto h-8"
                src="/images/logo.svg"
                height={32}
                width={32}
                alt="Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Navigation Links */}
          <div className="flow-root mt-10">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Link
                  href="/"
                  className="flex w-full items-center justify-between rounded-lg text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="flex w-full items-center justify-between rounded-lg text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="/Communities"
                  className="flex w-full items-center justify-between rounded-lg text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50"
                >
                  OLL Communities
                </Link>
                <Link
                  href="/research-synopsis"
                  className="flex w-full items-center justify-between rounded-lg text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50"
                >
                  Research Synopsis
                </Link>
              </div>
              <div className="py-6">
                <div className="flex flex-col items-center gap-8">
                  <Link
                    href="/Communities#community"
                    className="w-full px-10 py-4 text-xl font-bold text-center text-white rounded-md shadow-sm bg-[#4AB371] hover:bg-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Join Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Header;
