"use client";
import { motion } from "framer-motion";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <div>
        <h2>Product section</h2>
      </div>
    </div>
  );
}
