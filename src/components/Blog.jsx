import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      // ✅ 1. Use absolute path starting with "/" for Vercel/Vite compatibility
      let url = "../api/blogsData.json"; 
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data); // Stores the full array of blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []); // ✅ Fetch once on mount, client-side handles pagination & category state

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 on category change
    setActiveCategory(category);
  };

  // Filter blogs based on category for the pagination count
  const filteredBlogs = blogs.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  );

  return (
    <div>
      {/* Category Section */}
      <div>
        <CategorySelection
          handleCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* BlogCards component */}
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />

        {/* SideBar component */}
        <div>
          <SideBar />
        </div>
      </div>

      {/* Pagination Section */}
      <div className="py-5">
        <Pagination
          handlePageChange={handlePageChange}
          blogs={filteredBlogs} // ✅ Pass filtered blogs so totalPages calculates correctly
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default Blog;