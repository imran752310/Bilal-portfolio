"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding section-gap relative">
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
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Selected{" "}
          <span className="gradient-text">work</span>
        </motion.h2>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent/10 border-accent/30 text-accent"
                  : "border-white/[0.06] text-gray-400 hover:border-white/10 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              layout
              className="glass-card-hover group overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-navy-700 to-navy-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                      <span className="font-display font-bold text-accent text-xl">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-mono">
                      [ Replace with screenshot ]
                    </p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0 ml-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 rounded-lg border border-white/[0.06] text-gray-400 hover:border-accent/30 hover:text-accent transition-all duration-300"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-lg border border-white/[0.06] text-gray-400 hover:border-accent/30 hover:text-accent transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            More projects coming soon
            <ArrowUpRight size={14} className="text-accent/50" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
