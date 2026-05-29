"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "10K", suffix: "+", label: "Active Explorers" },
  { value: "99.9", suffix: "%", label: "Mission Success" },
  { value: "120", suffix: "+", label: "Galaxies Mapped" },
  { value: "24/7", label: "Mission Support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="
            relative
            rounded-2xl sm:rounded-3xl

            border border-white/8

            bg-linear-to-br
            from-white/4
            to-white/1

            backdrop-blur-xl

            grid
            gap-6 sm:gap-8 lg:gap-10

            p-6 sm:p-8 lg:p-12

            grid-cols-2
            lg:grid-cols-4

            overflow-hidden
          "
        >
          {/* Background decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="relative text-center group"
            >
              {/* Divider (hidden on first item and first of each row on mobile) */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/8 hidden lg:block" />
              )}

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-(family-name:--font-space)">
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {item.value}
                </span>
                {item.suffix && (
                  <span className="text-purple-400/70 text-xl sm:text-2xl lg:text-3xl">
                    {item.suffix}
                  </span>
                )}
              </h3>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
