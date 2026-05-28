import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { FiGithub, FiGitPullRequest, FiStar, FiGitCommit, FiFolder } from 'react-icons/fi';

const languages = [
  { name: 'JavaScript / TS', percent: 45, color: 'bg-yellow-400' },
  { name: 'Dart / Flutter', percent: 30, color: 'bg-cyan-400' },
  { name: 'HTML / CSS', percent: 15, color: 'bg-orange-500' },
  { name: 'Other (Node, C++)', percent: 10, color: 'bg-purple-500' },
];

const topRepos = [
  { name: 'payzen-app', lang: 'JavaScript', stars: 8, forks: 2, desc: 'Digital finance wallet & transaction manager built using React Native.' },
  { name: 'astro-app', lang: 'Dart', stars: 12, forks: 4, desc: 'Consulting astrology app with Razorpay wallet integration, designed in Flutter.' },
  { name: 'broadcastly-web', lang: 'JavaScript', stars: 6, forks: 1, desc: 'Bulk automated email campaign manager utilizing OpenAI and OAuth.' },
];

// Generate visual contribution calendar dates
const generateContributionData = () => {
  const weeks = 24; // smaller grid for visual clarity
  const days = 7;
  const list = [];
  
  const levels = [0, 1, 2, 3, 4];
  
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      // Randomly populate grid, biasing towards middle weights
      const level = Math.random() > 0.3 ? levels[Math.floor(Math.random() * 4)] : 0;
      week.push(level);
    }
    list.push(week);
  }
  return list;
};

const gridColors = [
  'bg-zinc-800/40 border-zinc-900', // level 0
  'bg-emerald-950/70 border-emerald-900/30', // level 1
  'bg-emerald-800/80 border-emerald-700/30', // level 2
  'bg-emerald-500/90 border-emerald-400/30', // level 3
  'bg-emerald-400 border-emerald-300/30 shadow-[0_0_8px_rgba(52,211,153,0.4)]', // level 4
];

const Github = () => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const contributionGrid = React.useMemo(() => generateContributionData(), []);

  return (
    <section id="github" className="py-24 px-4 bg-[#05021a] relative">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 glow-orb-purple rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Open Source"
          title="GitHub Dev Dashboard"
          subtitle="Explore a live visualization of my open-source contribution metrics, pinned repositories, and developer ecosystem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          
          {/* Left panel: Simulated Contribution Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-3xl border-white/5 flex flex-col justify-between"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl">
                  <FiGithub />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold font-display text-lg">Samar Saini</span>
                  <a
                    href="https://github.com/Samar727"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 text-xs font-semibold tracking-wider hover:text-indigo-300 transition-colors flex items-center gap-1 mt-0.5 clickable"
                  >
                    @Samar727 <FiStar className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              {/* Profile Link Button */}
              <a
                href="https://github.com/Samar727"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-indigo-500/20 text-xs font-semibold tracking-wide transition-all clickable"
              >
                Visit Profile
              </a>
            </div>

            {/* Simulated Contribution Grid */}
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span className="font-semibold">Interactive Activity Heatmap</span>
                <span className="font-mono text-emerald-400">1,450+ Contributions in the last year</span>
              </div>

              {/* Grid Scroll Wrapper */}
              <div className="overflow-x-auto pb-2 scrollbar-thin">
                <div className="flex gap-[4px] min-w-[550px] justify-center py-2">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[4px]">
                      {week.map((level, dIdx) => {
                        const cellId = `${wIdx}-${dIdx}`;
                        const randomCommits = level === 0 ? 0 : level * 2 + Math.floor(Math.random() * 3);
                        return (
                          <div
                            key={dIdx}
                            onMouseEnter={() => setHoveredCell({ id: cellId, commits: randomCommits, wIdx })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-[13px] h-[13px] rounded-[2px] transition-all duration-150 border cursor-pointer hover:scale-125 ${gridColors[level]}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooltip Overlay */}
              <div className="min-h-[24px] flex justify-center text-xs text-gray-400">
                {hoveredCell ? (
                  <span className="font-mono text-cyan-300">
                    {hoveredCell.commits} commits on {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][hoveredCell.id.split('-')[1]]} of week {hoveredCell.wIdx + 1}
                  </span>
                ) : (
                  <span>Hover over any calendar cell to view active commit density.</span>
                )}
              </div>
            </div>

            {/* Quick Metrics Footer */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <FiGitCommit className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold font-mono text-sm sm:text-base">1.4K+</span>
                  <span className="text-gray-400 text-[10px] uppercase font-semibold">Commits</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <FiGitPullRequest className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold font-mono text-sm sm:text-base">42</span>
                  <span className="text-gray-400 text-[10px] uppercase font-semibold">PRs Open</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                  <FiStar className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold font-mono text-sm sm:text-base">18</span>
                  <span className="text-gray-400 text-[10px] uppercase font-semibold">Stars Received</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right panel: Languages & Top Repos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Languages Card */}
            <div className="glass-card p-6 rounded-3xl border-white/5 text-left flex flex-col justify-between h-auto">
              <h3 className="text-lg font-display font-bold text-white mb-4">Technologies Frequency</h3>
              
              <div className="space-y-4">
                {/* Horizontal bar representation */}
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
                  {languages.map((l, idx) => (
                    <div
                      key={idx}
                      className={`h-full ${l.color}`}
                      style={{ width: `${l.percent}%` }}
                      title={`${l.name}: ${l.percent}%`}
                    />
                  ))}
                </div>

                {/* Legend list */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {languages.map((l, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${l.color}`} />
                      <span className="text-gray-300 font-medium">{l.name}</span>
                      <span className="text-gray-500 font-mono">({l.percent}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Repos Card */}
            <div className="glass-card p-6 rounded-3xl border-white/5 text-left flex flex-col justify-between h-auto flex-grow">
              <h3 className="text-lg font-display font-bold text-white mb-4">Top Repositories</h3>
              
              <div className="space-y-4">
                {topRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={`https://github.com/Samar727/${repo.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-white/[0.01] hover:bg-white/5 border border-white/5 hover:border-indigo-500/20 flex flex-col gap-1 transition-all duration-300 group clickable"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white font-bold text-sm font-mono group-hover:text-indigo-300 transition-colors">
                        <FiFolder className="w-4 h-4 text-indigo-400 shrink-0" />
                        {repo.name}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                        <FiStar className="w-3 h-3 text-yellow-400" />
                        {repo.stars}
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-normal mt-1">{repo.desc}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="text-[10px] text-cyan-300 font-semibold uppercase font-mono">{repo.lang}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Github;
