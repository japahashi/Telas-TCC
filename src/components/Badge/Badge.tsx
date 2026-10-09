import type { ReactNode } from "react";
import "./Badge.css";

interface BadgeProps {
  variant?: "good" | "warning" | "alert" | "info" | "neutral";
  children: ReactNode;
}

function Badge({ variant = "neutral", children }: BadgeProps) {
  return <span className={"bloom-badge bloom-badge-" + variant}>{children}</span>;
}

export default Badge;
