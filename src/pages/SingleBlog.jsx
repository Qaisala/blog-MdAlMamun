import React from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";

function SingleBlog() {
  const data = useLoaderData(); // useLoaderData() grabs the fetched data from "loader" in "main.jsx"
  console.log(data);

  // Destructure the properties from the first item returned
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data;
  return (
    <div>
      <div className="py-40 px-4 bg-black text-center text-white">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          SingleBlog
        </h2>
      </div>

      {/* Blog Details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        {/* - Blog Details - Left Side */}
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt={title} className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="text-gray-600 mb-3">
            <FaUser className="inline-flex items-center mr-1" /> {author} |{" "}
            {published_date}
          </p>
          <p className="text-gray-600 mb-3">
            <FaClock className="inline-flex items-center mr-1" /> {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              totam recusandae repellat quasi tempora quis facilis ipsa nostrum
              sit quisquam consequuntur odio unde eaque, vero doloribus iste
              incidunt aliquid officiis.
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
              praesentium magnam dignissimos ipsum at aperiam repellat alias
              doloribus quidem accusamus? Dignissimos explicabo reprehenderit
              libero voluptatum, nesciunt cumque laudantium ipsum quidem!
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              amet similique quaerat reprehenderit perferendis voluptates
              voluptatibus, beatae iusto in quia quasi accusamus quae libero
              tempore quis? Odit nam perspiciatis officiis? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Dolorem amet similique
              quaerat reprehenderit perferendis voluptates voluptatibus, beatae
              iusto in quia quasi accusamus quae libero tempore quis? Odit nam
              perspiciatis officiis?
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              amet similique quaerat reprehenderit perferendis voluptates
              voluptatibus, beatae iusto in quia quasi accusamus quae libero
              tempore quis? Odit nam perspiciatis officiis?
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              amet similique quaerat reprehenderit perferendis voluptates
              voluptatibus, beatae iusto in quia quasi accusamus quae libero
              tempore quis? Odit nam perspiciatis officiis? beatae iusto in quia
              quasi accusamus quae libero tempore quis? Odit nam perspiciatis
              officiis?
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              amet similique quaerat reprehenderit perferendis voluptates
              voluptatibus, beatae iusto in quia quasi accusamus quae libero
              tempore quis? Odit nam perspiciatis officiis? beatae iusto in quia
              quasi accusamus quae libero tempore quis? Odit nam perspiciatis
              officiis?
            </p>
          </div>
        </div>

        {/* - SideBar - Right Side */}
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;

// import React from "react";
// import { useLoaderData } from "react-router-dom";

// function SingleBlog() {
//   const blog = useLoaderData();
//   console.log(blog); // This will now successfully log the object!

//   // Destructure directly from the blog object
//   const {
//     title,
//     image,
//     category,
//     author,
//     published_date,
//     reading_time,
//     content,
//   } = blog;

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-28">
//       <h2 className="text-4xl font-bold mb-4">{title}</h2>
//       <p className="text-gray-600 mb-4">By {author}</p>
//       <img src={image} alt={title} className="w-full rounded-xl mb-6" />
//       <p className="text-gray-800">{content}</p>
//     </div>
//   );
// }

// export default SingleBlog;
