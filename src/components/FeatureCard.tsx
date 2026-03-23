import React from "react";

type FeatureCardProps = {
  icon: any;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-neutral-700 transition-colors">
        <Icon size={20} className="text-neutral-300" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

