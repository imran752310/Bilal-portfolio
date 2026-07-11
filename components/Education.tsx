"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "BS Computer Science",
    school: "University of Swat",
    period: "2019 — 2023",
    location: "Swat, Pakistan",
    description:
      "Comprehensive study of computer science fundamentals including programming, data structures, algorithms, databases, and software engineering.",
  },
  {
    degree: "FSC (Pre-Engineering)",
    school: "Govt Post Graduate Jahanzeb College",
    period: "2017 — 2018",
    location: "Saidu Sharif, Swat, Pakistan",
    description:
      "Foundation in mathematics, physics, and chemistry with focus on analytical and problem-solving skills.",
  },
  {
    degree: "SSC (Matriculation)",
    school: "Odigram Model School",
    period: "2016 — 2017",
    location: "Swat, Pakistan",
    description:
      "Secondary education with strong academic performance in science and mathematics.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding section-gap relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Academic{" "}
          <span className="gradient-text">background</span>
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="glass-card-hover p-6 md:p-8 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/[0.12] transition-colors">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      {edu.school}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 sm:ml-4">
                  <span className="font-mono text-sm text-gray-400">
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={10} />
                    {edu.location}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mt-2 ml-[52px]">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
