import React from "react";
import "./FeatureCard.css";

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
    <div className="feature-card">
      <div className="feature-card-icon-wrap">
        <Icon size={20} className="feature-card-icon" />
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
}

