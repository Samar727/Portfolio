import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ tag, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center mb-16 px-4">
      {/* Small Glowing Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 uppercase shadow-[0_0_15px_rgba(99,102,241,0.1)] mb-4"
      >
        {tag}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
      >
        <span className="bg-gradient-to-r from-white via-gray-200 to-indigo-300 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {/* Subtitle Divider line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[1px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-6"
      />

      {/* Description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
