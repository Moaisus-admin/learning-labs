'use client'
import React, { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import Image from 'next/image'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Button } from '../ui/Button';
import Link from 'next/link';

const products = [
    {
        name: "Healthcare",
        description: "Real IPs from ISPs for reliable and secure web scraping",
        href: "/Industries/HealthCare",
    },

    {
        name: "Banking & Finance",
        description: "High-speed, scalable proxies from data centers for bulk web scraping",
        href: "/Industries/Bank&Finance",
    },
    {
        name: "Hospitality",
        description: "Modern, high-availability proxies with vast address space for advanced needs",
        href: "/Industries/Hospitality",
    },
    {
        name: "Pharmaceuticals",
        description: "Modern, high-availability proxies with vast address space for advanced needs",
        href: "/Industries/Pharmaceutical",
    },
    {
        name: "Retail",
        description: "Modern, high-availability proxies with vast address space for advanced needs",
        href: "/Industries/Retail",
    },
    // {
    //   name: "Static ISP Proxies",
    //   description: "Usce consequat mi elementum, semper massa sit amet",
    //   href: "#",
    //   icon: "/images/icons/static-isp-icon.svg",
    //   price: "$4.99",
    // },
    // {
    //   name: "Unlimited Residential",
    //   description: "Usce consequat mi elementum, semper massa sit amet",
    //   href: "#",
    //   icon: "/images/icons/residential-icon.svg",
    //   price: "$4.99",
    // },
    // {
    //   name: "Mobile Proxies",
    //   description: "Usce consequat mi elementum, semper massa sit amet",
    //   href: "#",
    //   icon: "/images/icons/mobile-icon.svg",
    //   price: "$4.99",
    // },
];


const resources = [
    { name: "About Us", href: "/About", icon: '/images/icons/FAQ.svg' },
    { name: "Blog", href: "/Blog", icon: '/images/icons/BLOG.svg' },
    { name: "Knowledge", href: "/knowledge", icon: '/images/icons/guide.svg' },
    { name: "Integration", href: "/Blog?text=Integration", icon: '/images/icons/integration.svg' },
    { name: "Support", href: "/contact-us", icon: '/images/icons/support.svg' },
]
const explore = [
    {
        name: "Blog",
        description: "Usce consequat mi elementum, semper massa sit amet",
        href: "/Blog",
    },

]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-[128px] flex justify-between items-center px-4 lg:px-[140px]">
            <div className="logo" >
                <a href='/'><img src="/images/logo.svg" alt="Logo" className=' sm:w-[15rem] w-[10rem]' /></a>
            </div>
            <div className='flex gap-5 sm:gap-10  items-center justify-center'>
                <div>
                    <Button variant={'primary'} className='bg-[#004c92] text-[#ffffff] py-2 px-2'>Login</Button>
                </div>
                <div className="hamburger-menu cursor-pointer " onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <img src="/images/hamburger.svg" alt="Logo" />
                </div>
            </div>

            <Dialog
                className="z-50"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="./" className="-m-1.5 p-1.5">
                            <span className="sr-only">Learning Labs</span>
                            <Image className="w-auto h-8" src="/images/logo.svg" height={400} width={400} alt="" />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                    </div>
                    <div className="flow-root mt-10">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                {/* <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Industries
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? "rotate-180" : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...products].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure> */}

                                {/* <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Explore
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? "rotate-180" : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...products].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure> */}
                                {/* <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Resources
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? "rotate-180" : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {resources.map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure> */}
                                {/* <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Services
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? "rotate-180" : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {services.map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure> */}
                                <a href="/" className="flex w-full items-center justify-between rounded-lg  text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50">
                                    Home
                                </a>
                                <a href="/About" className="flex w-full items-center justify-between rounded-lg  text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50">
                                    About Us
                                </a>
                                <a href="/Communities" className="flex w-full items-center justify-between rounded-lg  text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50">
                                    OLL Communities
                                </a>
                                <a href="/research-synopsis" className="flex w-full items-center justify-between rounded-lg  text-base font-semibold leading-7 py-2 text-gray-900 hover:bg-gray-50">
                                    Research Synopsis

                                </a>


                            </div>
                            <div className="py-6">
                                <div className="flex flex-col items-center gap-8">
                                <Link
  href="/Communities#community"
  className="w-full px-10 py-4 text-xl font-bold text-center text-white rounded-md shadow-sm bg-[#4AB371] hover:bg-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
>
  Join Community
</Link>

                                    {/* <a
                                        href="#"
                                        className="w-full px-10 py-4 text-base font-semibold text-center text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
                                    >
                                        Sign up
                                    </a> */}
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