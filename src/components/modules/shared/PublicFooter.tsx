"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground pt-12 pb-6 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Eventify</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Discover events, book your experiences, and enjoy seamless hosting.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[Facebook, Instagram, Twitter, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-muted rounded-full hover:bg-accent transition"
              >
                <Icon size={18} className="text-foreground" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/events" className="hover:text-primary">Events</Link></li>
            <li><Link href="/become-host" className="hover:text-primary">Become a Host</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-muted-foreground text-sm mb-3">
            Subscribe to get latest event updates.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-md bg-card text-foreground border border-border"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-muted-foreground text-sm mt-10">
        © {new Date().getFullYear()} Eventify — All rights reserved.
      </div>
    </footer>
  );
}
