import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideBar() {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogsData.json")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="my-5 px-4 border-b-2 border-spacing-2"
            >
              <h4 className="font-medium mb-2">{item.title}</h4>
              <Link
                to="/"
                className="inline-flex text-base py-1 pb-2 text-orange-500 hover:scale-105 transition-all duration-400 ease-in-out"
              >
                Read Now <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs */}
      <div>
        <h3 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(6, 10).map((item) => (
            <div
              key={item.id}
              className="my-5 px-4 border-b-2 border-spacing-2"
            >
              <h4 className="font-medium mb-2">{item.title}</h4>
              <Link
                to="/"
                className="inline-flex text-base py-1 pb-2 text-orange-500 hover:scale-105 transition-all duration-400 ease-in-out"
              >
                Read Now <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
