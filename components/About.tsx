"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Zap, Search, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    label: "Quick Learner",
    description: "Rapidly adapt to new technologies and environments",
  },
  {
    icon: Search,
    label: "Problem Solver",
    description: "Analytical approach to troubleshooting complex issues",
  },
  {
    icon: Lightbulb,
    label: "Detail-Oriented",
    description: "Meticulous attention to system configurations and code",
  },
  {
    icon: BookOpen,
    label: "Continuous Growth",
    description: "Always expanding skill set through learning and practice",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-gap relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            About
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Driven by curiosity,{" "}
          <span className="gradient-text">built for impact</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Motivated IT Professional with knowledge of web development, IT
              support, and system maintenance. Skilled in troubleshooting,
              website management, and digital tools.
            </p>
            <p className="text-gray-400 leading-relaxed">
              A quick learner with strong problem-solving abilities, seeking to
              contribute to a professional IT environment. Experienced in
              managing systems, developing web solutions, and providing
              technical support across diverse organizational needs.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card-hover p-6 group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/[0.08] border border-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/[0.12] group-hover:border-accent/20 transition-all duration-300">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
