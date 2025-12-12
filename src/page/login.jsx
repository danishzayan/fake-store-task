import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] font-['Poppins'] p-4">
      {/* Card Container */}
      {/* Changes: bg-white -> bg-white/5 (transparent), shadow-xl -> shadow-sm, border color adjusted, added backdrop-blur */}
      <div className="bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-sm w-full max-w-md border border-white/10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          {/* Text color changed to white/gray for visibility on dark background */}
          <h2 className="text-3xl text-white font-semibold">Sign In</h2>
          <p className="text-sm text-gray-400 mt-2 text-center">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="w-full flex flex-col gap-5">
          {/* Email Input */}
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                width="18"
                height="14"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                  fill="#9CA3AF"
                  className="group-focus-within:fill-[#fbcc30] transition-colors"
                />
              </svg>
            </div>
            {/* Input bg changed to semi-transparent dark, text to white */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl outline-none focus:border-[#fbcc30] focus:ring-1 focus:ring-[#fbcc30] transition-all text-sm text-white placeholder-gray-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                width="15"
                height="19"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                  fill="#9CA3AF"
                  className="group-focus-within:fill-[#fbcc30] transition-colors"
                />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl outline-none focus:border-[#fbcc30] focus:ring-1 focus:ring-[#fbcc30] transition-all text-sm text-white placeholder-gray-500"
              required
            />
          </div>

          {/* Options: Remember me & Forgot Password */}
          <div className="flex items-center justify-between mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#fbcc30] focus:ring-[#fbcc30] accent-[#fbcc30]"
              />
              <span className="text-sm text-gray-400 select-none">Remember me</span>
            </label>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#fbcc30] transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full py-3.5 rounded-xl bg-[#fbcc30] text-black font-medium text-sm hover:bg-[#eebb20] active:scale-[0.98] transition-all shadow-sm"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Don’t have an account?{' '}
          <a href="#" className="font-semibold text-white hover:text-[#fbcc30] transition-colors underline decoration-[#fbcc30] decoration-2 underline-offset-4">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;