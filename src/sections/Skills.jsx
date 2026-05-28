import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiJavascript,
  SiFlutter, SiNodedotjs, SiExpress, SiFirebase, SiShopify, SiWordpress,
  SiGit, SiGithub, SiFigma
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Web',
    color: 'border-indigo-500/20 shadow-indigo-500/5',
    iconColor: 'text-indigo-400',
    skills: [
      { name: 'React.js', level: 95, icon: SiReact },
      { name: 'Next.js', level: 85, icon: SiNextdotjs },
      { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss },
      { name: 'HTML/CSS', level: 95, icon: FaCss3Alt },
      { name: 'JavaScript', level: 90, icon: SiJavascript },
    ],
  },

  {
    title: 'Mobile Apps',
    color: 'border-cyan-500/20 shadow-cyan-500/5',
    iconColor: 'text-cyan-400',
    skills: [
      { name: 'Flutter', level: 90, icon: SiFlutter },
      { name: 'React Native', level: 88, icon: SiReact },
    ],
  },
  {
    title: 'Backend & APIs',
    color: 'border-purple-500/20 shadow-purple-500/5',
    iconColor: 'text-purple-400',
    skills: [
      { name: 'Node.js', level: 85, icon: SiNodedotjs },
      { name: 'Express.js', level: 88, icon: SiExpress },
      { name: 'Firebase', level: 90, icon: SiFirebase },
      { name: 'REST APIs', level: 92, icon: FiDatabase },
    ],
  },
  {
    title: 'CMS & E-Commerce',
    color: 'border-emerald-500/20 shadow-emerald-500/5',
    iconColor: 'text-emerald-400',
    skills: [
      { name: 'Shopify', level: 85, icon: SiShopify },
      { name: 'WordPress', level: 90, icon: SiWordpress },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'border-pink-500/20 shadow-pink-500/5',
    iconColor: 'text-pink-400',
    skills: [
      { name: 'Git', level: 92, icon: SiGit },
      { name: 'GitHub', level: 95, icon: SiGithub },
      { name: 'Figma', level: 80, icon: SiFigma },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-[#05021a] relative">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 glow-orb-cyan rounded-full -z-10" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 glow-orb-purple rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="My Tech Stack"
          title="Skills & Technologies"
          subtitle="My curated set of languages, frameworks, environments, and dev tools that enable me to build enterprise-grade apps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`glass-card p-8 rounded-3xl border ${category.color} flex flex-col justify-start relative overflow-hidden`}
            >
              {/* Glowing header banner inside card */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
              
              <h3 className="text-xl font-display font-bold text-white text-left mb-6 tracking-wide">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skillIdx} className="flex flex-col text-left space-y-1.5 group">
                      
                      {/* Name & Percent Row */}
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className={`transition-transform duration-300 group-hover:rotate-12 ${category.iconColor}`}>
                            <Icon className="w-4.5 h-4.5" />
                          </span>
                          <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-400 font-mono text-xs font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: skillIdx * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
