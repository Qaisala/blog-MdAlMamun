import React from "react";
import Blog from "../components/Blog";

function Blogs() {
  return (
    <div>
      <div className="px-4 py-40 bg-black text-center text-white">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blog Page
        </h2>
      </div>

      {/* All Blogs container */}
      <div className="max-w-7xl mx-auto">
        <Blog/>
      </div>
    </div>
  );
}

export default Blogs;
