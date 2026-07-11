"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="section-padding section-gap relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" aria-hidden="true" />

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
            Certificates
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Certifications &{" "}
          <span className="gradient-text">courses</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="glass-card-hover p-6 group relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/[0.06] to-transparent rounded-bl-3xl" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm/20 to-warm/5 border border-warm/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={22} className="text-warm" />
                </div>

                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{cert.issuer}</span>
                  <span className="flex items-center gap-1 font-mono text-xs text-gray-500">
                    <Calendar size={10} />
                    {cert.year}
                  </span>
                </div>

                <div className="mt-3">
                  <span className="tag">{cert.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
