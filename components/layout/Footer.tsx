"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Explore: ["Missions", "Galaxies", "Planets", "Stars"],
  Community: ["Explorers", "Events", "Blog", "Discord"],
  Resources: ["Documentation", "API", "Support", "Status"],
};

const socialIcons = [
  { name: "Twitter", icon: "𝕏" },
  { name: "GitHub", icon: "⌘" },
  { name: "Discord", icon: "💬" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Top Section */}
        <div className="grid gap-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-semibold tracking-wide font-(family-name:--font-space)">
                AstroBloom
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Explore the universe with a cute futuristic space
              experience. Built with love for dreamers and
              stargazers.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    text-sm
                    text-slate-300
                    transition-colors
                    duration-200
                    hover:bg-white/10
                    hover:text-white
                    hover:border-purple-500/30
                  "
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 font-(family-name:--font-space)">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-sm
                        text-slate-400
                        transition-colors
                        duration-200
                        hover:text-purple-300
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 AstroBloom. All rights reserved. Built with
            ✨ for dreamers.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}