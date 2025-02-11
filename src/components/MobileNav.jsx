"use client";

import { useState } from "react";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer text-accent"
        onClick={toggleNav}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>

      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 text-white flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="absolute top-5 right-5 w-8 h-8 cursor-pointer text-accent"
            onClick={closeNav}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <div className="mt-32 mb-16 text-center">
            <a href="/" className="flex items-center justify-center">
              <svg
                fill="#000000"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 p-2 bg-accent rounded-full">
                <path d="M112.31,268l40.36-68.69,34.65,59-67.54,115h135L289.31,432H16Zm58.57-99.76,33.27-56.67L392.44,432H325.76ZM222.67,80h66.59L496,432H429.32Z"></path>
              </svg>
            </a>
          </div>

          <nav className="flex flex-col items-center gap-8">
            <a
              href="/about"
              className="relative text-base font-medium hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
              About Us
            </a>
            <a
              href="/blog"
              className="relative text-base font-medium hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
              Blog
            </a>
            <a
              href="/pages"
              className="relative text-base font-medium hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
              Pages
            </a>
            <a
              href="/contact"
              className="relative text-base font-medium hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
              Contact Us
            </a>
          </nav>

          <button className="mt-16 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-accent text-primary font-semibold h-11 px-6 hover:bg-accent-HOVER focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-200">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}
