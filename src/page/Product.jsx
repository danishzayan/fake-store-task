import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "../features/products/productsSlice";
import { logout } from "../features/auth/authSlice";
import ProductCard from "../components/productCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { FiInbox } from "react-icons/fi";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux State
  const { items: products, status } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  // Local State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Click outside handler for profile dropdown
  const profileRef = useRef(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    // Wrapper div with Home.jsx styling
    <div className="relative min-h-screen font-['Poppins'] text-white bg-[#0f172a]">
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          viewBox="0 0 1440 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#1D293D"
            strokeOpacity=".7"
            d="M-15.227 702.342H1439.7"
          />
          <circle
            cx="711.819"
            cy="372.562"
            r="308.334"
            stroke="#1D293D"
            strokeOpacity=".7"
          />
          <circle
            cx="16.942"
            cy="20.834"
            r="308.334"
            stroke="#1D293D"
            strokeOpacity=".7"
          />
          <path
            stroke="#1D293D"
            strokeOpacity=".7"
            d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
          />
          <circle
            cx="782.595"
            cy="411.166"
            r="308.334"
            stroke="#1D293D"
            strokeOpacity=".7"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md bg-[#0f172a]/30 text-sm border-b border-white/5">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img
              src="https://psiborg.in/wp-content/uploads/2024/03/psiborg-logo-white-circle.webp"
              alt="logo"
              className="h-14 w-14 border-4 border-[#fbcc20] rounded-full"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-[#fbcc20] transition font-medium"
            >
              Home
            </Link>

            {/* Category Dropdown */}
            <div className="relative group">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-slate-200 border border-slate-600 rounded-md px-2 py-1.5 focus:outline-none focus:border-[#fbcc20] cursor-pointer text-xs uppercase tracking-wide"
              >
                {categories.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                    className="bg-slate-800 text-white"
                  >
                    {cat === "all" ? "ALL CATEGORY" : cat.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Side: Search & Profile */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/10 border border-slate-600 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:border-[#fbcc20] focus:ring-1 focus:ring-[#fbcc20] w-64 transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* User Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                className="h-10 w-10 rounded-full border-2 border-slate-600 hover:border-[#fbcc20] transition object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User Profile"
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-800 border border-slate-700 ring-1 ring-black ring-opacity-5 animate-in fade-in slide-in-from-top-2">
                <div className="px-4 py-2 text-xs text-slate-400 border-b border-slate-700 mb-1">
                  Signed in as <br />
                  <span className="text-white font-medium truncate block">
                    {user?.email || "User"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden active:scale-90 transition text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/90 text-white backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-medium hover:text-[#fbcc20]"
        >
          Home
        </Link>

        {/* Mobile Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white/10 border border-slate-600 rounded-lg py-3 px-4 w-3/4 text-center focus:outline-none focus:border-[#fbcc20]"
        />

        {/* Mobile Category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-white/10 text-white border border-slate-600 rounded-lg px-4 py-3 w-3/4 focus:outline-none focus:border-[#fbcc20]"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="bg-slate-900">
              {cat === "all" ? "ALL CATEGORY" : cat.toUpperCase()}
            </option>
          ))}
        </select>

        <div className="w-1/2 border-t border-white/10 my-2"></div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-400 text-sm">{user?.email}</span>
          <button
            onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }}
            className="text-red-400 font-medium flex items-center gap-2"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="px-6 md:px-16 lg:px-24 xl:px-32 py-10 relative z-10">
        <div className="flex flex-col mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Our <span className="text-[#fbcc20]">Products</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Browse our collection of premium items designed to enhance your
            lifestyle.
          </p>
        </div>

        {status === "loading" && (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        )}

        {status === "failed" && (
          <div className="text-center py-20 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p className="text-red-400">
              Error loading products. Please try again later.
            </p>
          </div>
        )}

        {status === "succeeded" && (
          <>
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center gap-4 text-center py-20 text-slate-500">
                <FiInbox className="w-24 h-24 text-slate-600" />
                <p>No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                {/* Grid Layout: 1 col mobile, 2 col sm, 3 col md, 4 col lg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Product;
