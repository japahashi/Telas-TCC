import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./ListItemCard.css";

interface ListItemCardProps {
  leadingIcon?: ReactNode;
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
}

function ListItemCard({ leadingIcon, title, subtitle, meta, trailing, onClick }: ListItemCardProps) {
  return (
    <div className={onClick ? "bloom-list-item is-clickable" : "bloom-list-item"} onClick={onClick}>
      <IconSlot icon={leadingIcon} size="2.2vw" className="bloom-list-item-icon" />

      <div className="bloom-list-item-body">
        <span className="bloom-list-item-title">{title}</span>
        {subtitle && <span className="bloom-list-item-subtitle">{subtitle}</span>}
      </div>

      {meta && <div className="bloom-list-item-meta">{meta}</div>}
      {trailing && <div className="bloom-list-item-trailing">{trailing}</div>}
    </div>
  );
}

export default ListItemCard;
