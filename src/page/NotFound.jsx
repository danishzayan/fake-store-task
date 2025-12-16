import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0f172a] text-slate-300 p-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#fbcc20] tracking-wider">404</h1>
        <p className="text-2xl md:text-3xl font-light text-slate-200 mt-4">
          Page Not Found
        </p>
        <p className="mt-4 text-slate-400 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-slate-200 bg-slate-800 border border-slate-700 hover:bg-[#fbcc20] hover:text-black transition-all group px-6 py-3 rounded-lg font-medium"
        >
          <FaArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Go Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

