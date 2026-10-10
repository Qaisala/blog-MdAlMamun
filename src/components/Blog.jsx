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
      let url = `../api/blogsData.json?page=${currentPage}&limit=${pageSize}`;
      try {
        // filter by Category
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  // Page Changing button
  //   const handlePageChange = (pageNumber) => {
  //     setCurrentPage = pageNumber;
  //   };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
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
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default Blog;
