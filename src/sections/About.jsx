import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { FiAward, FiBookOpen, FiActivity, FiUsers } from 'react-icons/fi';

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+', icon: FiAward, color: 'text-indigo-400' },
  { label: 'Technologies Known', value: 12, suffix: '+', icon: FiBookOpen, color: 'text-cyan-400' },
  { label: 'Happy Clients', value: 10, suffix: '+', icon: FiUsers, color: 'text-emerald-400' },
  { label: 'GitHub Contributions', value: 1000, suffix: '+', icon: FiActivity, color: 'text-purple-400' },
];

const StatCard = ({ stat }) => {
  const [count, setCount] = useState(0);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000; // ms
    const increment = Math.ceil(end / (duration / 16)); // ~60fps
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const Icon = stat.icon;

  return (
    <div
      ref={containerRef}
      className="glass-card flex flex-col p-6 rounded-2xl border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform" />
      
      <div className={`p-3 rounded-xl bg-white/5 self-start mb-4 ${stat.color}`}>
        <Icon className="w-6 h-6" />
      </div>

      <span className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-1">
        {count.toLocaleString()}{stat.suffix}
      </span>
      
      <span className="text-gray-400 text-sm font-medium">
        {stat.label}
      </span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-[#000000be] to-[#000000] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="About Me"
          title="Turning Ideas Into Digital Realities"
          subtitle="Discover my background, my developer philosophy, and the drive behind my technical journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
          
          {/* Left: Professional Intro Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col text-left space-y-6 justify-center"
          >
            <h3 className="text-2xl font-display font-semibold text-white">
              Who is Samar Saini?
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-base">
              I am a dedicated <strong className="text-indigo-400 font-bold">BCA First Year student</strong> at the prestigious <strong className="text-indigo-400 font-bold">University Commerce College</strong>, with deep, practical skills in high-fidelity application building and full-stack software development. 
            </p>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              My engineering journey is driven by a passion for solving real-world challenges through elegant, clean code. Rather than just focusing on theory, I have invested hundreds of hours designing, engineering, and launching robust projects across both mobile (Flutter, React Native) and web ecosystems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">Full-Stack Capability</span>
                  <span className="text-gray-400 text-xs">Architecting frontends and backends</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">Mobile Expertise</span>
                  <span className="text-gray-400 text-xs">High-performance cross-platform apps</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">UI/UX Mindset</span>
                  <span className="text-gray-400 text-xs">Creating sleek, responsive interfaces</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">Problem-Solver</span>
                  <span className="text-gray-400 text-xs">Agile mindset for optimal outcomes</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Stats Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
