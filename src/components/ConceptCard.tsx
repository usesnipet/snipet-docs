import React from "react";

type ConceptCardProps = {
  title: string;
  description: string;
  icon: any;
};

export default function ConceptCard({
  title,
  description,
  icon: Icon,
}: ConceptCardProps) {
  return (
    <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <Icon size={18} className="text-emerald-500" />
        <h3 className="font-mono text-sm font-bold text-neutral-200 uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

