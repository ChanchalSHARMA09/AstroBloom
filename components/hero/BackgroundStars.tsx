"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 50 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: 2 + Math.random() * 4,
}));

export default function BackgroundStars() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}