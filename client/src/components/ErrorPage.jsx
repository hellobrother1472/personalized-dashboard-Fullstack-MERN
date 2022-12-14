import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-300 text-purple-700">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, we couldn't find this page.
          </p>
          
          <button
            rel="noopener noreferrer"            
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            <Link to="/">Back to homepage</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
