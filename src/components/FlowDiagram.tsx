import React from "react";
import { ArrowRight } from "lucide-react";
import "./FlowDiagram.css";

export default function FlowDiagram() {
  const steps = ["Input", "Context", "Execution", "Output"] as const;

  return (
    <div className="flow-diagram">
      {steps.map((step, i, arr) => (
        <div key={step} className="flow-diagram-step-wrap">
          <div className="flow-diagram-step">
            {step}
          </div>
          {i < arr.length - 1 && (
            <ArrowRight
              className="flow-diagram-arrow"
              size={20}
            />
          )}
        </div>
      ))}
    </div>
  );
}

