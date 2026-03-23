import React from "react";
import { motion } from "motion/react";
import "./Button.css";

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
  const baseStyles = "button button-base";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "button-primary",
    secondary: "button-secondary",
    ghost: "button-ghost",
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

