import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./SummaryStats.css";

interface SummaryStatItem {
  id: string;
  icon?: ReactNode;
  value: number;
  label: string;
}

interface SummaryStatsProps {
  items: SummaryStatItem[];
}

function SummaryStats({ items }: SummaryStatsProps) {
  return (
    <div className="bloom-summary-stats">
      {items.map((item) => (
        <div key={item.id} className="bloom-summary-stat">
          <IconSlot icon={item.icon} size={18} />
          <span className="bloom-summary-stat-value">{item.value}</span>
          <span className="bloom-summary-stat-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default SummaryStats;
