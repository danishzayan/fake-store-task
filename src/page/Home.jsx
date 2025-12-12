import React, { useState } from 'react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Added a wrapper div to handle the font-family and relative positioning for the background
    <div className="relative min-h-screen overflow-hidden font-['Poppins'] text-white">
      
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
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-sm">
        <a href="https://prebuiltui.com">
           {/* Added border-[#fbcc20] border-[2px] and rounded-full */}
           <img
            src="https://psiborg.in/wp-content/uploads/2024/03/psiborg-logo-white-circle.webp"
            alt="logo"
            className="h-14 w-14 border-4 border-[#fbcc20] rounded-full"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <a href="/" className="hover:text-slate-300 transition">
            Home
          </a>
          <a href="/products" className="hover:text-slate-300 transition">
            Products
          </a>
          <a href="/stories" className="hover:text-slate-300 transition">
            Stories
          </a>
          <a href="/pricing" className="hover:text-slate-300 transition">
            Pricing
          </a>
        </div>

        {/* Contact Button */}
        {/* Changed bg-white to bg-[#fbcc20] */}
        <button className="hidden md:block px-6 py-2.5 text-black font-medium bg-[#fbcc20] hover:bg-slate-200 active:scale-95 transition-all rounded-full">
          Login
        </button>

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
        className={`fixed inset-0 z-[100] bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/stories">Stories</a>
        <a href="/pricing">Pricing</a>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-white hover:bg-slate-200 transition text-black rounded-md flex"
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
            className="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
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
            <button className="bg-[#fbcc20] hover:bg-slate-200 font-medium text-black active:scale-95 rounded-md px-7 h-11">
              Shop Now
            </button>
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