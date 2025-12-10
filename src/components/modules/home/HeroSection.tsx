"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingWords = ["Connect", "Explore", "Join", "Discover"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center 
      bg-gradient-to-br from-background to-muted px-6 pt-28">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* HERO TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
          Find People to  
          <span className="ml-3 inline-flex h-16 overflow-hidden text-primary">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="ml-2"
              >
                {rotatingWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-5 text-lg md:text-xl text-muted-foreground">
          Join exciting events, meet new people, and create unforgettable experiences.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex items-center justify-center gap-4">
          
          {/* Primary Button */}
          <motion.a
            href="/events"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium 
              shadow hover:bg-primary/80 transition"
          >
            Explore Events
          </motion.a>

          {/* Outline Button */}
          <motion.a
            href="/become-host"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-border text-foreground rounded-full font-medium
              hover:bg-foreground hover:text-background transition"
          >
            Become a Host
          </motion.a>

        </div>
      </div>
    </section>
  );
}
