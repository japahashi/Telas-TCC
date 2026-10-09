import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./Sidebar.css";

interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  menuIcon?: ReactNode;
  onMenuClick?: () => void;
}

function Sidebar({ items, activeId, onSelect, menuIcon, onMenuClick }: SidebarProps) {
  return (
    <nav className="bloom-sidebar">
      <button type="button" className="bloom-sidebar-menu" onClick={onMenuClick}>
        <IconSlot icon={menuIcon} label="menu" size="2vw" />
      </button>

      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          title={item.label}
          className={item.id === activeId ? "bloom-sidebar-item is-active" : "bloom-sidebar-item"}
          onClick={() => onSelect(item.id)}
        >
          <IconSlot icon={item.icon} label={item.label} size="2.2vw" />
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;
