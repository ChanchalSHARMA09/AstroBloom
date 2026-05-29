import { motion, type Variants } from "framer-motion";
import { Rocket, Sparkles, Globe, Shield, Zap, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: "Explore",
    description:
      "Discover endless possibilities beyond the stars with cutting-edge propulsion technology.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Sparkles,
    title: "Create",
    description:
      "Build futuristic experiences with creativity and AI-powered design tools.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "Connect",
    description:
      "Join dreamers and innovators from across the galaxy in real-time.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Protect",
    description:
      "Enterprise-grade security shields for all your cosmic data and missions.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Accelerate",
    description:
      "Warp-speed performance with sub-light latency across the universe.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Star,
    title: "Evolve",
    description:
      "Continuously evolving platform that adapts with each new discovery.",
    gradient: "from-indigo-500 to-purple-600",
  },
];



export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6">
      {/* Section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-medium text-purple-400 tracking-widest uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AstroBloom
            </span>
            ?
          </h2>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            Everything you need to explore the cosmos, all in one
            beautifully designed platform.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  group
                  relative

                  rounded-2xl sm:rounded-3xl

                  border border-white/8

                  bg-white/3

                  backdrop-blur-xl

                  p-6 sm:p-8

                  transition-colors
                  duration-500

                  hover:border-white/15
                  hover:bg-white/6

                  overflow-hidden
                "
              >
                {/* Hover glow effect */}
                <div
                  className={`
                    absolute -top-20 -right-20
                    w-40 h-40
                    rounded-full
                    bg-linear-to-br ${feature.gradient}
                    opacity-0
                    blur-[60px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-15
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    mb-5 sm:mb-6
                    inline-flex
                    items-center justify-center
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-xl sm:rounded-2xl
                    bg-linear-to-br ${feature.gradient}
                    shadow-lg
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                  `}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold font-(family-name:--font-space) transition-colors group-hover:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0
                    h-0.5
                    bg-linear-to-r ${feature.gradient}
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-60
                  `}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
