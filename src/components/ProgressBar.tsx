import React from "react";
import { motion } from "motion/react";
import "./ProgressBar.css";

type ProgressBarProps = {
  progress: number;
  label: string;
};

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-head">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="progress-bar-track">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="progress-bar-fill"
        />
      </div>
    </div>
  );
}

