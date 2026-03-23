import React from "react";
import "./ConceptCard.css";

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
    <div className="concept-card">
      <div className="concept-card-header">
        <Icon size={18} className="concept-card-icon" />
        <h3 className="concept-card-title">
          {title}
        </h3>
      </div>
      <p className="concept-card-description">{description}</p>
    </div>
  );
}

