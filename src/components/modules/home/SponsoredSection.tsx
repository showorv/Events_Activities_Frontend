"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";

const sponsors = [
  "/sponsors/bkash.png",
  "/sponsors/daraz.png",
  "/sponsors/pathao.png",
  "/sponsors/ph.jpg",
  "/sponsors/shikho.png",
  "/sponsors/ssl.png",
];

export default function SponsoredSection() {
  return (
    <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto">

      <ScrollReveal>
        <h2 className="text-center text-xl font-semibold text-muted-foreground">
          Trusted by communities & brands
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center justify-center">
          {sponsors.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Sponsor"
                className="h-12 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
        </div>
    </section>
  );
}
