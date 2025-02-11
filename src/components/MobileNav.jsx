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
        onClick={toggleNav}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>

      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="absolute top-5 right-5 w-8 h-8 cursor-pointer text-accent"
            onClick={closeNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <div className="mt-32 mb-16 text-center">
            <a href="/" className="flex items-center justify-center">
              <svg
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-12 h-12 p-2 bg-accent rounded-full"
              >
                <path d="m41.4 129.6 50-.4c1.1 0 2 .9 2 2v2.4c.1 10.5-8.4 19.1-18.9 19.1l-32.1.3c-6.6.1-12-5.3-12.1-11.9v-.2c0-6.2 4.9-11.2 11.1-11.3zm-9.7-76.7-.2.1c-6.3 2.1-9.7 8.9-7.6 15.2l10.2 30.6c3.3 10 14.1 15.3 24 12l2.3-.8c1-.3 1.6-1.5 1.3-2.5L45.8 60c-1.9-5.9-8.3-9-14.1-7.1zM115.8 27l-.1-.2c-3.9-5.3-11.4-6.5-16.8-2.5l-26 19.2c-8.4 6.2-10.2 18.1-4 26.6l1.4 1.9c.7.9 1.9 1.1 2.8.4l40.3-29.7c5-3.7 6-10.7 2.4-15.7zm50.6 72 .1-.2c3.9-5.4 2.6-12.9-2.8-16.7l-26.2-18.7c-8.5-6.1-20.4-4.1-26.5 4.4l-1.4 1.9c-.6.9-.4 2.1.5 2.8l40.7 29.1c5 3.6 12 2.4 15.6-2.6zm-52.8 70.4.2.1c6.3 2 13.1-1.5 15.1-7.8l9.7-30.7c3.2-10-2.4-20.7-12.4-23.8l-2.3-.7c-1.1-.3-2.2.3-2.5 1.3l-15.1 47.7c-1.9 5.7 1.4 12 7.3 13.9z"></path>
              </svg>
            </a>
          </div>

          <nav className="flex flex-col items-center gap-8">
            <a
              href="/todo"
              className="relative text-base font-medium hover:text-accent after:content-[''] after:block after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Dashboard
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
