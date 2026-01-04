"use client";

import ScrollReveal from "../shared/ScrollReveal";



export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 bg-background px-6">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground text-lg">
          We help people discover meaningful events, build real connections,
          and create unforgettable experiences — whether you’re joining or hosting.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid md:grid-cols-3 gap-10">
        {[
          "Verified Hosts",
          "Secure Payments",
          "Real Communities",
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="rounded-xl border p-6 text-center hover:shadow-lg transition">
              <h3 className="font-semibold text-xl">{item}</h3>
              <p className="mt-3 text-muted-foreground">
                Built with trust, safety, and growth in mind.
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
