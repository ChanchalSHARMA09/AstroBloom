"use client";

import { motion } from "framer-motion";
import Astronaut from "./Astronaut";

export default function Hero() {
  return (
    <section id="hero" className="relative z-10">
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-8
          sm:gap-12
          lg:gap-16
          px-5
          sm:px-8
          lg:px-16
          pt-24
          sm:pt-28
          pb-8

          lg:flex-row
        "
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              mb-6 sm:mb-8

              inline-flex
              items-center
              gap-2

              rounded-full

              border border-white/10

              bg-white/5

              px-4 sm:px-5
              py-2 sm:py-2.5

              text-xs sm:text-sm
              text-slate-300

              backdrop-blur-xl

              shadow-[0_0_15px_rgba(139,92,246,0.1)]
            "
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.span>
            Future of Space Exploration
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              max-w-2xl
              mx-auto lg:mx-0

              text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl

              font-bold

              leading-[1.1]
            "
          >
            Explore the{" "}
            <span className="relative inline-block">
              Universe
              {/* Decorative underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="
                  absolute
                  -bottom-1 sm:-bottom-2
                  left-0 right-0
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-purple-400
                  to-transparent
                  origin-left
                "
              />
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-pink-400
                to-blue-400

                bg-clip-text
                text-transparent
              "
            >
              One Star at a Time
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              mt-6 sm:mt-8

              max-w-xl
              mx-auto lg:mx-0

              text-base sm:text-lg
              leading-relaxed

              text-slate-400
            "
          >
            A cute futuristic space experience built with
            modern design, smooth animations, delightful
            interactions and a lovable astronaut companion
            guiding your journey through the stars.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              mt-8 sm:mt-10

              flex
              flex-col
              sm:flex-row
              flex-wrap
              gap-3 sm:gap-4

              justify-center
              lg:justify-start
            "
          >
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
              Launch Mission 🚀
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
              ▶ Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="
              mt-10 sm:mt-14
              flex
              flex-wrap
              items-center
              gap-6 sm:gap-8
              justify-center lg:justify-start
            "
          >
            {[
              { value: "10K+", label: "Explorers" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9★", label: "Rating" },
            ].map((item) => (
              <div key={item.label} className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-space)]">
                  {item.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Astronaut */}
        <div
          className="
            flex
            flex-1
            justify-center

            lg:justify-end

            mt-4 sm:mt-0
          "
        >
          <Astronaut />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute
          bottom-6 sm:bottom-8
          left-1/2
          -translate-x-1/2
          flex flex-col items-center gap-2
        "
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-5 h-8
            rounded-full
            border border-white/20
            flex items-start justify-center
            pt-1.5
          "
        >
          <div className="w-1 h-2 rounded-full bg-purple-400/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}