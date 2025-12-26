"use client";

import { motion } from "framer-motion";
import Loader from "./Loader";

export default function FullPageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <Loader size={14} />
      <p className="mt-4 text-sm text-muted-foreground">
        Loading, please wait...
      </p>
    </motion.div>
  );
}
