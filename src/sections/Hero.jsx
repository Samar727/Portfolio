import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiCode, FiSmartphone, FiTerminal } from 'react-icons/fi';

const strings = [
  'Full Stack Developer',
  'Flutter Developer',
  'React Native Developer',
  'Shopify & WordPress Expert',
];

const Hero = () => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = strings[currentTextIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === fullText) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTextIdx((prev) => (prev + 1) % strings.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIdx, typingSpeed]);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden bg-grid-pattern"
    >
      {/* Absolute floating glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] glow-orb-purple rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-orb-cyan rounded-full -z-10" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left: Introduction Content */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6">
          
          {/* Floating BCA Student badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start flex items-center gap-2 px-4 py-2 rounded-full glass-card border-indigo-500/20 text-xs font-semibold text-indigo-300"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            BCA 1st Year @ University Commerce College
          </motion.div>

          {/* Heading Name */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-tight text-white m-0"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-glow-purple">
                Samar Saini
              </span>
            </motion.h1>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-3xl font-display font-bold text-gray-300 flex items-center min-h-[56px]"
            >
              <span className="typing-cursor font-bold bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                {displayText}
              </span>
            </motion.div>
          </div>

          {/* Paragraph description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed pt-2"
          >
            A passionate full-stack developer, mobile app developer, and digital strategist. Even as a first-year student, I build high-performance applications that bridge beautiful UI with advanced backend systems.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explore My Work
              <FiArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right: Interactive 3D Holographic Layout Grid */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[350px] lg:h-[450px]">
          {/* Hologram Circle Animations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-indigo-500/30 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-cyan-500/20 flex items-center justify-center"
            >
              <div className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 blur-xl" />
            </motion.div>
          </motion.div>

          {/* Glowing central cube element with floating skills */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(99,102,241,0.2)] flex items-center justify-center group hover:border-indigo-500/40 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-3xl blur transition-opacity duration-500" />
            <FiCode className="w-16 h-16 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
          </motion.div>

          {/* Floating Satellites Icons */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/6 left-1/4 p-4 rounded-2xl glass-card border-indigo-500/20 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/10"
          >
            <FiSmartphone className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-1/6 right-1/4 p-4 rounded-2xl glass-card border-indigo-500/20 text-purple-400 flex items-center justify-center shadow-lg shadow-indigo-500/10"
          >
            <FiTerminal className="w-6 h-6" />
          </motion.div>
        </div>

      </div>

      {/* Floating Bounce Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={(e) => handleScrollTo(e, '#about')}
      >
        <span className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-gray-400 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
