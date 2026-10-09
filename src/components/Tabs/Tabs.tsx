import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./Tabs.css";

interface TabItem {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
}

function Tabs({ items, value, onChange }: TabsProps) {
  return (
    <div className="bloom-tabs">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          className={item.value === value ? "bloom-tab is-active" : "bloom-tab"}
          onClick={() => onChange(item.value)}
        >
          {item.icon && <IconSlot icon={item.icon} size={16} />}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;
