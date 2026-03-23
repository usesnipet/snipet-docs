import React from "react";
import { ArrowRight } from "lucide-react";

export default function FlowDiagram() {
  const steps = ["Input", "Context", "Execution", "Output"] as const;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-12">
      {steps.map((step, i, arr) => (
        <div
          key={step}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <div className="px-8 py-4 rounded-xl border border-neutral-800 bg-neutral-900 font-mono text-sm text-neutral-300 min-w-[140px] text-center">
            {step}
          </div>
          {i < arr.length - 1 && (
            <ArrowRight
              className="text-neutral-700 rotate-90 md:rotate-0"
              size={20}
            />
          )}
        </div>
      ))}
    </div>
  );
}

