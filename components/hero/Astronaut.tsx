"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

export default function Astronaut() {
  const { x, y } = useMousePosition();

  // Smooth parallax with centered calculation
  const moveX =
    typeof window !== "undefined"
      ? (x - window.innerWidth / 2) * 0.02
      : 0;
  const moveY =
    typeof window !== "undefined"
      ? (y - window.innerHeight / 2) * 0.015
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -18, 0],
      }}
      transition={{
        opacity: { duration: 1, delay: 0.3 },
        scale: { duration: 1, delay: 0.3 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative"
      style={{
        translateX: moveX,
        translateY: moveY,
      }}
    >
      {/* Outer ambient glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          scale-125

          rounded-full

          bg-linear-to-r
          from-purple-500/20
          via-pink-500/15
          to-blue-500/15

          blur-[120px]
          sm:blur-[160px]
        "
      />

      {/* Inner focused glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          -z-10

          w-48 h-48
          sm:w-64 sm:h-64
          lg:w-80 lg:h-80

          rounded-full

          bg-purple-500/25

          blur-[80px]
          sm:blur-[100px]
        "
      />

      {/* Orbiting Planet */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-2 sm:left-0
          top-12 sm:top-20

          h-12 w-12
          sm:h-16 sm:w-16
          lg:h-20 lg:w-20

          rounded-full

          bg-linear-to-br
          from-purple-400
          via-purple-500
          to-pink-500

          shadow-lg
          shadow-purple-500/40
        "
      >
        {/* Planet ring */}
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[140%] h-[30%]
            rounded-full
            border border-purple-300/30
            rotate-[-20deg]
          "
        />
      </motion.div>

      {/* Small moon */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute
          -right-2 sm:right-4
          bottom-16 sm:bottom-24 lg:bottom-32

          h-6 w-6
          sm:h-8 sm:w-8

          rounded-full

          bg-linear-to-br
          from-blue-300
          to-cyan-400

          shadow-md
          shadow-blue-400/30
        "
      />

      {/* Star Top Right */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-2 sm:right-6
          top-4 sm:top-10

          text-xl sm:text-2xl lg:text-3xl
        "
      >
        ✨
      </motion.div>

      {/* Star Bottom Left */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="
          absolute
          bottom-12 sm:bottom-20
          left-4 sm:left-10

          text-lg sm:text-xl lg:text-2xl
        "
      >
        ⭐
      </motion.div>

      {/* Sparkle Bottom Right */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="
          absolute
          bottom-6 sm:bottom-10
          right-6 sm:right-12

          text-base sm:text-lg lg:text-xl
        "
      >
        ✦
      </motion.div>

      {/* Extra sparkle top left */}
      <motion.div
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          absolute
          top-2 sm:top-6
          left-8 sm:left-16

          text-sm sm:text-base lg:text-lg
        "
      >
        💫
      </motion.div>

      {/* Astronaut Image */}
      <Image
        src="/astronaut.png"
        alt="AstroBloom Astronaut — friendly space companion"
        width={700}
        height={700}
        priority
        className="
          relative
          z-10

          w-70
          sm:w-90
          md:w-105
          lg:w-130
          xl:w-150

          h-auto

          drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]
          sm:drop-shadow-[0_0_60px_rgba(139,92,246,0.45)]
        "
      />
    </motion.div>
  );
}