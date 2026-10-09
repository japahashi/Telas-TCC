import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import Badge from "../Badge/Badge";
import "./StatCard.css";

interface StatCardProps {
  icon?: ReactNode;
  label: string;
  badgeText?: string;
  badgeVariant?: "good" | "warning" | "alert" | "info" | "neutral";
  value: string;
  trendIcon?: ReactNode;
  trendText?: string;
  chevronIcon?: ReactNode;
  onClick?: () => void;
}

function StatCard({
  icon,
  label,
  badgeText,
  badgeVariant = "good",
  value,
  trendIcon,
  trendText,
  chevronIcon,
  onClick,
}: StatCardProps) {
  return (
    <div className="bloom-stat-card" onClick={onClick}>
      <div className="bloom-stat-card-header">
        <IconSlot icon={icon} size={20} />
        <span className="bloom-stat-card-label">{label}</span>
        {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
      </div>

      <div className="bloom-stat-card-value">{value}</div>

      <div className="bloom-stat-card-footer">
        {trendText && (
          <span className="bloom-stat-card-trend">
            <IconSlot icon={trendIcon} label="^" size={12} />
            {trendText}
          </span>
        )}
        {onClick && <IconSlot icon={chevronIcon} label=">" size={14} />}
      </div>
    </div>
  );
}

export default StatCard;
