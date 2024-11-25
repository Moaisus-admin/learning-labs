'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

const logos = [
    '/images/logos/lnt.svg',
    '/images/logos/sam.svg',
    '/images/logos/chayo.svg',
    '/images/logos/pwc (2).svg',
    '/images/logos/rel.svg',
];

const sections = [
    {
        id: 'table-of-contents',
        title: 'Maturity assessment tools',
        link: "https://www.youtube.com/embed/gXUuPdv9_RA?autoplay=1&loop=1&playlist=gXUuPdv9_RA&mute=1"
    },
    { id: 'screencasts', title: 'Immersive Business simulations', link: "https://www.youtube.com/embed/gXUuPdv9_RA?autoplay=1&loop=1&playlist=gXUuPdv9_RA&mute=1" },
    { id: 'resources', title: 'On-demand research & consultation', link: "https://www.youtube.com/embed/gXUuPdv9_RA?autoplay=1&loop=1&playlist=gXUuPdv9_RA&mute=1" },
    { id: 'pricing', title: 'Custom learning program development', link: "https://www.youtube.com/embed/gXUuPdv9_RA?autoplay=1&loop=1&playlist=gXUuPdv9_RA&mute=1" },
];

function Overview() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='max-md:w-[100%] w-full bg-white p-1  flex-col flex justify-center items-center'>
                <div className='w-full   flex justify-center min-w-[100%] '>
                    {/* Aspect Ratio Wrapper */}
                    {/* max-sm:rounded-lg  max-sm:border-2 max-sm:border-white bg-[#001631] */}
                    <div className='relative w-full ' >
                        <iframe
                            className=' max-sm:rounded-lg  top-0 left-0 w-full min-h-[35vh] md:h-[90vh] lg:h-[100vh]'
                            src={sections[activeIndex].link}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ border: 'none' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
