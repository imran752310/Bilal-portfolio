"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />

      {/* Floating geometric accents */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-accent/[0.04] blur-[100px] animate-float" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-warm/[0.03] blur-[120px] animate-float" style={{ animationDelay: "3s" }} aria-hidden="true" />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-32 right-[15%] w-24 h-24 border border-accent/10 rounded-2xl rotate-12"
        animate={{ rotate: [12, 15, 12], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-40 left-[15%] w-16 h-16 border border-warm/10 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/2 right-[8%] w-3 h-3 bg-accent/40 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10 section-padding text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/[0.08] border border-accent/15 text-accent text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Muhammad
          <br />
          <span className="gradient-text">Bilal</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light mb-4 text-balance"
        >
          IT Support Engineer{" "}
          <span className="text-accent/60 mx-2">&</span>{" "}
          Web Developer
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-12"
        >
          <MapPin size={14} className="text-accent/50" />
          Manfuha, Riyadh, Saudi Arabia
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy-950 font-display font-semibold text-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Mail size={18} className="relative z-10" />
            <span className="relative z-10">Contact Me</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-gray-300 font-display font-medium text-sm rounded-xl hover:border-accent/30 hover:text-accent hover:bg-accent/[0.04] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
