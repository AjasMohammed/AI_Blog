import React from 'react'
import { Link } from "react-router-dom";


function BlogCard({content}) {
  return (
      <div className=" border-ternary rounded-2xl px-8 py-8  bg-primary hover:bg-primary-light text-ternary grid grid-rows-3 w-130 h-100 shadow-[8px_8px_0_theme('colors.ternary')]">
          <h1 className="font-extrabold text-2xl mb-4">{content.title}</h1>
          <div className="text-lg row-span-2 pl-4 mt-4">
              <p className="mb-4">{content.summary.substring(0, 150)}...</p>
              {/* <Link to={`/blog/${content.uid}`}>Continue Reading</Link> */}
              <Link
                  to={`/blog/${content.uid}`}
                  className="inline-flex items-center px-5 py-2.5 text-sm text-center rounded-lg font-semibold text-secondary"
              >
                  Continue Reading
                  <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                  >
                      <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                  </svg>
              </Link>
          </div>
      </div>
  );
}

export default BlogCard