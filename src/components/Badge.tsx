import React from "react";
import "./Badge.css";

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="badge">
      {children}
    </span>
  );
}

