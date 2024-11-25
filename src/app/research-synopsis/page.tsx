'use client'
import React, { Suspense } from 'react'; // Import Suspense
import Blog from "@/components/BlockSection";
import { useSearchParams } from "next/navigation";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import FloatingFooter from '@/components/footer/FloatingFooter';

export default function Page() {
  return (
    <main >
      <Header />
      <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogWithSearchParams />
        </Suspense>
      </div>
      <Footer />
      <FloatingFooter/>
    </main>
  );
}

function BlogWithSearchParams() {
  const search_params = useSearchParams()
  const ref = search_params.get("text");
  return <Blog filter={ref} />;
}