import React from "react";
import { motion } from "motion/react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 text-sm";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-white text-black hover:bg-neutral-200",
    secondary:
      "bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800",
    ghost: "text-neutral-400 hover:text-white hover:bg-white/5",
  };

  const content = (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );

  // Keep current behavior: when `href` is provided, we render an anchor
  // containing the motion button content.
  if (href) return <a href={href}>{content}</a>;
  return content;
}

