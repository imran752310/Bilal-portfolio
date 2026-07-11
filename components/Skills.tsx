"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Search,
  Settings,
  FileText,
  BarChart3,
  Presentation,
  Cpu,
  Lightbulb,
  Target,
  Layers,
  BookOpen,
} from "lucide-react";

const technicalSkills = [
  { name: "WordPress", level: 90, icon: Globe },
  { name: "PHP", level: 85, icon: Code2 },
  { name: "HTML / CSS", level: 90, icon: Layout },
  { name: "Bootstrap", level: 85, icon: Layout },
  { name: "MySQL / SQL", level: 80, icon: Database },
  { name: "Python", level: 65, icon: Code2 },
  { name: "SEO", level: 80, icon: Search },
  { name: "JavaScript", level: 70, icon: Code2 },
];

const tools = [
  { name: "MS Office", icon: Presentation },
  { name: "Project Management", icon: BarChart3 },
  { name: "System Administration", icon: Cpu },
  { name: "IT Documentation", icon: FileText },
  { name: "Help Desk / Ticketing", icon: Settings },
];

const softSkills = [
  { name: "Analytical Thinking", icon: Lightbulb },
  { name: "Problem Solving", icon: Target },
  { name: "Detail-Oriented", icon: Layers },
  { name: "Fast Learner", icon: BookOpen },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding section-gap relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm/[0.01] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Technical{" "}
          <span className="gradient-text">proficiency</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical skills with bars */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-2"
            >
              <Code2 size={18} className="text-accent" />
              Development
            </motion.h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <skill.icon size={14} className="text-accent/60" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-accent/60">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent group-hover:from-accent group-hover:to-accent-light transition-colors duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column: Tools & Soft Skills */}
          <div className="space-y-8">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-2"
              >
                <Settings size={18} className="text-accent" />
                Tools & Platforms
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                    className="glass-card-hover px-4 py-3 flex items-center gap-2 group cursor-default"
                  >
                    <tool.icon
                      size={16}
                      className="text-accent/60 group-hover:text-accent transition-colors"
                    />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-2"
              >
                <Lightbulb size={18} className="text-warm" />
                Soft Skills
              </motion.h3>
              <div className="space-y-3">
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-navy-800/30 border border-white/[0.04] hover:border-warm/10 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-warm/[0.08] border border-warm/10 flex items-center justify-center group-hover:bg-warm/[0.12] transition-colors">
                      <skill.icon size={14} className="text-warm" />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
