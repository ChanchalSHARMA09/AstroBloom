"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import useMousePosition from "@/hooks/useMousePosition";

export default function Astronaut() {
  const { x, y } = useMousePosition();

  const moveX = (x - window.innerWidth / 2) * 0.015;
  const moveY = (y - window.innerHeight / 2) * 0.015;

  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: moveX,
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        x: {
          duration: 0.4,
        },
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
        width={600}
        height={600}
        priority
        className="w-[380px] md:w-[550px]"
      />
    </motion.div>
  );
}