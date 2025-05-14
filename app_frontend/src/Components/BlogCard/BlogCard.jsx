import React from 'react'
import { Link } from "react-router-dom";


function BlogCard({content}) {
  return (
      <div className=" border-ternary rounded-2xl px-8 py-8  bg-primary text-ternary grid grid-rows-3 w-130 h-100 shadow-[8px_8px_0_theme('colors.ternary')]">
          <h1 className="font-extrabold text-3xl mb-4">{content.title}</h1>
          <div className="text-lg row-span-2 pl-4 mt-4">
              <p className="mb-4">{content.summary.substring(0, 150)}...</p>
              <Link to={`/blog/${content.uid}`}>Continue Reading</Link>
          </div>
      </div>
  );
}

export default BlogCard