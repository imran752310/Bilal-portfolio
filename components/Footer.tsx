"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding py-10 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-navy-950 font-display font-bold text-xs">
            B
          </div>
          <span className="text-sm text-gray-500">
            &copy; {currentYear} Muhammad Bilal
          </span>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-gray-600">
          Built with{" "}
          <Heart size={12} className="text-warm/50 fill-warm/30" />{" "}
          using Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
