import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Global Visual Components
import CustomCursor from './components/CustomCursor';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Github from './sections/Github';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Custom loading count-up simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 600);
          return 100;
        }
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 1. Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 2. WebGL 3D Background */}
      <ThreeBackground />

      {/* 3. Awwwards Style Page Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -window.innerHeight }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#000000be] flex flex-col items-center justify-center text-white"
          >
            <div className="relative flex flex-col items-center space-y-4">
              
              {/* Logo icon animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-5xl font-display font-extrabold tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              >
                SAMAR SAINI
              </motion.div>

              {/* Progress counter */}
              <div className="flex flex-col items-center space-y-2 pt-4">
                <span className="text-gray-400 text-xs font-mono tracking-widest uppercase font-semibold">Initializing digital world</span>
                
                {/* Horizontal Progress Bar */}
                <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                <span className="text-white font-mono font-bold text-sm">{progress}%</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Main Portfolio Layout Structure */}
      {!loading && (
        <div className="flex flex-col min-h-screen relative text-gray-200">
          
          {/* Glowing Top Pill Navbar */}
          <Navbar />

          {/* Scrolling sections container */}
          <main className="flex-grow">
            {/* Hero Splash Area */}
            <Hero />

            {/* About descriptive card grid */}
            <About />

            {/* Specialized skills categorical sheets */}
            {/* <Skills /> */}

            {/* Filterable expandable Projects showcase */}
            <Projects />

            {/* Chronological learning timeline */}
            {/* <Journey /> */}

            {/* Open source contribution dashboard */}
            <Github />

            {/* Glowing feedback portal */}
            <Contact />
          </main>

          {/* Simple signature footer */}
          <Footer />

        </div>
      )}
    </>
  );
}

export default App;
