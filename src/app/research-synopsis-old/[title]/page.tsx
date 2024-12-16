'use client'
import React from 'react'
import {  useParams } from "next/navigation";
import BlogContent from '@/components/BlogContent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
export default function Page() {
    const {title} = useParams()
    const params = ( title as string).replace(/-/g, ' ');
  return (
    <div>
      <Header/>

    <div className='min-h-[50vh]'>
        <BlogContent title={params as string} />
    </div>
    <Footer/>
    </div>
  )
}
