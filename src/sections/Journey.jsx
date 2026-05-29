import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { FiBookOpen, FiBriefcase, FiCpu, FiTrendingUp, FiSettings } from 'react-icons/fi';

const timelineData = [
  {
    year: '2026',
    title: 'BCA 1st Year @ University Commerce College',
    description: 'Diving deeper into advanced data structures, database design, and object-oriented paradigms. Elevating my skills with rigorous academic foundations while engineering complex real-world applications in parallel.',
    icon: FiBookOpen,
    color: 'bg-indigo-500 shadow-indigo-500/50',
    borderColor: 'border-indigo-500/30',
  },
  {
    year: '2025',
    title: 'Freelance Software Engineer',
    description: 'Began building solutions for global clients. Specialized in customized Shopify e-commerce, custom API integrations, high-performance CMS solutions (WordPress), and cross-platform mobile utilities.',
    icon: FiBriefcase,
    color: 'bg-cyan-500 shadow-cyan-500/50',
    borderColor: 'border-cyan-500/30',
  },
  {
    year: '2024',
    title: 'Full Stack Development Expansion',
    description: 'Expanded technical skills to include heavy backend architectures. Built scalable React web apps, Node.js systems, Express APIs, and implemented Firebase authentication and real-time synchronizations.',
    icon: FiCpu,
    color: 'bg-purple-500 shadow-purple-500/50',
    borderColor: 'border-purple-500/30',
  },
  {
    year: '2023',
    title: 'Mobile App Engineering Focus',
    description: 'Mastered cross-platform frameworks: Flutter and React Native. Created modern finance managers (Payzen) and astrologer consulting panels (Astro App) with focus on clean states and smooth transitions.',
    icon: FiTrendingUp,
    color: 'bg-emerald-500 shadow-emerald-500/50',
    borderColor: 'border-emerald-500/30',
  },
  {
    year: '2022',
    title: 'The Coding Genesis',
    description: 'Initiated my journey into computer science. Mastered standard web technologies (HTML, CSS, JavaScript) and laid a robust problem-solving baseline, fueling a passion to build digital solutions.',
    icon: FiSettings,
    color: 'bg-pink-500 shadow-pink-500/50',
    borderColor: 'border-pink-500/30',
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-4 bg-[#000000be] relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] glow-orb-purple rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] glow-orb-cyan rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="My Timeline"
          title="The Developer's Journey"
          subtitle="A chronicled look into my growth, coding milestones, freelance engineering achievements, and educational route."
        />

        {/* Timeline Path */}
        <div className="relative mt-12 pl-6 md:pl-0">
          
          {/* Vertical Glowing Line Track */}
          <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-20" />

          {/* Timeline Nodes */}
          <div className="space-y-24">
            {timelineData.map((item, idx) => {
              const ItemIcon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Left block (Desktop empty / text depending on even/odd) */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-12 md:text-right hidden md:block ${isEven ? '' : 'order-last pl-12 pr-0 text-left'}`}>
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="space-y-1"
                      >
                        <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">{item.year}</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-6 rounded-3xl text-left border border-white/5"
                      >
                        <span className="inline-block text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-3">{item.year}</span>
                        <h4 className="text-lg font-display font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Icon Node Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className={`absolute left-[29px] md:left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center border border-white/10 ${item.color}`}
                  >
                    <ItemIcon className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Right block (Desktop text / empty depending on even/odd) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 text-left ${isEven ? 'order-last pl-12 pr-0 text-left' : 'hidden md:block'}`}>
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-6 rounded-3xl border border-white/5"
                      >
                        <span className="inline-block text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-3">{item.year}</span>
                        <h4 className="text-lg font-display font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="space-y-1"
                      >
                        <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">{item.year}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile-only text container (matches glass cards layout in smaller widths) */}
                  <div className="md:hidden w-full pl-6 mt-1">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass-card p-5 rounded-2xl border border-white/5"
                    >
                      <span className="inline-block text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full mb-2">{item.year}</span>
                      <h4 className="text-base font-display font-bold text-white mb-1.5">{item.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
