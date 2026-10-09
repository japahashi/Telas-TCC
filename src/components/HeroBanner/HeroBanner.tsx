import type { ReactNode } from "react";
import "./HeroBanner.css";

interface HeroBannerProps {
  eyebrow?: string;
  greetingTitle: string;
  greetingText?: string;
  backgroundImage?: ReactNode;
}

function HeroBanner({ eyebrow, greetingTitle, greetingText, backgroundImage }: HeroBannerProps) {
  return (
    <div className="bloom-hero-banner">
      <div className="bloom-hero-banner-image">{backgroundImage}</div>
      <div className="bloom-hero-banner-content">
        {eyebrow && <span className="bloom-hero-banner-eyebrow">{eyebrow}</span>}
        <h2>{greetingTitle}</h2>
        {greetingText && <p>{greetingText}</p>}
      </div>
    </div>
  );
}

export default HeroBanner;
