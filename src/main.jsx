import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <div className="text-center py-20">Loading application...</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        // path: "/blogs/:id",
        // element: <SingleBlog />,
        // loader: ({ params }) => fetch(`../api/blogsData.json/${params.id}`),

        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: async ({ params }) => {
          // 1. Fetch the entire array of blogs
          const res = await fetch("/api/blogsData.json");
          const blogs = await res.json();

          // 2. Find the specific blog matching the URL id
          const blog = blogs.find((item) => item.id.toString() === params.id);
          return blog;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
