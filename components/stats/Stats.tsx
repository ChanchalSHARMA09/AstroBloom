"use client";

import { motion, type Variants } from "framer-motion";

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

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Stats() {
  return (
    <section
      id="stats"
      className="
        relative
        px-5
        py-16

        sm:px-6
        sm:py-20

        lg:py-24
      "
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="
            relative

            grid
            grid-cols-2

            gap-6

            overflow-hidden

            rounded-2xl

            border border-white/10

            bg-linear-to-br
            from-white/4
            to-white/1

            p-6

            backdrop-blur-xl

            sm:gap-8
            sm:rounded-3xl
            sm:p-8

            lg:grid-cols-4
            lg:gap-10
            lg:p-12
          "
        >
          {/* Background Glow */}
          <div
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              h-80
              w-80

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-purple-500/5

              blur-[100px]
            "
          />

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="
                relative
                text-center
              "
            >
              {/* Divider */}
              {index > 0 && (
                <div
                  className="
                    absolute
                    left-0
                    top-1/2

                    hidden

                    h-8
                    w-px

                    -translate-y-1/2

                    bg-white/10

                    lg:block
                  "
                />
              )}

              <h3
                className="
                  text-2xl
                  font-bold

                  sm:text-3xl

                  lg:text-4xl
                "
              >
                <span
                  className="
                    bg-linear-to-r
                    from-purple-400
                    to-pink-400

                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.value}
                </span>

                {item.suffix && (
                  <span
                    className="
                      text-xl
                      text-purple-400/70

                      sm:text-2xl

                      lg:text-3xl
                    "
                  >
                    {item.suffix}
                  </span>
                )}
              </h3>

              <p
                className="
                  mt-2

                  text-xs
                  tracking-wide

                  text-slate-400

                  sm:text-sm
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}