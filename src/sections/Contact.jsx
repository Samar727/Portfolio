import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import confetti from 'canvas-confetti';
import { FiMail, FiMapPin, FiBriefcase, FiSend, FiGithub, FiLinkedin, FiTwitter, FiMessageSquare } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Direct Email',
    value: 'samarsaini727@gmail.com', // Placeholder example, user can modify
    link: 'mailto:samarsaini727@gmail.com',
    color: 'text-indigo-400 bg-indigo-500/10'
  },
  {
    icon: FiMapPin,
    label: 'Current Location',
    value: 'Jaipur, Rajasthan, India',
    link: '#',
    color: 'text-cyan-400 bg-cyan-500/10'
  },
  {
    icon: FiBriefcase,
    label: 'Freelance & Roles',
    value: 'Available Immediately',
    link: '#contact',
    color: 'text-emerald-400 bg-emerald-500/10'
  }
];

const socialLinks = [
  { icon: FiGithub, url: 'https://github.com/Samar727', label: 'GitHub', color: 'hover:text-white hover:bg-white/10 hover:border-white/20' },
  { icon: FiLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20' },
  { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/20' },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6366f1', '#a855f7', '#06b6d4']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#6366f1', '#a855f7', '#06b6d4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      triggerConfetti();
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Auto close success card after 6 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-[#000000be] to-[#000000] relative">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 glow-orb-cyan rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 glow-orb-purple rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Connect"
          title="Start A Conversation"
          subtitle="Have a vision, client requirement, or open job role? Reach out using the secure portal below or connect via socials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
          
          {/* Left Panel: Contact Detail Blocks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col text-left space-y-6 justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-white">Let's craft something amazing</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                I am highly adaptive, eager to collaborate on full-stack web and complex mobile platforms, and ready to deploy high-value features for your business.
              </p>

              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                  const InfoIcon = info.icon;
                  return (
                    <a
                      key={idx}
                      href={info.link}
                      className="glass-card flex items-center gap-4 p-4 rounded-2xl border-white/5 hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all clickable"
                    >
                      <div className={`p-3 rounded-xl ${info.color}`}>
                        <InfoIcon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{info.label}</span>
                        <span className="text-white font-medium text-sm sm:text-base mt-0.5">{info.value}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Socials Connection bar */}
            <div className="space-y-3 pt-6 lg:pt-0">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Connect on Social Networks</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-11 h-11 rounded-full flex items-center justify-center border border-white/10 text-gray-300 transition-all scale-100 active:scale-95 shadow-md clickable ${social.color}`}
                      title={social.label}
                    >
                      <SocialIcon className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Panel: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border-white/5 relative overflow-hidden"
          >
            {/* Inner top glow bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Samar Saini"
                        className="px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.07] transition-all text-sm clickable"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="youremail@domain.com"
                        className="px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.07] transition-all text-sm clickable"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Let's build a mobile app!"
                      className="px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.07] transition-all text-sm clickable"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Describe your project goals or specific inquiry in detail..."
                      className="px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.07] transition-all text-sm resize-none clickable"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 disabled:opacity-55 transition-all duration-300 clickable"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin shrink-0" />
                        Transmitting Message...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4.5 h-4.5 shrink-0" />
                        Send Secured Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-3xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <FiMessageSquare />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">Transmission Successful!</h4>
                  <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                    Thank you for reaching out! Your inquiry has been routed successfully. Samar Saini will review it and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors clickable"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
