"use client";

import Link from "next/link";
import ScrollReveal from "../shared/ScrollReveal";



export default function ContactSection() {
  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-center text-muted-foreground mt-4">
          Have questions or ideas? We’d love to hear from you.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-8 py-3 text-primary-foreground font-medium shadow"
          >
            Contact Us
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
