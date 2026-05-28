import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { FiGithub, FiExternalLink, FiSmartphone, FiGlobe, FiLayers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import local project images provided by user
import payzen1 from '../assets/project images/payzen1.jpg';
import payzen2 from '../assets/project images/payzen2.jpg';
import payzen3 from '../assets/project images/payzen3.jpg';
import payzen4 from '../assets/project images/payzen4.jpg';
import payzen5 from '../assets/project images/payzen5.jpg';
import payzen6 from '../assets/project images/payzen6.jpg';
import payzen7 from '../assets/project images/payzen7.jpg';

import astro1 from '../assets/project images/astro1.jpg';
import asto2 from '../assets/project images/asto2.jpg'; // note: spelled asto2.jpg
import astro3 from '../assets/project images/astro3.jpg';
import astro4 from '../assets/project images/astro4.jpg';
import astro5 from '../assets/project images/astro5.jpg';
import astro6 from '../assets/project images/astro6.jpg';
import astro7 from '../assets/project images/astro7.jpg';

import imgBroadcastly from '../assets/project images/Screenshot 2026-05-27 155542.png';
import imgQuickShare from '../assets/project images/Screenshot 2026-05-27 155607.png';
import imgTvayi from '../assets/project images/tvayi.png';
import imgTatsat from '../assets/project images/tat sat.png';

const projectsList = [
  {
    id: 1,
    title: 'Payzen App',
    category: 'Mobile',
    subtitle: 'Digital Wallet & Finance Management',
    description: 'A premium, high-security digital wallet and personal finance organizer modeled after platforms like CRED. Designed to streamline local peer payments, track daily expenses, and present intelligent budgeting insights through advanced visual interfaces.',
    tech: ['React Native', 'Node.js', 'Firebase Auth', 'Tailwind', 'Chart.js'],
    features: [
      'Peer-to-peer secure money transfers',
      'Unified QR code generation & camera scanner',
      'Complete transactional ledgers & category logs',
      'Advanced biometric & secure authentication'
    ],
    github: 'https://github.com/Samar727',
    live: 'https://github.com/Samar727',
    icon: FiSmartphone,
    images: [payzen1, payzen2, payzen3, payzen4, payzen5, payzen6, payzen7],
    glowColor: 'hover:border-indigo-500/30 hover:shadow-indigo-500/10',
    colorGrad: 'from-indigo-500/10 to-purple-500/5',
    imageBg: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)'
  },
  {
    id: 2,
    title: 'Astro App',
    category: 'Mobile',
    subtitle: 'Astrology Consultations & Remedies Platform',
    description: 'A feature-rich astrology consulting app inspired by AstroTalk. Facilitates secure real-time consults with vetted astrologers, secure client wallet deposits, and automated remedies charts alongside personalized daily planetary forecasts.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Razorpay SDK', 'Node.js'],
    features: [
      'Active Astrologer panel scheduling',
      'In-app coin wallet & secure digital payments',
      'Personalized daily planetary remedies charts',
      'Smooth, responsive, and responsive user layouts'
    ],
    github: 'https://github.com/Samar727',
    live: 'https://github.com/Samar727',
    icon: FiSmartphone,
    images: [astro1, asto2, astro3, astro4, astro5, astro6, astro7],
    glowColor: 'hover:border-cyan-500/30 hover:shadow-cyan-500/10',
    colorGrad: 'from-cyan-500/10 to-blue-500/5',
    imageBg: 'linear-gradient(135deg, #0c4a6e 0%, #0c1b40 100%)'
  },
  {
    id: 3,
    title: 'Broadcastly Web',
    category: 'Web',
    subtitle: 'AI-Powered Bulk Email Marketing',
    description: 'An advanced web platform engineered to broadcast high-throughput email campaigns using direct secure Google Gmail OAuth integrations. Employs embedded AI generators to write highly engaging email copies instantly, coupled with absolute delivery data tracking.',
    tech: ['React.js', 'Express.js', 'Google OAuth2', 'OpenAI API', 'MongoDB'],
    features: [
      'Secure single-click Gmail account link',
      'AI email editor writes customized text drafts',
      'Advanced campaign deliverability dashboards',
      'CSV-based user lists & recipient grouping'
    ],
    github: 'https://github.com/Samar727',
    live: 'https://broadcastly.vercel.app/',
    icon: FiGlobe,
    images: [imgBroadcastly],
    glowColor: 'hover:border-purple-500/30 hover:shadow-purple-500/10',
    colorGrad: 'from-purple-500/10 to-pink-500/5',
    imageBg: 'linear-gradient(135deg, #2e1065 0%, #1e1b4b 100%)'
  },
  {
    id: 4,
    title: 'Quick Share Web',
    category: 'Web',
    subtitle: 'Instant P2P Network File-Transfer',
    description: 'An ultra-fast web-based file sharing utility that utilizes WebRTC protocols to securely route files directly between local-network devices. Achieves maximum speed without cloud upload sizes or storage limits.',
    tech: ['React.js', 'WebRTC', 'WebSockets', 'Tailwind', 'Tailwind UI'],
    features: [
      'Direct peer-to-peer file pipeline (no server lag)',
      'Drag-and-drop file inputs with active queue meters',
      'Zero server upload file-size limit boundaries',
      'Multi-device simultaneous local support'
    ],
    github: 'https://github.com/Samar727',
    live: 'https://quickshareweb.vercel.app/',
    icon: FiGlobe,
    images: [imgQuickShare],
    glowColor: 'hover:border-emerald-500/30 hover:shadow-emerald-500/10',
    colorGrad: 'from-emerald-500/10 to-teal-500/5',
    imageBg: 'linear-gradient(135deg, #022c22 0%, #0c4a6e 100%)'
  },
  {
    id: 5,
    title: 'Tvayi Store',
    category: 'Shopify',
    subtitle: 'E-Commerce Custom Features Integration',
    description: 'Worked on Tvayi shopify store, implementing customized liquid themes, many layout changes, randomized product load on refresh, and built a custom Buy 3 at 1999 cart promotion system.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind', 'CSS'],
    features: [
      'Randomized product load on refresh (every time page loads, products change)',
      'Custom Buy 3 at 1999 cart promotion logic',
      'Theme alignment & speed performance optimization',
      'Advanced mobile commerce usability tweaks'
    ],
    github: null,
    live: 'https://www.tvayi.com/',
    icon: FiLayers,
    images: [imgTvayi],
    glowColor: 'hover:border-pink-500/30 hover:shadow-pink-500/10',
    colorGrad: 'from-pink-500/10 to-purple-500/5',
    imageBg: 'linear-gradient(135deg, #4c0519 0%, #2e1065 100%)'
  },
  {
    id: 6,
    title: 'Tatsat Universe',
    category: 'Shopify',
    subtitle: 'Store Redesign & Fast Checkout Form',
    description: 'Worked on Tatsat Universe shopify store, rebuilding theme configurations, adding quick form integrations immediately after adding product to cart to enable fast-checkout loops.',
    tech: ['Shopify', 'Liquid', 'Theme Setup', 'JavaScript', 'HTML/CSS'],
    features: [
      'Complete e-commerce store theme rebuild',
      'Instant checkout quick form directly inside the cart popup',
      'Conversion rate optimization layouts',
      'Fully responsive product grid configurations'
    ],
    github: null,
    live: 'https://tatsatuniverse.com/',
    icon: FiLayers,
    images: [imgTatsat],
    glowColor: 'hover:border-yellow-500/30 hover:shadow-yellow-500/10',
    colorGrad: 'from-yellow-500/10 to-orange-500/5',
    imageBg: 'linear-gradient(135deg, #422006 0%, #3f1a04 100%)'
  }
];

const ProjectCard = ({ project, expandedId, setExpandedId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ProjectIcon = project.icon;
  const isExpanded = expandedId === project.id;
  const hasMultipleImages = project.images && project.images.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation(); // prevent expanding card details
    setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation(); // prevent expanding card details
    setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`glass-card rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between relative group ${project.glowColor}`}
    >
      {/* Dynamic Image Canvas / Custom Slider */}
      <div className="h-[280px] sm:h-[340px] relative overflow-hidden flex items-center justify-center bg-black/40">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={project.images[currentSlide]}
            alt={`${project.title} screenshot ${currentSlide + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 w-full h-full ${project.category === 'Mobile' ? 'object-contain py-4' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.02]`}
          />
        </AnimatePresence>

        {/* Dark overlay backdrop to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />

        {/* Carousel controls (Arrows) */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-indigo-500 text-white border border-white/10 transition-colors z-20 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 clickable"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-indigo-500 text-white border border-white/10 transition-colors z-20 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 clickable"
              aria-label="Next image"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Slide Counter Indicator */}
        {hasMultipleImages && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold font-mono tracking-widest text-indigo-300 z-10">
            {currentSlide + 1} / {project.images.length}
          </div>
        )}

        {/* Floating Info Overlay (Bottom centered inside banner) */}
        <div className="absolute bottom-6 inset-x-0 px-6 text-center z-10 flex flex-col items-center pointer-events-none">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-xl mb-3">
            <ProjectIcon className="w-6 h-6" />
          </div>
          <span className="text-white font-display font-bold text-2xl tracking-wide text-glow-purple">{project.title}</span>
          <span className="text-indigo-200 text-xs font-semibold tracking-widest uppercase mt-0.5">{project.subtitle}</span>
        </div>

        {/* Carousel Bottom Dot Indicators */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 clickable ${currentSlide === idx ? 'bg-indigo-400 w-3' : 'bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-8 sm:p-10 flex flex-col text-left space-y-6 flex-grow">
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {project.category}
          </span>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-white/5 text-cyan-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features Expandable list */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pt-4 border-t border-white/5 space-y-2"
            >
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Key Features & Engineering Details:</h4>
              <ul className="space-y-1.5 pl-1">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-gray-400 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Panel */}
      <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between z-10">
        {/* Learn More toggler */}
        <button
          onClick={() => setExpandedId(isExpanded ? null : project.id)}
          className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest clickable"
        >
          {isExpanded ? 'Show Less' : 'Show Features'}
        </button>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all shadow-md clickable"
              title="View Repository"
            >
              <FiGithub className="w-4.5 h-4.5" />
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/10 transition-all shadow-md clickable"
            title="Live Demo"
          >
            <FiExternalLink className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = projectsList.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-[#05021a] to-[#030014] relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-purple rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Portfolio"
          title="Featured Creations"
          subtitle="Explore some of my advanced web platforms, mobile applications, and Shopify customizations, showcasing clean architecture."
        />

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          {['All', 'Web', 'Mobile', 'Shopify'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setExpandedId(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${filter === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 border-transparent text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {cat === 'All' ? 'All Projects' : cat === 'Web' ? 'Web Platforms' : cat === 'Mobile' ? 'Mobile Apps' : 'Shopify Stores'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
