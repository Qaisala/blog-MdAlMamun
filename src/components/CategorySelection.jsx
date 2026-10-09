import React from "react";

function CategorySelection({ handleCategoryChange, activeCategory }) {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="px-4 mb-8 flex flex-wrap lg:gap-16 items-center border-b-2 py-5 text-gray-900 font-semibold">
      <button
        className={`lg:ml-12 cursor-pointer ${activeCategory ? "" : "active-button"}`}
        onClick={() => handleCategoryChange(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`mr-2 space-x-16 cursor-pointer ${activeCategory === category ? "active-button" : ""}`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySelection;
