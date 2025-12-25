// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const rotatingWords = ["Connect", "Explore", "Join", "Discover"];

// export default function HeroSection() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % rotatingWords.length);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="w-full min-h-[80vh] flex items-center justify-center 
//       bg-gradient-to-br from-background to-muted px-6 pt-28">
      
//       <div className="max-w-4xl mx-auto text-center">

//         {/* HERO TITLE */}
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
//           Find People to  
//           <span className="ml-3 inline-flex h-16 overflow-hidden text-primary">
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="ml-2"
//               >
//                 {rotatingWords[index]}
//               </motion.span>
//             </AnimatePresence>
//           </span>
//         </h1>

//         {/* SUBTEXT */}
//         <p className="mt-5 text-lg md:text-xl text-muted-foreground">
//           Join exciting events, meet new people, and create unforgettable experiences.
//         </p>

//         {/* CTA BUTTONS */}
//         <div className="mt-8 flex items-center justify-center gap-4">
          
//           {/* Primary Button */}
//           <motion.a
//             href="/events"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium 
//               shadow hover:bg-primary/80 transition"
//           >
//             Explore Events
//           </motion.a>

//           {/* Outline Button */}
//           <motion.a
//             href="/become-host"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 border-2 border-border text-foreground rounded-full font-medium
//               hover:bg-foreground hover:text-background transition"
//           >
//             Become a Host
//           </motion.a>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Connect", "Explore", "Join", "Discover"];

export default function ParallaxHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 400], [0, -120]);
  const yBg = useTransform(scrollY, [0, 400], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      
      {/* Parallax blobs */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        style={{ y: yBg }}
        className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
      />

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex min-h-screen items-center justify-center px-6"
      >
        <div className="max-w-5xl text-center">
          
          {/* Heading */}
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
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Discover events, meet like-minded people, and build meaningful
            real-world connections.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <motion.a
              href="/events"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground shadow-lg"
            >
              Explore Events
            </motion.a>

            <motion.a
              href="/become-host"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-border px-7 py-3 font-medium text-foreground hover:bg-accent-foreground hover:text-background"
            >
              Become a Host
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}

