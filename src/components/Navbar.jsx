import React, { useState } from "react";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        <a href="/" className="text-xl font-bold text-white tracking-wide">
          Design<span className="text-orange-400">DK</span>
        </a>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold underline underline-offset-4"
                    : "text-gray-300 hover:text-orange-400 transition-colors duration-200"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
        </div>
        <button className="hidden md:block font-medium bg-orange-500 rounded px-6 py-2 hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in cursor-pointer">
          Login
        </button>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Modern Animated Mobile Drawer */}
      <div
        className={`fixed top-16.25 left-0 right-0 bg-neutral-900 backdrop-blur-xl z-50 border-b border-white/10 md:hidden transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          <ul className="space-y-4 text-center">
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block text-lg font-medium transition-colors ${
                      isActive
                        ? "text-orange-500 font-semibold"
                        : "text-gray-200 hover:text-orange-400"
                    }`
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <hr className="border-white/10" />

          {/* Integrated Socials & Action Button */}
          <div className="flex flex-col gap-4">
            <button
              onClick={closeMenu}
              className="w-full font-semibold bg-orange-500 text-white rounded-lg py-3 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 cursor-pointer"
            >
              Login
            </button>
            <div className="flex items-center justify-center gap-6 text-gray-400 text-xl pt-2">
              <a href="/" className="hover:text-orange-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="/" className="hover:text-orange-500 transition-colors">
                <FaDribbble />
              </a>
              <a href="/" className="hover:text-orange-500 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
