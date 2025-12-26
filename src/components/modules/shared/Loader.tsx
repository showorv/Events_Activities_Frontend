"use client";

import { motion } from "framer-motion";

export default function Loader({ size = 12 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block rounded-full bg-primary"
          style={{ width: size, height: size }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
