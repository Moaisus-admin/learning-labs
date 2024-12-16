import React from "react";

interface BlogDetailsProps {
  title: string;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ title }) => {
  return (
    <div className="px-8 md:px-16 lg:px-24 xl:px-36 py-12 md:py-8 lg:py-10 xl:py-12">
         <nav className="text-gray-500 text-sm mb-6">
        <span className="hover:underline cursor-pointer">Home</span> /{" "}
        <span className="hover:underline cursor-pointer">Blog</span> /{" "}
        <span className="text-[#161616] font-medium">{title}</span>
      </nav>
      {/* Title */}
      <h1 className="text-[36px] md:text-[48px] font-bold text-[#161616] mt-8 mb-4">{title}</h1>

      <div className="w-full h-auto mb-6">
        <img
          src="/images/research/1.jpg"
          alt="Blog Banner"
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Blog Meta */}
      <p className="text-[#878690] text-sm mb-4">
        <span className="font-medium text-black">Sport, Lifestyle</span> | Date: 8/27/19
      </p>

      <h1 className="text-[36px] max-w-[800px] md:text-[48px] font-bold text-[#161616] mt-8 mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>



      {/* Author Section */}
      <div className="flex items-center gap-4 mb-8 justify-between">

      <div className="flex items-center gap-4 mb-8">
        <div>
          <p className="font-medium text-[#161616]">Robert Fox</p>
          <p className="text-gray-500 text-sm">IIM Ahmedabad</p>
        </div>
        <div>
          <p className="font-medium text-[#161616]">Aishwary Kundal</p>
          <p className="text-gray-500 text-sm">Sant Singaji Institute of ...</p>
        </div>
      </div>

      {/* Click Button */}
      <button className="bg-[#FF5733] text-white px-6 py-2 rounded-full hover:bg-[#e64e2e] mb-8">
        Click to Listen this Blog
      </button>
      </div>


      {/* Blog Content */}
      <p className="text-[#161616] leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
        bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
        pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
        bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
        pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
        bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
        pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
        bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
        pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
        bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
        pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
        bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
        pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Images Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {["Image Name", "Image Name", "Image Name", "Image Name","Image Name"].map((name, index) => (
          <div key={index} className="text-center">
            <img
          src="/images/research/1.jpg"
          alt={name+1}
              className="rounded-md w-full h-[120px] object-cover mb-2"
            />
            <p className="text-gray-600 text-sm">{name}</p>
          </div>
        ))}
      </div>

      {/* Second Blog Section */}
      <h2 className="text-[28px] md:text-[32px] font-bold mb-4">Lorem ipsum dolor sit amet dolor sit amet m ipsum</h2>
      <p className="text-[#161616] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
        bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
        pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default BlogDetails;
