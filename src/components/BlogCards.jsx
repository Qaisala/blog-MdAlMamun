import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogCards({ blogs, currentPage, selectedCategory, pageSize }) {
  const filteredBlogs = blogs
    .filter((item) => !selectedCategory || item.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filteredBlogs.map((item) => (
        <Link key={item.id} className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img src={item.image} className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {item.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {item.author}
          </p>
          <p className="text-sm text-gray-500">
            Published: {item.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default BlogCards;
