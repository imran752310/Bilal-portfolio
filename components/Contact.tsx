"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mbilalkhan.dev@gmail.com",
    href: "mailto:muhammadbilal363651@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 579 563 175",
    href: "tel:+966579563175",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manfuha, Riyadh 12683",
    href: "#",
  },
];

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-bilal-211b36262/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mbilalkhandev",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:muhammadbilal363651@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="section-padding section-gap relative">
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
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Let&apos;s{" "}
          <span className="gradient-text">connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gray-400 max-w-lg mb-16"
        >
          Have a project in mind or looking for a dedicated IT professional?
          I&apos;d love to hear from you.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-6 md:p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-navy-900/50 border border-white/[0.06] rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/40 focus:bg-navy-800/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-navy-900/50 border border-white/[0.06] rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/40 focus:bg-navy-800/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-navy-900/50 border border-white/[0.06] rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/40 focus:bg-navy-800/50 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy-950 font-display font-semibold text-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Send size={16} className="relative z-10" />
              <span className="relative z-10">Send Message</span>
            </button>
          </motion.form>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/[0.08] border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/[0.12] group-hover:border-accent/20 transition-all duration-300">
                  <info.icon size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                Connect
              </p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    className="w-12 h-12 rounded-xl border border-white/[0.06] flex items-center justify-center text-gray-400 hover:border-accent/30 hover:text-accent hover:bg-accent/[0.04] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                Languages
              </p>
              <div className="space-y-3">
                {[
                  { lang: "English", level: "Fluent", width: "90%" },
                  { lang: "Urdu / Hindi", level: "Fluent", width: "95%" },
                  { lang: "Arabic", level: "Beginner", width: "30%" },
                ].map((l, i) => (
                  <motion.div
                    key={l.lang}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{l.lang}</span>
                      <span className="text-xs text-gray-500">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
                        style={{ width: l.width }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
