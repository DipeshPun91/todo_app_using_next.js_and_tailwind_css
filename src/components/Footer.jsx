export default function Footer() {
  return (
    <footer>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center">
          <svg
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            className="w-12 h-12 p-2 bg-accent text-white rounded-full"
          >
            <path d="m41.4 129.6 50-.4c1.1 0 2 .9 2 2v2.4c.1 10.5-8.4 19.1-18.9 19.1l-32.1.3c-6.6.1-12-5.3-12.1-11.9v-.2c0-6.2 4.9-11.2 11.1-11.3zm-9.7-76.7-.2.1c-6.3 2.1-9.7 8.9-7.6 15.2l10.2 30.6c3.3 10 14.1 15.3 24 12l2.3-.8c1-.3 1.6-1.5 1.3-2.5L45.8 60c-1.9-5.9-8.3-9-14.1-7.1zM115.8 27l-.1-.2c-3.9-5.3-11.4-6.5-16.8-2.5l-26 19.2c-8.4 6.2-10.2 18.1-4 26.6l1.4 1.9c.7.9 1.9 1.1 2.8.4l40.3-29.7c5-3.7 6-10.7 2.4-15.7zm50.6 72 .1-.2c3.9-5.4 2.6-12.9-2.8-16.7l-26.2-18.7c-8.5-6.1-20.4-4.1-26.5 4.4l-1.4 1.9c-.6.9-.4 2.1.5 2.8l40.7 29.1c5 3.6 12 2.4 15.6-2.6zm-52.8 70.4.2.1c6.3 2 13.1-1.5 15.1-7.8l9.7-30.7c3.2-10-2.4-20.7-12.4-23.8l-2.3-.7c-1.1-.3-2.2.3-2.5 1.3l-15.1 47.7c-1.9 5.7 1.4 12 7.3 13.9z"></path>
          </svg>
          <span className="ml-3 text-xl font-primary uppercase">Todo</span>
        </a>

        <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-accent sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} ToDo. All Rights Reserved.
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
          <a href="#" className="text-black hover:text-accent">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="text-black hover:text-accent">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="#" className="text-black hover:text-accent">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="#" className="text-black hover:text-accent">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
