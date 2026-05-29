"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Astronaut() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10

          rounded-full

          bg-purple-500/20

          blur-3xl
        "
      />

      <Image
        src="/astronaut.png"
        alt="AstroBloom Astronaut"
        width={500}
        height={500}
        priority
        className="w-[320px] md:w-112.5"
      />
    </motion.div>
  );
}