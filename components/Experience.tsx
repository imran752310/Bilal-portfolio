"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "NourNet",
    role: "IT Support Engineer",
    period: "Feb 2025 — Jan 2026",
    location: "Riyadh, Saudi Arabia",
    tasks: [
      "Installed, configured, and maintained computer systems and applications",
      "Troubleshot system errors, connectivity issues, and user problems",
      "Assisted in managing servers (Windows/Linux) including updates and security patches",
      "Maintained IT documentation, reports, and system logs",
      "Responded to help desk requests and resolved user tickets efficiently",
    ],
  },
  {
    company: "Alfanar",
    role: "IT Support Engineer",
    period: "Dec 2023 — Dec 2024",
    location: "Riyadh, Saudi Arabia",
    tasks: [
      "Installed, configured, and maintained operating systems and software applications",
      "Assisted in managing user accounts, email systems, and access permissions",
      "Maintained IT inventory, documentation, and asset records",
      "Responded to help desk tickets and resolved user issues in a timely manner",
      "Coordinated with senior IT staff for system upgrades and maintenance",
    ],
  },
  {
    company: "MaxTech Developer",
    role: "PHP & WordPress Developer",
    period: "2021 — 2023",
    location: "Remote",
    tasks: [
      "Developed and customized dynamic websites using PHP and WordPress CMS",
      "Built and styled responsive front-ends using HTML, CSS, and Bootstrap",
      "Designed and managed MySQL/SQL database structures for web applications",
      "Installed, configured, and maintained WordPress themes and plugins",
      "Performed on-page SEO and site optimization to improve search rankings",
      "Collaborated with clients to gather requirements and deliver custom web solutions",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding section-gap relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Where I&apos;ve{" "}
          <span className="gradient-text">worked</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-16 md:pl-20 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-accent/40 bg-navy-950 group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300 z-10">
                  <div className="absolute inset-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300" />
                </div>

                <div className="glass-card-hover p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-accent font-medium">
                        <Briefcase size={14} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="font-mono text-sm text-gray-400">
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-500">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Tasks */}
                  <ul className="space-y-2">
                    {exp.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/30 mt-2 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
