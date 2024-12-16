"use client";
import React from "react";
import { useParams } from "next/navigation";
import BlogDetails from "@/components/Research/BlogDetails";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const BlogPage: React.FC = () => {
  const params = useParams();
  const title = params.title ? decodeURIComponent(params.title as string) : "";

  if (!title) return <p>Loading...</p>;

  return (
    <div className="relative">
    {/* Adjusted background image position */}
    <img
      src="/images/signup/signupBg.svg"
      className="w-full h-full bg-contain bg-no-repeat absolute z-[-1] top-[-500px]"
      alt="Signup Background"
    />
    <Header />
    <BlogDetails title={title} />

    <Footer />
  </div>
    // <div className="px-8 md:px-16 lg:px-24">
    //   <BlogDetails title={title} />
    // </div>
  );
};

export default BlogPage;
