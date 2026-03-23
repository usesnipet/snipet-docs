import React from "react";
import { motion } from "motion/react";

type ProgressBarProps = {
  progress: number;
  label: string;
};

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between mb-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        />
      </div>
    </div>
  );
}

