"use client";

import { useState } from "react";
import ScrollReveal from "../shared/ScrollReveal";

const faqs = [
  {
    q: "How do I join an event?",
    a: "Simply explore events and click join.",
  },
  {
    q: "Is payment secure?",
    a: "Yes, all payments are encrypted and verified.",
  },
  {
    q: "How can I become a host?",
    a: "Apply via the Become Host page.",
  },
  {
    q: "Can I leave an event after payment?",
    a: "No. Once payment is completed, leaving or canceling the event is not allowed as the slot is reserved for you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-muted/40 px-6">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-center">FAQs</h2>
      </ScrollReveal>

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div
              className="rounded-lg border p-5 cursor-pointer bg-background"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.q}</h3>
                <span className="text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>

              {openIndex === i && (
                <p className="mt-3 text-muted-foreground">
                  {faq.a}
                </p>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
