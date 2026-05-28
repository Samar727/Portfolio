import React from 'react';
import { FiArrowUp, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[#030014] relative z-10 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand/Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-xl font-display font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Samar Saini<span className="text-indigo-400">.</span>
          </span>
          <span className="text-gray-500 text-xs font-medium">BCA Student & Full-Stack / Mobile Developer</span>
        </div>

        {/* Copywrite with Love */}
        <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm order-last md:order-none">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved. Crafted with</span>
          <FiHeart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span>by Samar Saini</span>
        </div>

        {/* Back To Top Action */}
        <button
          onClick={scrollToTop}
          className="group p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all scale-100 active:scale-95 shadow-md flex items-center justify-center clickable"
          title="Back to Top"
        >
          <FiArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
