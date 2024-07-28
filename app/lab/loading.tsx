"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      {/* <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-slate-900"></div>
       */}
      <motion.div
        className="flex justify-center items-center h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.2 }}
      >
        <p className="text-slate-900">Loading...</p>
      </motion.div>
    </div>
  );
}
