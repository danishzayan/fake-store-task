import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileMenuOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // Added a wrapper div to handle the font-family and relative positioning for the background
    <div className="relative min-h-screen overflow-hidden font-['Poppins'] text-white bg-[#0f172a]">
      
      {/* Background SVG */}
      <svg
        className="size-full absolute -z-10 inset-0 pointer-events-none"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle cx="711.819" cy="372.562" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <circle cx="16.942" cy="20.834" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <path
          stroke="#1D293D"
          strokeOpacity=".7"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle cx="782.595" cy="411.166" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
      </svg>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md bg-[#0f172a]/30 text-sm border-b border-white/5">
        <Link to="/">
           {/* Added border-[#fbcc20] border-[2px] and rounded-full */}
           <img
            src="https://psiborg.in/wp-content/uploads/2024/03/psiborg-logo-white-circle.webp"
            alt="logo"
            className="h-14 w-14 border-4 border-[#fbcc20] rounded-full"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <Link to="/" className="hover:text-slate-300 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-slate-300 transition">
            Products
          </Link>
        </div>

        {/* Contact Button / User Profile */}
        {isLoggedIn ? (
          <div className="hidden md:flex items-center gap-6">
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-2 focus:outline-none cursor-pointer"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-slate-600 hover:border-[#fbcc20] transition object-cover bg-slate-700"
                  src={`https://api.dicebear.com/9.x/initials/svg?seed=${
                    user?.email || "User"
                  }`}
                  alt="User Profile"
                />
              </button>
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
                    className="flex w-full items-center gap-2 text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 transition cursor-pointer"
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
        ) : (
          <Link to="/login" className="hidden md:block px-6 py-2.5 text-black font-medium bg-[#fbcc20] hover:bg-[#fbcc20]/80 active:scale-95 transition-all rounded-full cursor-pointer">
            Login
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
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
            className="lucide lucide-menu-icon lucide-menu"
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
        <Link
          to="/products"
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-medium hover:text-[#fbcc20]"
        >
          Products
        </Link>

        <div className="w-1/2 border-t border-white/10 my-2"></div>

        {isLoggedIn ? (
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
        ) : (
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-2.5 text-black font-medium bg-[#fbcc20] hover:bg-[#fbcc20]/80 active:scale-95 transition-all rounded-full cursor-pointer"
          >
            Login
          </Link>
        )}
      </div>

      {/* Hero Section */}
      <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs">
            <div className="flex items-center">
              <img
                className="size-7 rounded-full border-3 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="userImage1"
              />
              <img
                className="size-7 rounded-full border-3 border-white -translate-x-2"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="userImage2"
              />
              <img
                className="size-7 rounded-full border-3 border-white -translate-x-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="userImage3"
              />
            </div>
            <p className="-translate-x-2">Join community of 1m+ Customer </p>
          </div>
          <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-50">
            Products to enhance lifestyle.
          </h1>
          <p className="text-center md:text-left text-sm text-slate-200 max-w-lg mt-2">
            Find everything you need in one place — premium items that simplify life and deliver more value.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm">
            {/* Changed bg-white to bg-[#fbcc20] */}
            <Link to="/products">
            <button className="bg-[#fbcc20] hover:bg-[#fbcc30]/80 font-medium text-black active:scale-95 rounded-md px-7 h-11 cursor-pointer">
              Shop Now
            </button>
            </Link>
            <button className="flex items-center gap-2 border border-[#fbcc20] active:scale-95 hover:bg-white/10 transition text-[#fbcc20] rounded-md px-6 h-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video-icon lucide-video"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              <span>Watch Product Review</span>
            </button>
          </div>
        </div>
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
          alt="hero"
          className="max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300"
        />
      </section>
    </div>
  );
};

export default Home;