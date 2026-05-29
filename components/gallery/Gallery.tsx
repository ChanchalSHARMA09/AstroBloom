"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Nova Chen",
    role: "Space Explorer",
    avatar: "🧑‍🚀",
    quote:
      "AstroBloom transformed how we navigate the cosmos. The interface is absolutely stunning and incredibly intuitive.",
  },
  {
    name: "Orion Park",
    role: "Galaxy Cartographer",
    avatar: "🌟",
    quote:
      "The real-time mapping tools are revolutionary. I've charted more galaxies in a month than I did in a year before.",
  },
  {
    name: "Luna Rivera",
    role: "Mission Commander",
    avatar: "👩‍🚀",
    quote:
      "Mission planning has never been smoother. The AI assistant predicts routes with incredible precision.",
  },
  {
    name: "Atlas Patel",
    role: "Research Scientist",
    avatar: "🔬",
    quote:
      "The data visualization tools are next level. AstroBloom makes complex cosmic data beautiful and accessible.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6">
      {/* Section glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-pink-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-medium text-pink-400 tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Loved by{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Explorers
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            Hear from our community of space enthusiasts who are
            redefining what&apos;s possible.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="
                group
                relative

                rounded-2xl sm:rounded-3xl

                border border-white/8

                bg-white/[0.03]

                backdrop-blur-xl

                p-6 sm:p-8

                transition-all
                duration-500

                hover:border-white/15
                hover:bg-white/[0.06]
              "
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-4xl sm:text-5xl text-white/5 font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center text-lg sm:text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
