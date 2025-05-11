import React from 'react'

function NavBar() {
  return (
      <nav className="bg-primary grid grid-cols-4 items-center place-content-center p-5 text-xl">
          <div id="logo"><h2>NeuroFeed</h2></div>
          <div
              id="menu"
              className="col-span-2 flex gap-8 justify-center items-center font-extrabold text-secondary text-2xl"
          >
              <a>Home</a>
              <a>Blog</a>
              <a>More</a>
          </div>
          <div id="search-bar" className="flex gap-3 justify-center">
              <input
                  type="text"
                  placeholder="Search"
                  className="bg-white py-3 px-5 rounded-2xl outline-0"
              />
              <button className="bg-white border border-secondary text-secondary font-bold px-5 py-2 rounded-2xl hover:bg-secondary hover:text-white">
                  Search
              </button>
          </div>
      </nav>
  );
}

export default NavBar