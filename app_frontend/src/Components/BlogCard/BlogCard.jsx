import React from 'react'


function BlogCard({content}) {
  return (
      <div className=" border-ternary rounded-2xl px-8 py-8  bg-primary text-ternary grid grid-rows-3 w-130">
          <h1 className="font-extrabold text-3xl mb-4">{content.title}</h1>
          <div className="text-lg row-span-2 pl-4 mt-4">
              <p className="mb-4">{content.summary}</p>
              <button>Continue Reading</button>
          </div>
      </div>
  );
}

export default BlogCard