"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="
          relative
          max-w-5xl
          mx-auto

          rounded-2xl sm:rounded-[32px] lg:rounded-[40px]

          border border-white/10

          bg-gradient-to-br
          from-purple-500/10
          via-pink-500/5
          to-blue-500/10

          p-8 sm:p-10 lg:p-16

          text-center

          backdrop-blur-xl

          overflow-hidden
        "
      >
        {/* Decorative orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/15 blur-[100px] rounded-full pointer-events-none" />

        {/* Emoji decoration */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-4xl sm:text-5xl mb-6"
        >
          🌌
        </motion.div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-[family-name:var(--font-space)] leading-tight">
          Ready For Your{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next Mission
          </span>
          ?
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
          Join thousands of explorers and start your cosmic
          journey today. The universe is waiting for you.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="
              rounded-full

              bg-gradient-to-r
              from-purple-500
              to-pink-500

              px-7 sm:px-8
              py-3.5 sm:py-4

              text-sm sm:text-base
              font-medium

              shadow-lg
              shadow-purple-500/25

              transition-shadow
              duration-300

              hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]
            "
          >
            Get Started Free 🚀
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="
              rounded-full

              border border-white/10

              bg-white/5

              px-7 sm:px-8
              py-3.5 sm:py-4

              text-sm sm:text-base
              font-medium

              backdrop-blur-xl

              transition-all
              duration-300

              hover:bg-white/10
              hover:border-white/20
            "
          >
            Learn More
          </motion.button>
        </div>

        {/* Trust text */}
        <p className="mt-6 sm:mt-8 text-xs text-slate-500">
          ✨ Free forever for personal use · No credit card required
        </p>
      </motion.div>
    </section>
  );
}
