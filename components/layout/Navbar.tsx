"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Stats", href: "#stats" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          mx-auto
          flex
          max-w-5xl
          items-center
          justify-between

          rounded-2xl sm:rounded-full

          border border-white/10

          px-5 sm:px-8
          py-3.5 sm:py-4

          backdrop-blur-2xl

          transition-all
          duration-500

          ${
            scrolled
              ? "bg-white/8 shadow-[0_0_40px_rgba(139,92,246,0.2)] border-white/15"
              : "bg-white/5 shadow-[0_0_30px_rgba(139,92,246,0.1)]"
          }
        `}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            🚀
          </span>
          <span className="text-base sm:text-lg font-semibold tracking-wide">
            AstroBloom
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                relative
                text-sm
                text-slate-300
                transition-colors
                duration-300
                hover:text-white

                after:absolute
                after:-bottom-1
                after:left-0
                after:h-0.5
                after:w-0
                after:bg-linear-to-r
                after:from-purple-400
                after:to-pink-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="
            hidden sm:block
            rounded-full
            bg-linear-to-r
            from-purple-500
            to-pink-500
            px-5 sm:px-6
            py-2.5 sm:py-3
            text-xs sm:text-sm
            font-medium
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
          "
        >
          Launch Mission
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex lg:hidden flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-xl bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              mobileOpen
                ? { rotate: 45, y: 5 }
                : { rotate: 0, y: 0 }
            }
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={
              mobileOpen ? { opacity: 0 } : { opacity: 1 }
            }
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={
              mobileOpen
                ? { rotate: -45, y: -7 }
                : { rotate: 0, y: 0 }
            }
            className="block w-5 h-0.5 bg-white rounded-full"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              lg:hidden
              mt-3
              mx-auto
              max-w-5xl
              rounded-2xl
              border border-white/10
              bg-[#0b1026]/95
              backdrop-blur-2xl
              p-6
              shadow-[0_0_50px_rgba(139,92,246,0.15)]
            "
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    px-4 py-3.5
                    text-base
                    text-slate-300
                    transition-all
                    duration-200
                    hover:bg-white/5
                    hover:text-white
                    hover:pl-6
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setMobileOpen(false)}
                className="
                  w-full
                  rounded-xl
                  bg-linear-to-r
                  from-purple-500
                  to-pink-500
                  py-3.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                "
              >
                Launch Mission 🚀
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}