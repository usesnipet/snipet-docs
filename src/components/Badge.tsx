import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
      {children}
    </span>
  );
}

